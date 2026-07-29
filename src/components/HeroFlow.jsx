import {
  ReactFlow,
  Background,
  Controls,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { FaReact } from "react-icons/fa";

function CodeNode() {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl shadow-2xl w-64">
      <Handle type="source" position={Position.Left} style={{ opacity: 0 }} />
      <div className="text-white">
        <div className="text-sm font-mono mb-2 opacity-70">const developer = {"{"}</div>
        <div className="pl-4 space-y-1 text-sm font-mono">
          <div>name: <span className="text-yellow-300">"Abias"</span>,</div>
          <div>role: <span className="text-green-300">"Fullstack"</span>,</div>
          <div>skills: <span className="text-blue-300">["React", "Node"]</span></div>
        </div>
        <div className="text-sm font-mono opacity-70">{"}"}</div>
      </div>
    </div>
  );
}

function ApiNode() {
  return (
    <div className="bg-gradient-to-br from-pink-500 to-orange-500 p-6 rounded-2xl shadow-2xl w-64">
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
      <div className="text-white">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="text-sm font-semibold">Backend API</div>
        </div>
        <div className="space-y-2 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-green-300">✓</span> PostgreSQL
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-300">✓</span> REST APIs
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-300">✓</span> Authentication
          </div>
        </div>
      </div>
    </div>
  );
}

function AvatarNode() {
  return (
    <div className="relative bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-2xl border-2 border-indigo-200 dark:border-indigo-800 flex items-center justify-center">
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Right} style={{ opacity: 0 }} />
      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
        <FaReact className="text-white text-4xl animate-spin" style={{ animationDuration: "3s" }} />
      </div>
    </div>
  );
}

const nodeTypes = { code: CodeNode, api: ApiNode, avatar: AvatarNode };

const initialNodes = [
  { id: "avatar", type: "avatar", position: { x: 220, y: 180 } },
  { id: "code", type: "code", position: { x: 380, y: 0 } },
  { id: "api", type: "api", position: { x: 0, y: 320 } },
];

const initialEdges = [
  {
    id: "code-avatar",
    source: "code",
    target: "avatar",
    animated: true,
    style: { stroke: "#6366f1", strokeWidth: 2 },
  },
  {
    id: "api-avatar",
    source: "api",
    target: "avatar",
    animated: true,
    style: { stroke: "#ec4899", strokeWidth: 2 },
  },
];

export function HeroFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div className="w-full h-[500px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnScroll={false}
        zoomOnScroll={false}
        preventScrolling={false}
        panOnDrag
        fitView
        fitViewOptions={{ padding: 0.3 }}
      >
        <Background gap={20} className="opacity-30 dark:opacity-20" />
        <Controls showInteractive={false} position="bottom-left" />
      </ReactFlow>
    </div>
  );
}
