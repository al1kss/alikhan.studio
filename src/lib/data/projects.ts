import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'yourai-platform',
    title: 'YourAI - Advanced RAG Platform',
    description: 'Built custom Cloudflare-LightRAG AI assistants with advanced knowledge graph implementation. Features include file upload support and response based on the knowledge.',
    image: '/projects/yourai.png',
    date: '06.25',
    category: 'web-development',
    links: [
      { name: 'Website', url: 'https://sw-crazy-ai.vercel.app/' },
      { name: 'GitHub', url: 'https://github.com/al1kss/crazy-ai' }
    ],
    tags: ['Next.js', 'FastAPI', 'LightRAG', 'Cloudflare AI']
  },
  {
    id: 'lightrag-git',
    title: 'Open Source Contribution to LightRAG by HKU',
    description: "Enables companies and/or users without powerful servers to use advanced AI capabilities such as RAG. Contributed to major opensource project by HKU. Boosted downloads from 192k to 394k",
    image: '/projects/lightrag.png',
    date: '06.25',
    category: 'tools',
    links: [
      { name: 'GitHub', url: 'https://github.com/HKUDS/LightRAG/commits?author=al1kss' },
      { name: 'Research Paper', url: 'https://lightrag.github.io/'}
    ],
    tags: ['Python', 'Cloudflare']
  },
  {
    id: 'managebac-chrome-extension',
    title: 'ManageBac Calendar Sync',
    description: 'Developed a Chrome extension that automatically synchronizes slow ManageBac school timetables with Google Calendar, helping students manage their schedules more efficiently. Total of 246 users (checked through google analytics)',
    image: '/projects/managebac-extension.png',
    date: '12.24',
    category: 'tools',
    links: [
      { name: 'Extension', url: 'https://chromewebstore.google.com/detail/managebac-calendar-sync/fginnegojpkpbgeoajanjhaiacioboof'},
      { name: 'GitHub', url: 'https://github.com/al1kss/ManageBac2Calendar' },
      { name: 'Website', url: 'https://al1kss.github.io/ManageBac2Calendar/'}
    ],
    tags: ['Chrome Extension', 'JavaScript', 'Google Cloud', 'APIs']
  },
  {
    id: 'nasa-space',
    title: 'NASA Space Apps Hackathon',
    description: 'Won 1st place in Japan, qualified for the Global Round (waiting). Coded real-time strategy game with NASA sustainability data!',
    image: '/projects/nasa-hack.png',
    date: '10.25',
    category: 'web-development',
    links: [
      { name: 'Website', url: 'https://al1kss.pythonanywhere.com/'},
      { name: 'GitHub', url: 'https://github.com/tenzinl4ma/Hackathon'}
    ],
    tags: ['JavaScript', 'Database Analysis', 'AI Integration']

  },
  {
    id: 'ess-class-website',
    title: 'ESS Class Website',
    description: 'Built a website for the Environmental Systems & Societies IB class at UWC ISAK Japan, featuring important part of the class used for estimation of the population (Transect Sampling).',
    image: '/projects/ess-website.png',
    date: '11.24',
    category: 'web-development',
    links: [
      { name: 'GitHub', url: 'https://github.com/al1kss/SpeciesTracker' },
      { name: 'Website', url: 'https://al1ksss.pythonanywhere.com/' },
    ],
    tags: ['JavaScript', 'SQL', 'Flask', 'Python']
  },
  {
    id: 'pizza-ordering-app',
    title: 'Pizza Ordering Application',
    description: 'Developed a full-featured pizza ordering app with user authentication, menu management, cart functionality, and order tracking system with special admin menu. Open-Sourced on the biggest Python Package website with +700K projects',
    image: '/projects/pizza-app.png',
    date: '02.25',
    category: 'game-development',
    links: [
      { name: 'GitHub', url: 'https://github.com/al1kss/pizza-app' },
      { name: 'PyPi', url: 'https://pypi.org/project/pizza-ordering-app/'}
    ],
    tags: ['SQL', 'KivyMD', 'Python']
  },
  {
    id: 'minecraft-plugins',
    title: 'Minecraft Server Plugins',
    description: 'Developed 2 large-scale Minecraft plugins for a server with ~40 active users. Included custom game mechanics, economy systems, and player management features.',
    image: '/projects/minecraft.png',
    date: '06.23',
    category: 'game-development',
    links: [
      { name: 'GitHub', url: 'https://github.com/al1kss/Battlecraft/releases/tag/v1.3.1' }
    ],
    tags: ['Java', 'Spigot API']
  },
  {
    id: 'custom-mechanical-keyboard',
    title: 'Custom Mechanical Keyboard',
    description: 'Designed and assembled a fully custom mechanical keyboard including 3D modeling, PCB design, wiring, and firmware programming. Features 6 switches and custom firmware.',
    image: '/projects/keyboard.png',
    date: '12.24',
    category: 'hardware',
    links: [
      { name: 'GitHub', url: 'https://github.com/al1kss/hackpad' }
    ],
    tags: ['PCB Design', '3D Modeling', 'Soldering', 'Firmware']
  },
  {
    id: 'underwater-turbine-research',
    title: 'Underwater Turbine Efficiency Research',
    description: 'Conducted scientific research on "How does the surface area of the rotor blades of an underwater turbine impact its efficiency in generating electrical power?" with experimental testing and data analysis.',
    image: '/projects/research.jpeg',
    date: '06.25',
    category: 'research',
    links: [
      { name: 'Research Paper', url: '/research/research.pdf' }
    ],
    tags: ['Physics', 'Renewable Energy', 'Data Analysis']
  },
  {
    id: 'school-website-6th-grade',
    title: 'First School Website',
    description: 'Created the first website for my school in 6th grade, presented to the principal and received a small scholarship :) This project sparked my passion for web development',
    image: '/projects/school-web.png',
    date: '12.19',
    category: 'web-development',
    links: [
      { name: 'Video Showcase', url: 'https://drive.google.com/file/d/1y-CNLvD-MFAuCkxhaurOtnvwJuIOQkUG/view?usp=sharing' }
    ],
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'youtube-video-editing',
    title: 'YouTube Channel Growth (1K→20K)',
    description: 'Video editor for "just aiza" YouTube channel, grew subscriber count from 1,000 to 20,000 and helped achieve 1.2M total views through engaging content and strategic editing.',
    image: '/projects/youtube.png',
    date: '01.23',
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
    image: '/projects/chess.png',
    date: '15.02.24',
    category: 'leadership',
    links: [
      {name: 'One of the Tournaments', url: 'https://lichess.org/tournament/2iCeVj1e'}
    ],
    tags: ['Event Management', 'Competition', 'Chess']
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