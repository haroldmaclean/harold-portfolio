// components/ContactLinks.js (FINAL REVISION)

import React from 'react'
import Image from 'next/image'
// Import specific icons from react-icons/fa
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'

const ContactLinks = () => {
  // Define a consistent size for all icons
  const ICON_SIZE = 24

  const links = [
    {
      Icon: FaEnvelope, // Icon component reference
      text: 'haroldmacleanb@gmail.com',
      href: 'mailto:haroldmacleanb@gmail.com',
      color: 'text-red-500', // Email is often red/orange
      isEmail: true,
    },
    {
      Icon: FaLinkedin,
      text: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/haroldmj',
      color: 'text-blue-700', // LinkedIn blue
    },
    {
      Icon: FaGithub,
      text: 'GitHub Repository',
      href: 'https://github.com/haroldmaclean',
      color: 'text-gray-800', // GitHub black/dark gray
    },
  ]

  return (
    <div className='max-w-xl mx-auto mt-16 p-6 bg-white rounded-xl shadow-lg'>
      <h3 className='text-3xl font-bold text-center mb-6 text-gray-900'>
        Get In Touch
      </h3>

      {/* Contact Links Stack */}
      <div className='space-y-4'>
        {links.map((link, index) => (
          <div
            key={index}
            className='flex items-center justify-center space-x-3'
          >
            {/* Render the imported Icon component */}
            <link.Icon size={ICON_SIZE} className={link.color} />

            <a
              href={link.href}
              target={link.isEmail ? '_self' : '_blank'}
              rel='noopener noreferrer'
              className={`text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                link.isEmail ? 'underline' : ''
              }`}
            >
              {link.text}
            </a>
          </div>
        ))}
      </div>

      {/* Download Resume CTA Button - Prominent and professional */}
      <div className='text-center mt-8'>
        <a
          href='/assets/resume.pdf'
          download
          className='inline-flex items-center bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-[1.02] active:scale-100'
        >
          {/* Use the FaDownload icon */}
          <FaDownload size={20} className='mr-3' />
          Download My Resume (PDF)
        </a>
      </div>

      {/* QR Code Section (Optional) */}
      <div className='flex flex-col items-center mt-10 pt-6 border-t border-gray-200'>
        <Image
          src='/qr/portfolio-qr.png'
          alt='Scan QR to view portfolio'
          width={120}
          height={120}
          className='mx-auto rounded border-4 border-gray-100 shadow'
        />
        <span className='text-sm text-gray-500 mt-3'>
          Scan to view my portfolio on mobile
        </span>
      </div>
    </div>
  )
}

export default ContactLinks
