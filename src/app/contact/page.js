// app/contact/page.js (REVISED for better centering and spacing)

'use client'

import ContactSection from '@/components/ContactSection'
import ContactLinks from '@/components/ContactLinks'

export default function ContactPage() {
  return (
    <main className='py-10 px-6 max-w-6xl mx-auto'>
      <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12'>
        Let's Connect and Build Together
      </h1>

      {/* REVISED LAYOUT: Using max-w-5xl to constrain the container, and grid for spacing */}
      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start'>
        {/* Left Side: Contact Form (Now takes up its space nicely) */}
        <div className='w-full'>
          <ContactSection />
        </div>

        {/* Right Side: Direct Links */}
        {/* Applying some vertical centering on smaller screens if needed */}
        <div className='w-full pt-4 md:pt-0 flex justify-center md:justify-start'>
          <ContactLinks />
        </div>
      </div>
    </main>
  )
}
