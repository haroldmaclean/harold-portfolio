// components/AboutSection.js (Revised)

export default function AboutSection() {
  // A detailed, multi-paragraph bio is much more engaging than a single line.
  const professionalBio = (
    <>
      <p className='mt-4 text-lg text-gray-700 leading-relaxed'>
        Hello! I'm Harold Mzumara, a **Junior Full-Stack Web Developer**
        specializing in building robust, data-driven applications. My passion
        lies at the intersection of powerful backends and intuitive user
        interfaces.
      </p>
      <p className='mt-4 text-lg text-gray-700 leading-relaxed'>
        I primarily work with the **MERN stack** (MongoDB, Express, React,
        Node.js) and **Next.js** for modern, scalable, and SEO-friendly projects
        like Nutrify. I thrive on translating complex problems into clean,
        efficient code and am always eager to embrace new technologies and
        engineering challenges.
      </p>
      <p className='mt-4 text-lg text-gray-700 leading-relaxed'>
        I am currently seeking a role where I can apply my skills in a
        collaborative team environment and contribute to innovative product
        development. Let's build something great!
      </p>
    </>
  )

  // You should have a separate Skills section, but listing them here is a quick win.
  const coreSkills = [
    'JavaScript (ES6+)',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'REST APIs',
    'Tailwind CSS',
    'Git/GitHub',
    'Agile Methodology',
  ]

  return (
    <section className='section max-w-4xl mx-auto py-12 px-4 md:px-6'>
      <h2 className='text-4xl font-extrabold text-gray-900 border-b-4 border-blue-600 pb-2 mb-8'>
        About Me
      </h2>

      {professionalBio}

      {/* Skill Highlights Section */}
      <h3 className='text-2xl font-bold text-gray-800 mt-10 mb-5'>
        Core Technologies
      </h3>
      <div className='flex flex-wrap gap-3'>
        {coreSkills.map((skill) => (
          <span
            key={skill}
            className='px-4 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full shadow-sm'
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
