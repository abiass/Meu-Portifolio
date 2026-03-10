import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
  FaDatabase,
  FaDocker,
  FaLinux,
  FaGithub,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiExpress, SiFlask, SiPostgresql, SiMysql } from 'react-icons/si';

export const skillsWithIcons = {
  frontend: [
    { name: 'React.js', icon: FaReact, color: '#61dafb' },
    { name: 'JavaScript', icon: FaJsSquare, color: '#f7df1e' },
    { name: 'HTML5', icon: FaHtml5, color: '#e34c26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
  ],
  backend: [
    { name: 'Node.js', icon: FaNode, color: '#68a063' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'Python', icon: FaPython, color: '#3776ab' },
    { name: 'Flask', icon: SiFlask, color: '#000000' },
  ],
  database: [
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'MySQL', icon: SiMysql, color: '#00758f' },
  ],
  other: [
    { name: 'Docker', icon: FaDocker, color: '#2496ed' },
    { name: 'Linux', icon: FaLinux, color: '#fcc624' },
    { name: 'Git', icon: FaGitAlt, color: '#f1502f' },
    { name: 'GitHub', icon: FaGithub, color: '#333333' },
    { name: 'APIs REST', icon: null, color: '#6366f1' },
    { name: 'CI/CD', icon: null, color: '#6366f1' },
    { name: 'JWT', icon: null, color: '#6366f1' },
    { name: '2FA', icon: null, color: '#6366f1' },
  ],
};

export const stackIcons = {
  'React': FaReact,
  'Node.js': FaNode,
  'Express': SiExpress,
  'PostgreSQL': SiPostgresql,
  'Tailwind CSS': SiTailwindcss,
  'Vercel': null,
  'Render': null,
  'WhatsApp API': null,
  'Python': FaPython,
  'Flask': SiFlask,
  'MySQL': SiMysql,
  'Docker': FaDocker,
  'Linux': FaLinux,
  'Git/GitHub': FaGithub,
};
