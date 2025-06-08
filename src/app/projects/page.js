// app/projects/page.js
"use client";

import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Next E-Commerce Store",
      description:
        "A modern e-commerce frontend built using Next.js and Tailwind CSS.",
      link: "https://github.com/haroldmaclean/next-ecommerce-store",
    },
    {
      title: "Birthday Invitation Web App",
      description:
        "A creative RSVP invitation app built with React and styled-components.",
      link: "https://github.com/haroldmaclean/birthday-invitation",
    },
    {
      title: "My Affiliate Site",
      description:
        "A live affiliate website integrated with Amazon links for real product marketing.",
      link: "https://github.com/haroldmaclean/my-affiliate-site",
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
