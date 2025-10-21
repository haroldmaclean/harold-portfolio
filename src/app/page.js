import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className='min-h-[80vh] flex flex-col items-center justify-center text-center p-6'>
      <div className='flex flex-col items-center max-w-2xl'>
        {/* 1. Professional Headshot */}
        <div
          className='mb-8 relative w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl border-4 border-white'
          style={{
            backgroundImage: "url('/images/harold-headshot.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
          }}
          role='img'
          aria-label='Harold Mzumara Headshot'
        ></div>

        {/* 2. Primary Headline */}
        <h1 className='text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight drop-shadow-md'>
          Harold <span className='text-blue-600'>Mzumara</span>
        </h1>

        {/* 3. Value Proposition */}
        <h2 className='mt-4 text-2xl text-gray-700 font-medium tracking-wide'>
          Junior Web Developer | Building modern, full-stack solutions with{' '}
          <strong>React</strong> & <strong>Next.js</strong>.
        </h2>

        {/* 4. Short, Engaging Bio */}
        <p className='mt-6 text-xl text-gray-600 max-w-prose'>
          I transform innovative ideas into efficient, scalable applications,
          specializing in the MERN stack. Let&apos;s create impactful digital
          experiences.
        </p>

        {/* 5. Call-to-Action Buttons */}
        <div className='flex flex-wrap justify-center gap-4 mt-8'>
          <Link
            href='/projects'
            className='px-8 py-3 text-lg font-semibold rounded-lg bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105'
          >
            View My Projects ✨
          </Link>

          <Link
            href='/assets/resume.pdf'
            download
            className='px-8 py-3 text-lg font-semibold rounded-lg bg-white text-gray-800 border-2 border-gray-300 shadow-md hover:border-blue-600 transition-colors duration-300 transform hover:scale-105'
          >
            Download Resume
          </Link>
        </div>

        {/* 6. Footer */}
        <footer className='mt-12 text-gray-500 text-sm'>
          © {new Date().getFullYear()} Harold Mzumara. All rights reserved.
        </footer>
      </div>
    </main>
  )
}
