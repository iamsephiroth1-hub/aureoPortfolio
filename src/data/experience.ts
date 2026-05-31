import type { ExperienceItem } from '../types'

const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'National University Fairview',
    role: 'Lead Developer — Lost & Found Website',
    start: '2025',
    end: 'Present',
    bullets: [
      'Designed and developed a centralized lost and found management platform.',
      'Implemented item reporting, tracking, and administrative management features.',
      'Worked directly with stakeholders to understand requirements and improve workflows.',
      'Delivered a production-ready system for active university use.'
    ],
    tags: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel']
  },
  {
    id: 'exp-2',
    company: 'Independent Projects',
    role: 'Full-Stack Developer — Academic & Personal Projects',
    start: '2024',
    end: 'Present',
    bullets: [
      'Developed web-based information systems, management platforms, and monitoring solutions.',
      'Created Android applications using Kotlin and Android Studio.',
      'Built IoT systems using Arduino, ESP32, sensors, and wireless communication modules.',
      'Managed full project lifecycle: planning, database design, development, testing, and deployment.'
    ],
    tags: ['React', 'Next.js', 'Kotlin', 'Arduino', 'ESP32', 'MySQL', 'PHP']
  },
  {
    id: 'exp-3',
    company: 'Capstone Project',
    role: 'IoT & Software Developer — AquaLogic',
    start: '2026',
    end: 'Present',
    status: 'in-progress',
    bullets: [
      'Currently developing an intelligent water monitoring system using IoT sensors as a capstone project.',
      'Integrating temperature, turbidity, and TDS monitoring with web-based management tools — in active development.',
      'Designing hardware-software communication between ESP32 devices and web applications.',
      'Implementing real-time monitoring and automated data collection features (ongoing).'
    ],
    tags: ['ESP32', 'Arduino', 'Embedded C++', 'React', 'Node.js', 'WebSockets']
  }
]

export default experience
