# Grupo Promoções Bot

Bot automatizado de curadoria e envio de promoções para grupos de **WhatsApp** e **Telegram**. Scrapa ofertas do Mercado Livre e da Shopee, gera links de afiliado, filtra qualidade e faz o dispatch cadenciado para os grupos — sem intervenção manual.

---

## Sumário

1. [Visão geral](#visão-geral)
2. [Parte de Afiliado](#parte-de-afiliado)
3. [Arquitetura](#arquitetura)
4. [Pipeline de uma rodada](#pipeline-de-uma-rodada)
5. [Filtro de qualidade](#filtro-de-qualidade)
6. [Dispatch e cadência de envio](#dispatch-e-cadência-de-envio)
7. [Banco de dados](#banco-de-dados)
8. [Variáveis de ambiente](#variáveis-de-ambiente)
9. [Como rodar localmente](#como-rodar-localmente)
10. [Deploy na VPS (Docker)](#deploy-na-vps-docker)
11. [Estrutura de arquivos](#estrutura-de-arquivos)
12. [Manutenção e operações comuns](#manutenção-e-operações-comuns)

---

## Visão geral

O bot opera de forma totalmente autônoma seguindo este ciclo:

```
Scraping (ML + Shopee)
        ↓
Deduplicação (48h)
        ↓
Filtro de qualidade (score ≥ 6/10)
        ↓
Geração de link afiliado
        ↓
Salvar no banco (PostgreSQL)
        ↓
Dispatch cadenciado → WhatsApp & Telegram
```

**Fontes de scraping:**

| Fonte | Método | Categorias |
|---|---|---|
| Mercado Livre | HTML scraping (axios + cheerio) | Ofertas do Dia, Relâmpago, Container Geral, Notebooks, Eletrodomésticos |
| Shopee | Affiliate Open API (GraphQL) | Produtos com comissão habilitada |

---

## Parte de Afiliado

### O que é marketing de afiliado?

Ao divulgar um produto com um **link de afiliado**, o criador do link recebe uma comissão sobre cada venda realizada por aquele link — sem custo extra para o comprador. O bot gera esses links automaticamente para cada oferta antes de publicar no grupo.

### Mercado Livre — Programa de Afiliados

- **Como funciona:** O ML possui uma API interna (`/affiliate-program/api/v2/affiliates/createLink`) que converte qualquer URL de produto em um link rastreado.
- **Autenticação:** Requer cookies de sessão de uma conta ML cadastrada no programa de afiliados. Esses cookies são persistidos no banco de dados (tabela `ml_cookies`) para não precisar relogar a cada reinicialização.
- **Tag de afiliado:** Configurada via `ML_AFFILIATE_TAG` no `.env`.
- **Comissão:** Percentual variável por categoria, pago pelo ML ao afiliado mensalmente.
- **Fallback:** Se a API retornar erro (sessão expirada, URL não permitida, etc.), o bot usa o link direto do produto — a oferta é enviada mesmo sem rastreamento, sem interromper o fluxo.

**Renovação de cookies ML:**
Quando a sessão expira, é necessário logar manualmente no ML via browser, copiar os cookies (`Cookie` header) e salvar via DBeaver na tabela `botuser.ml_cookies`. O bot carrega automaticamente na próxima inicialização.

### Shopee — Affiliate Open Platform

- **Como funciona:** A Shopee fornece uma API GraphQL oficial (`open-api.affiliate.shopee.com.br/graphql`) para afiliados. Os produtos já retornam com o campo `offerLink` contendo o rastreamento embutido — não é necessário converter links manualmente.
- **Autenticação:** App ID + Secret cadastrados no [Shopee Affiliate Portal](https://affiliate.shopee.com.br). Configurados via `SHOPEE_APP_ID` e `SHOPEE_SECRET` no `.env`.
- **Query usada:** `productOfferV2` — lista produtos com comissão habilitada, incluindo preço, desconto, avaliação e link de afiliado pronto.
- **Comissão:** Percentual definido por loja/produto, visível no campo `commissionRate` da API.
- **Produtos com variação de preço:** Se o produto tem variantes com spread de preço > 30% (ex: tamanhos diferentes), o bot usa o `priceMax` como preço exibido (conservador) e o `priceDiscountRate` da API como desconto real. Se não houver `priceDiscountRate` válido, o produto é descartado — jamais são inventados descontos.

### Proteção contra promoções falsas

O bot possui filtro específico para "desconto fake": se um produto tem `original_price` definido e o desconto calculado for **maior que 65%**, ele é bloqueado automaticamente com o motivo `"desconto suspeito"`. Isso evita que vendedores que inflam o preço original enganem os membros do grupo.

---

## Arquitetura

```
src/
├── index.js                  ← Entry point, orquestra inicialização
├── whatsapp.js               ← Conexão Baileys (QR code, reconexão automática)
├── telegram.js               ← Bot Telegraf
├── config/
│   └── index.js              ← Centraliza todas as env vars com validação
├── cron/
│   ├── promotionsCron.js     ← 4 rodadas/dia de scraping (08h 12h 17h 21h)
│   └── dispatchCron.js       ← Cadência de envio por canal
├── services/
│   ├── promotions.service.js ← Orquestra o pipeline completo de uma rodada
│   ├── dispatcher.service.js ← Busca pendentes, formata e envia para os grupos
│   ├── qualityFilter.js      ← Score 0–10, filtros de qualidade e categoria
│   ├── telegram.service.js   ← Wrapper de envio Telegram (texto + imagem)
│   ├── whatsapp.service.js   ← Wrapper de envio WA (texto + imagem)
│   ├── affiliate/
│   │   ├── mercadolivreAffiliate.js ← Geração de link ML
│   │   └── shopeeAffiliate.js       ← Passthrough do offerLink Shopee
│   ├── scraper/
│   │   ├── index.js              ← Agrega scrapers (scrapeAll)
│   │   ├── mercadolivreScraper.js ← HTML scraping ML (5 URLs)
│   │   └── shopeeScraper.js       ← GraphQL Shopee Affiliate API
│   └── shopee/
│       └── shopeeClient.js        ← Cliente HMAC-SHA256 para Shopee API
├── repositories/
│   ├── promotionsRepository.js  ← CRUD promoções e rodadas
│   ├── affiliateCookies.js      ← Leitura/escrita de cookies ML no banco
│   └── blacklistRepository.js   ← Blacklist de produtos bloqueados
├── database/
│   └── connection.js            ← Pool pg com DATABASE_URL
└── utils/
    ├── delay.js       ← Sleep helper
    ├── find-group.js  ← Script utilitário para descobrir GROUP_ID do WA
    ├── imageCache.js  ← Cache de imagens em disco (temp/images/)
    └── logger.js      ← Pino structured logging
```

---

## Pipeline de uma rodada

### 1. Scraping

**Mercado Livre** — 5 URLs públicas:
- Ofertas do Dia (`ml_ofertas_dia`)
- Ofertas Relâmpago (`ml_oferta_relampago`) → marcadas como `mercadolivre_flash` na coluna `source`
- Container Geral (`ml_container_geral`)
- Notebooks e Informática (`ml_informatica`)
- Eletrodomésticos (`ml_eletro`)

Retry automático até 3 tentativas com backoff. Filtra produtos internacionais já no HTML (verifica `locationText` dos seletores de localização).

**Shopee** — GraphQL `productOfferV2`:
Retorna até 1 página de produtos com `offerLink` já rastreado. Normaliza preços, detecta variações, descarta sem `priceDiscountRate`.

### 2. Deduplicação

Antes de qualquer processamento, verifica se o link já existe no banco nas últimas **48 horas** (pendente ou já enviado). Links duplicados são descartados silenciosamente.

### 3. Filtro de qualidade

Score de 0–10. Mínimo para passar: **6**. Ver seção detalhada abaixo.

### 4. Link afiliado

- Shopee: usa `offerLink` diretamente (já rastreado)
- Mercado Livre: chama API interna com cookies de sessão

### 5. Persistência

Salva na tabela `scraped_promotions` com `ON CONFLICT DO NOTHING` (idempotente por `link`).

---

## Filtro de qualidade

Arquivo: `src/services/qualityFilter.js`

### Pré-filtros (eliminatórios, score = 0)

| Filtro | Critério |
|---|---|
| Preço mínimo | < R$ 19 → descartado |
| Desconto mínimo | < 10% → descartado |
| Blacklist de palavras | ~35 termos bloqueados (capas, bijuterias, conteúdo adulto +18) |
| Desconto suspeito | `original_price` definido + desconto > 65% → bloqueado como fake |
| Produto internacional | Título ou nome da loja contém indicadores internacionais → bloqueado |

**Indicadores internacionais verificados:** `shopee internacional`, `entrega internacional`, `frete internacional`, `envio internacional`, `vendedor internacional`, `enviado da china`, `importado de`, `loja internacional`, `global store`, `cross border`.

### Score por dimensão

| Dimensão | Pontos | Critério |
|---|---|---|
| **Utilidade** | 0–3 | 3 pts = alta utilidade (smartphone, notebook, SSD, TV…); 2 pts = média (air fryer, câmera…); 0 pts = outros |
| **Desconto real** | 0–3 | 3 pts = ≥ 40%; 2 pts = 25–39%; 1 pt = 15–24%; 0 pts = < 15% |
| **Popularidade** | 0–2 | Combinação de `reviews_count` e `rating` |
| **Marca/confiança** | 0–2 | 2 pts = marca conhecida no título; 1 pt = título genérico mas produto tech |

### Categorias detectadas

`detectCategory()` classifica o produto para diversificação do envio:

`smartphone` · `notebook` · `tablet` · `smartwatch` · `tv` · `monitor` · `game` · `audio` · `acessorio` · `eletrodomestico` · `hardware` · `camera` · `outros`

---

## Dispatch e cadência de envio

### Scraping (promotionsCron.js)

Roda **4 vezes por dia** via `node-cron`:
```
0 8,12,17,21 * * *   (America/Sao_Paulo)
```
Mutex simples evita sobreposição de rodadas.

### Envio WhatsApp (dispatchCron.js)

Intervalo **aleatório entre 15 e 25 minutos** via `setTimeout` recursivo. A aleatoriedade reduz o risco de detecção de padrão pelo WhatsApp. Antes de enviar, verifica se o socket Baileys está com estado `open`.

### Envio Telegram (dispatchCron.js)

Fixo a cada **16 minutos** via cron (`*/16 * * * *`). A API oficial do Telegram não tem o mesmo risco de ban, então o intervalo é determinístico.

### Diversificação de categorias (dispatcher.service.js)

Antes do anti-repetição, o pool de candidatos é filtrado com limite por categoria:
- Máximo **2 produtos** por categoria conhecida
- Máximo **1 produto** da categoria `outros`

Pool de candidatos: 15 promoções (`CANDIDATE_POOL = 15`).

### Prioridade de Ofertas Relâmpago

Promoções `mercadolivre_flash` são ordenadas **primeiro** na fila de dispatch. Se ficarem pendentes por mais de **3 horas** sem ser enviadas, são descartadas automaticamente (não faz sentido enviar oferta relâmpago expirada).

### Templates de mensagem

6 templates distintos sorteados aleatoriamente a cada envio. Cada template tem tom diferente (formal, casual, urgência, etc.) para variar o visual no grupo e reduzir risco de spam detection. WhatsApp recebe Markdown (`*bold*`, `~~strike~~`), Telegram recebe HTML convertido (`<b>`, `<s>`).

### Dispatch na inicialização

Ao subir o bot, além de iniciar os crons, **uma oferta é disparada imediatamente** para cada canal — sem esperar o próximo tick do cron.

---

## Banco de dados

**PostgreSQL** · Schema: `botuser`

### Tabelas principais

#### `scraped_promotions`
| Coluna | Tipo | Descrição |
|---|---|---|
| `id` | UUID | Chave primária |
| `title` | TEXT | Título do produto |
| `original_price` | NUMERIC | Preço original (antes da promoção) |
| `promo_price` | NUMERIC | Preço promocional |
| `discount_pct` | NUMERIC | Percentual de desconto |
| `link` | TEXT | URL original do produto |
| `affiliate_link` | TEXT | Link com rastreamento de afiliado |
| `source` | TEXT | Fonte: `mercadolivre`, `mercadolivre_flash`, `shopee` |
| `category` | TEXT | Categoria detectada |
| `image_url` | TEXT | URL da imagem do produto |
| `rating` | NUMERIC | Avaliação média (0–5) |
| `reviews_count` | INT | Número de avaliações |
| `sent_whatsapp` | BOOLEAN | Enviado para WA? |
| `sent_telegram` | BOOLEAN | Enviado para Telegram? |
| `found_at` | TIMESTAMPTZ | Quando foi encontrado |
| `round_id` | UUID | Rodada de scraping que gerou o registro |

#### `scraping_rounds`
Registra cada rodada: status (`running`/`done`/`error`), `total_found`, `total_sent`, `started_at`, `finished_at`.

#### `ml_cookies`
Persiste cookies de sessão do Mercado Livre para o programa de afiliados. Recarregados automaticamente na inicialização do bot.

#### `product_blacklist`
Lista de URLs ou títulos bloqueados manualmente — nunca enviados, independente do score.

---

## Variáveis de ambiente

Crie um arquivo `.env` na raiz (nunca versionar):

```env
# ── WhatsApp ──────────────────────────────────────
GROUP_ID=<JID do grupo WA, ex: 5511999999999-1234567890@g.us>
AUTH_FOLDER=./auth          # pasta de sessão Baileys
SEND_DELAY_MS=2000          # delay entre mensagens (ms)

# ── Telegram ──────────────────────────────────────
TELEGRAM_BOT=<token do BotFather>
TELEGRAM_GROUP_ID=<chat_id do grupo, ex: -1001234567890>

# ── Banco de dados ─────────────────────────────────
DATABASE_URL=postgresql://botuser:senha@host:5432/promocoes_bot

# ── Mercado Livre Afiliado ─────────────────────────
ML_AFFILIATE_TAG=<sua tag de afiliado ML>

# ── Shopee Afiliado ────────────────────────────────
SHOPEE_APP_ID=<app id do portal shopee affiliate>
SHOPEE_SECRET=<secret key>

# ── Scraper ────────────────────────────────────────
SCRAPER_MIN_DISCOUNT=15     # desconto mínimo para considerar (%)
LOG_LEVEL=info              # debug | info | warn | error
```

### Como descobrir o GROUP_ID do WhatsApp

```bash
npm run find-group
```

Escaneia o QR code, lista todos os grupos com o JID. Copie o JID do grupo desejado para `GROUP_ID`.

---

## Como rodar localmente

> Requer Node.js 20+ e PostgreSQL acessível.

```bash
# 1. Instalar dependências
npm install

# 2. Criar o .env (ver seção acima)

# 3. Criar as tabelas no banco
# Execute database.sql no DBeaver ou psql

# 4. Iniciar em modo desenvolvimento (nodemon)
npm run dev

# 5. Escanear QR code do WhatsApp na primeira execução
# O QR aparece no terminal — escaneie pelo WhatsApp > Aparelhos Conectados
```

Na primeira execução o Baileys gera os arquivos de sessão em `./auth/`. Nas execuções seguintes, reconecta automaticamente sem precisar escanear.

---

## Deploy na VPS (Docker)

O projeto usa Docker multi-stage build (Node 20 Alpine).

### Estrutura do container

```dockerfile
# Stage 1: instala apenas deps de produção (npm ci --omit=dev)
# Stage 2: runtime Alpine com openssl, tzdata (TZ=America/Sao_Paulo)
# Volume /app/auth  → sessão WhatsApp persiste entre rebuilds
# Volume /app/logs  → logs acessíveis fora do container
# Limite: 512MB RAM, 0.75 CPU
```

### Processo de deploy

```bash
# Na máquina local: enviar arquivos para VPS via SFTP
# (use qualquer cliente: WinSCP, FileZilla, rsync)

# Na VPS via SSH:
bash deploy.sh

# Ou manualmente:
docker compose down
docker compose up --build -d

# Verificar logs
docker compose logs -f
```

> **Importante:** O arquivo `.env` deve ser copiado manualmente para a VPS — nunca é versionado. A pasta `./auth` também deve ser preservada entre deploys para não precisar escanear o QR novamente.

---

## Estrutura de arquivos

```
.
├── src/
│   ├── index.js                      ← Entry point
│   ├── whatsapp.js                   ← Conexão Baileys
│   ├── telegram.js                   ← Bot Telegraf
│   ├── config/index.js               ← Env vars centralizadas
│   ├── cron/
│   │   ├── promotionsCron.js         ← Scraping 4x/dia
│   │   └── dispatchCron.js           ← Envio WA (15-25min) + TG (16min)
│   ├── services/
│   │   ├── promotions.service.js     ← Pipeline completo
│   │   ├── dispatcher.service.js     ← Dispatch + templates
│   │   ├── qualityFilter.js          ← Score, filtros, categorias
│   │   ├── whatsapp.service.js       ← Envio WA
│   │   ├── telegram.service.js       ← Envio Telegram
│   │   ├── affiliate/
│   │   │   ├── mercadolivreAffiliate.js
│   │   │   └── shopeeAffiliate.js
│   │   ├── scraper/
│   │   │   ├── index.js
│   │   │   ├── mercadolivreScraper.js
│   │   │   └── shopeeScraper.js
│   │   └── shopee/shopeeClient.js
│   ├── repositories/
│   │   ├── promotionsRepository.js
│   │   ├── affiliateCookies.js
│   │   └── blacklistRepository.js
│   ├── database/connection.js
│   └── utils/
│       ├── delay.js
│       ├── find-group.js
│       ├── imageCache.js
│       └── logger.js
├── database.sql              ← DDL completo do banco
├── cleanup-fake-discounts.sql ← Script de limpeza (rodar no DBeaver)
├── docker-compose.yml
├── Dockerfile
├── package.json
└── .env                      ← NÃO versionar
```

---

## Manutenção e operações comuns

### Renovar cookies do Mercado Livre

1. Logar em mercadolivre.com.br no browser
2. Abrir DevTools → Network → qualquer request → copiar header `Cookie`
3. No DBeaver, executar:
   ```sql
   DELETE FROM botuser.ml_cookies;
   -- Inserir novos via interface ou script
   ```
4. Reiniciar o bot para recarregar

### Limpar promoções antigas / falsas

Usar o arquivo `cleanup-fake-discounts.sql` no DBeaver:
1. Executar a seção **DIAGNÓSTICO** para ver o estado atual
2. **PASSO 1A** — preview de falsos descontos
3. **PASSO 1B** — preview de produtos internacionais
4. **PASSO 3** — limpar excesso da categoria `outros`
5. **PASSO 2** — DELETE definitivo de fakes + internacionais

### Ver logs em produção

```bash
# Últimas 100 linhas
docker compose logs --tail=100 bot

# Seguir em tempo real
docker compose logs -f bot
```

### Reiniciar sem rebuild

```bash
docker compose restart bot
```

### Rebuild completo (após mudança de código)

```bash
docker compose down && docker compose up --build -d
```

---

## Tecnologias utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| Node.js | 20 | Runtime |
| @whiskeysockets/baileys | 6.7.x | WhatsApp Web API |
| Telegraf | 4.16 | Telegram Bot API |
| axios + cheerio | — | Scraping HTML ML |
| pg | 8.11 | PostgreSQL client |
| node-cron | 4.2 | Agendamento |
| pino | 9.2 | Structured logging |
| tough-cookie | 6.x | Gerenciamento de cookies ML |
| Docker + Alpine | — | Deploy |
| PostgreSQL | 15+ | Banco de dados |
