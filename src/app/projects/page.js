// app/projects/page.js
"use client";

import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Nutrify App",
      description: "A nutrition tracking web app using MERN stack.",
      link: "https://github.com/yourusername/nutrify",
    },
    {
      title: "Travel Website",
      description: "Frontend travel landing page using HTML/CSS.",
      link: "https://github.com/yourusername/travel-site",
    },
  ];

  return (
    <main className="section space-y-6">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
