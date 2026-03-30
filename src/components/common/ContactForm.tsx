'use client'
import React, { useRef, useState } from 'react'
import { sendContactEmail } from '@/app/action/sendContactEmail'
import { toast } from 'react-toastify'

const ContactForm = () => {
   const formRef = useRef<HTMLFormElement>(null)
   const [loading, setLoading] = useState(false)

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setLoading(true)

      const formData = new FormData(e.currentTarget)
      const res = await sendContactEmail(formData)

      if (res.success) {
         toast.success('Your message has been sent successfully!', { position: "bottom-right" })
         formRef.current?.reset()
      } else {
         toast.error(res.error || 'Failed to send message.', { position: "bottom-right" })
      }
      setLoading(false)
   }

   return (
      <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
         <div className="row">
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="text" name="user_name" placeholder="Your Name" required />
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="email" name="user_email" placeholder="Your Email" required />
               </div>
            </div>
         </div>
         <div className="form-grp">
            <textarea name="message" placeholder="Your Message" required></textarea>
         </div>
         <button type="submit" className="tg-btn tg-btn-seven" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
         </button>
      </form>
   )
}

export default ContactForm
