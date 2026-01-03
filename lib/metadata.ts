import type { Metadata } from 'next/types'

export const baseMetadata: Metadata = {
  title: 'Mikhil Ailani | Full Stack Developer & Software Engineer | Portfolio',
  description:
    'Full-stack developer portfolio showcasing expertise in React, Next.js, Node.js, and MongoDB. View my projects, experience, and technical skills.',
  keywords: [
    'full stack developer',
    'react developer',
    'next.js developer',
    'software engineer',
    'web developer',
    'javascript developer',
    'portfolio',
    'hyderabad',
  ],
  authors: [{ name: 'Mikhil Ailani', url: '' }],
  creator: 'Mikhil Ailani',
  publisher: 'Mikhil Ailani',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
}

export const pageMetadata = {
  home: {
    title: 'Merajul Haque | Full Stack Developer & Software Engineer | Portfolio',
    description:
      'Full-stack developer portfolio showcasing expertise in React, Next.js, Node.js, and MongoDB. View my projects, experience, and technical skills.',
  },
  experience: {
    title: 'Professional Experience | Merajul Haque - Full Stack Developer',
    description:
      'My professional experience as a full stack developer, including frontend and backend development projects using React, Next.js, and Node.js.',
  },
  projects: {
    title: 'Web Development Projects | Merajul Haque - Full Stack Developer',
    description:
      'View my portfolio of web development projects built with React, Next.js, Node.js, MongoDB, and modern web technologies.',
  },
  skills: {
    title: 'Technical Skills | Merajul Haque - Full Stack Developer',
    description:
      'My technical expertise includes React, Next.js, JavaScript, Node.js, MongoDB, Tailwind CSS, and more web development technologies.',
  },
  contact: {
    title: 'Contact Me | Merajul Haque - Full Stack Developer',
    description:
      'Get in touch with me for freelance projects, full-time opportunities, or just to say hello. Available for web development projects.',
  },
}
