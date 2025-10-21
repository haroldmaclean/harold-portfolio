'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { FaPaperPlane } from 'react-icons/fa'

export default function ContactSection() {
  // --- STATE ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // --- EMAILJS INITIALIZATION ---
  useEffect(() => {
    // Only initialize if running client-side
    if (typeof window !== 'undefined') {
      emailjs.init('VDY7i_a6xNlQ9pPuX')
    }
  }, [])

  // --- HANDLERS ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // --- Validation ---
    if (!formData.name.trim()) {
      toast.error('Name is required.')
      setIsSubmitting(false)
      return
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email)) {
      toast.error('Enter a valid email address.')
      setIsSubmitting(false)
      return
    }
    if (formData.message.trim().length < 10) {
      toast.error('Message must be at least 10 characters.')
      setIsSubmitting(false)
      return
    }
    if (formData.message.trim().length > 350) {
      toast.error('Message should not exceed 350 characters.')
      setIsSubmitting(false)
      return
    }
    // -------------------

    const sendingToast = toast.loading('Sending...')

    try {
      await emailjs.send('service_uz73k6e', 'template_f5br16e', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })

      toast.dismiss(sendingToast)
      toast.success('Message sent successfully. Thank you!')

      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast.dismiss(sendingToast)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // --- JSX / RENDER ---
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      // Form container with shadow, increased padding, and full height
      className='p-8 md:p-10 bg-white rounded-xl shadow-2xl border border-gray-100 h-full'
    >
      <h2 className='text-3xl font-bold mb-6 text-gray-900 border-b pb-2'>
        Send a Message
      </h2>

      <form onSubmit={handleSubmit} className='space-y-5'>
        {/* Input Field 1 - Increased border to border-2 */}
        <input
          type='text'
          name='name'
          placeholder='Your Full Name'
          value={formData.name}
          onChange={handleChange}
          required
          // KEY CHANGE: border-2 for a thicker border
          className='w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
        />

        {/* Input Field 2 - Increased border to border-2 */}
        <input
          type='email'
          name='email'
          placeholder='Your Professional Email'
          value={formData.email}
          onChange={handleChange}
          required
          // KEY CHANGE: border-2 for a thicker border
          className='w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
        />

        {/* Text Area - Increased border to border-2 */}
        <textarea
          name='message'
          placeholder='Your Message (e.g., Job Opportunity, Project Inquiry)'
          value={formData.message}
          onChange={handleChange}
          maxLength={350}
          required
          // KEY CHANGE: border-2 for a thicker border, h-36 for more space
          className='w-full border-2 border-gray-300 p-3 rounded-lg h-36 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none'
        ></textarea>

        {/* Character Count */}
        <p className='text-sm text-gray-500 text-right pr-1'>
          {formData.message.length}/350 characters
        </p>

        <motion.button
          type='submit'
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full flex items-center justify-center space-x-2 text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200 
            ${
              isSubmitting
                ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
            }`}
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <FaPaperPlane className='inline' />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </form>
    </motion.section>
  )
}
