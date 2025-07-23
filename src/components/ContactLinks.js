// components/ContactLinks.js
import React from 'react'
import Image from 'next/image'

const ContactLinks = () => {
  return (
    <div className='text-center mt-5 space-y-2'>
      <p>
        📧{' '}
        <a
          href='https://mail.google.com/mail/?view=cm&fs=1&to=haroldmacleanb@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 underline'
        >
          haroldmacleanb@gmail.com
        </a>
      </p>

      <p>
        💼{' '}
        <a
          href='https://www.linkedin.com/in/haroldmj'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 underline'
        >
          LinkedIn
        </a>
      </p>

      <p>
        🌐{' '}
        <a
          href='https://github.com/haroldmaclean'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 underline'
        >
          GitHub
        </a>
      </p>

      <p>
        📁{' '}
        <a
          href='/assets/resume.pdf'
          download
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          Download Resume
        </a>
      </p>

      <div className='flex flex-col items-center mt-4'>
        <Image
          src='/qr/portfolio-qr.png'
          alt='Scan QR to view portfolio'
          width={100}
          height={100}
          className='mx-auto rounded'
        />
        <span className='text-sm text-gray-600 mt-2'>
          Scan to view my portfolio
        </span>
      </div>
    </div>
  )
}

export default ContactLinks
