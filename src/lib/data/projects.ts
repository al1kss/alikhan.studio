
import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'yourai-platform',
    title: 'YourAI - Advanced RAG Platform',
    description: 'Built the first Cloudflare-LightRAG integration with custom chat UI, multiple AI assistants, and knowledge graph implementation. Features include file upload support and real-time streaming.',
    image: '/projects/yourai.png', // You'll need to add actual images to public/projects/
    date: '15.01.25',
    category: 'web-development',
    links: [
      { name: 'Website', url: 'https://sw-crazy-ai.vercel.app/' },
      { name: 'GitHub', url: 'https://github.com/al1kss/crazy-ai' }
    ],
    tags: ['Next.js', 'FastAPI', 'LightRAG', 'Cloudflare AI']
  },
  {
    id: 'school-website-6th-grade',
    title: 'First School Website',
    description: 'Created the first website for my school in 6th grade, presented to the principal and received a merit scholarship. This project sparked my passion for web development.',
    image: '/projects/school-website.png',
    date: '10.09.20',
    category: 'web-development',
    links: [], // No links available for this old project
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'managebac-chrome-extension',
    title: 'ManageBac Calendar Sync',
    description: 'Developed a Chrome extension that automatically synchronizes ManageBac school timetables with Google Calendar, helping students manage their schedules more efficiently.',
    image: '/projects/managebac-extension.png',
    date: '22.03.24',
    category: 'tools',
    links: [
      { name: 'GitHub', url: 'https://github.com/al1kss/managebac-sync' }
    ],
    tags: ['Chrome Extension', 'JavaScript', 'APIs']
  },
  {
    id: 'ess-class-website',
    title: 'ESS Class Website',
    description: 'Built a comprehensive website for the Environmental Systems & Societies class at UWC ISAK Japan, featuring course materials, assignments, and interactive content.',
    image: '/projects/ess-website.png',
    date: '15.11.23',
    category: 'web-development',
    links: [
      { name: 'GitHub', url: 'https://github.com/al1kss/ess-website' }
    ],
    tags: ['React', 'Educational', 'Responsive Design']
  },
  {
    id: 'pizza-ordering-app',
    title: 'Pizza Ordering Application',
    description: 'Developed a full-featured pizza ordering app with user authentication, menu management, cart functionality, and order tracking system.',
    image: '/projects/pizza-app.png',
    date: '08.07.23',
    category: 'web-development',
    links: [
      { name: 'GitHub', url: 'https://github.com/al1kss/pizza-ordering-app' }
    ],
    tags: ['Full-Stack', 'E-commerce', 'Database']
  },
  {
    id: 'minecraft-plugins',
    title: 'Minecraft Server Plugins',
    description: 'Developed 2 large-scale Minecraft plugins for a server with ~40 active users. Included custom game mechanics, economy systems, and player management features.',
    image: '/projects/minecraft-plugins.png',
    date: '20.06.22',
    category: 'game-development',
    links: [
      { name: 'GitHub', url: 'https://github.com/al1kss/minecraft-plugins' }
    ],
    tags: ['Java', 'Spigot API', 'Game Mechanics']
  },
  {
    id: 'custom-mechanical-keyboard',
    title: 'Custom Mechanical Keyboard',
    description: 'Designed and assembled a fully custom mechanical keyboard including 3D modeling, PCB design, wiring, and firmware programming. Features hot-swappable switches and RGB lighting.',
    image: '/projects/keyboard.png',
    date: '12.12.23',
    category: 'hardware',
    links: [
      { name: 'GitHub', url: 'https://github.com/al1kss/custom-keyboard' }
    ],
    tags: ['PCB Design', '3D Modeling', 'Electronics', 'Firmware']
  },
  {
    id: 'underwater-turbine-research',
    title: 'Underwater Turbine Efficiency Research',
    description: 'Conducted scientific research on "How does the surface area of the rotor blades of an underwater turbine impact its efficiency in generating electrical power?" with experimental testing and data analysis.',
    image: '/projects/turbine-research.png',
    date: '25.04.24',
    category: 'research',
    links: [
      { name: 'Research Paper', url: '/research/turbine-efficiency.pdf' }
    ],
    tags: ['Physics', 'Renewable Energy', 'Data Analysis']
  },
  {
    id: 'youtube-video-editing',
    title: 'YouTube Channel Growth (1K→20K)',
    description: 'Video editor for "just aiza" YouTube channel, grew subscriber count from 1,000 to 20,000 and helped achieve 1.2M total views through engaging content and strategic editing.',
    image: '/projects/youtube-editing.png',
    date: '30.08.23',
    category: 'video-editing',
    links: [
      { name: 'Channel', url: 'https://youtube.com/@justaiza' }
    ],
    tags: ['Content Creation', 'Growth Strategy', 'Adobe Premiere']
  },
  {
    id: 'chess-tournament-organization',
    title: 'UWC-Wide Chess Tournament',
    description: 'Organized and won a UWC-wide chess tournament with 202 participants from 18 schools. Managed logistics, created tournament brackets, and coordinated online matches.',
    image: '/projects/chess-tournament.png',
    date: '15.02.24',
    category: 'leadership',
    links: [], // No direct links for events
    tags: ['Event Management', 'Competition', 'Strategy']
  },
  {
    id: 'stem-community-event',
    title: 'STEM Community Outreach',
    description: 'Organized a 2-day event promoting STEM education in underprivileged communities for grades 7-10 with 200+ participants. Featured hands-on workshops, competitions, and mentorship.',
    image: '/projects/stem-outreach.png',
    date: '18.05.24',
    category: 'leadership',
    links: [],
    tags: ['Community Service', 'Education', 'Event Planning']
  },
  {
    id: 'school-hoodie-design',
    title: 'School Hoodie Design',
    description: 'Designed a school hoodie that was approved by administration and printed on over 1,000 units. The design became popular among students and is still used today.',
    image: '/projects/hoodie-design.png',
    date: '10.10.22',
    category: 'leadership',
    links: [],
    tags: ['Graphic Design', 'Product Design', 'Branding']
  }
];