// app/projects/page.js
'use client'

import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'My portfolio showcasing web development projects.',
      link: 'https://haroldmzumara.vercel.app/',
    },
    {
      title: 'Haircut Service Website',
      description: 'A frontend site for haircuts and grooming services.',
      link: 'https://haroldcuts.vercel.app/',
    },
    {
      title: 'Nutrify - Nutrition Planner', 
      description:
        'A full-stack MERN application for personalized meal planning and health tracking.',
      link: 'https://nutrify-nu.vercel.app/',
    },
    {
      title: 'Restaurant Website',
      description: 'Frontend website for a restaurant business.',
      link: 'https://harold-restaurant.vercel.app/',
    },
    {
      title: 'Next.js E-Commerce Store',
      description: 'A full-stack e-commerce store built with Next.js.',
      link: 'https://next-ecommerce-store-jet.vercel.app/',
    },
  ]

  return (
    <main className='section space-y-6'>
      <h2 className='text-3xl font-bold'>My Projects</h2>
      <div className='grid gap-4 md:grid-cols-2 max-w-4xl mx-auto'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  )
}
