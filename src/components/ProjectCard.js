// components/ProjectCard.js
export default function ProjectCard({ title, description, link }) {
  return (
    <div className="border rounded p-4 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <a
        href={link}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
}
