import type { TechCategory } from '../types'

const stack: TechCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    items: [
      { id: 'ts', name: 'TypeScript', proficiency: 5 },
      { id: 'js', name: 'JavaScript', proficiency: 5 },
      { id: 'kotlin', name: 'Kotlin', proficiency: 4 },
      { id: 'php', name: 'PHP', proficiency: 4 },
      { id: 'cpp', name: 'C++', proficiency: 3 },
      { id: 'sql', name: 'SQL', proficiency: 5 },
      { id: 'python', name: 'Python', proficiency: 3 }
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    items: [
      { id: 'next', name: 'Next.js', proficiency: 5 },
      { id: 'react', name: 'React', proficiency: 5 },
      { id: 'tailwind', name: 'Tailwind CSS', proficiency: 5 },
      { id: 'prisma', name: 'Prisma ORM', proficiency: 4 },
      { id: 'nodejs', name: 'Node.js', proficiency: 5 },
      { id: 'express', name: 'Express.js', proficiency: 4 }
    ]
  },
  {
    id: 'mobile-iot',
    title: 'Mobile & IoT',
    items: [
      { id: 'android', name: 'Android Studio', proficiency: 4 },
      { id: 'esp32', name: 'ESP32', proficiency: 4 },
      { id: 'arduino', name: 'Arduino', proficiency: 4 },
      { id: 'camera2', name: 'Camera2 API', proficiency: 3 },
      { id: 'mlkit', name: 'ML Kit', proficiency: 3 },
      { id: 'embedded', name: 'Embedded C++', proficiency: 3 }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    items: [
      { id: 'git', name: 'Git', proficiency: 5 },
      { id: 'github', name: 'GitHub', proficiency: 5 },
      { id: 'vscode', name: 'VS Code', proficiency: 5 },
      { id: 'figma', name: 'Figma', proficiency: 4 },
      { id: 'postman', name: 'Postman', proficiency: 4 },
      { id: 'vercel', name: 'Vercel', proficiency: 5 },
      { id: 'linux', name: 'Linux', proficiency: 4 }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    items: [
      { id: 'postgres', name: 'PostgreSQL', proficiency: 5 },
      { id: 'mysql', name: 'MySQL', proficiency: 5 },
      { id: 'neon', name: 'Neon', proficiency: 4 },
      { id: 'sqlite', name: 'SQLite', proficiency: 4 }
    ]
  }
]

export default stack
