'use client'
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'

const ContactForm = () => {
   const formRef = useRef<HTMLFormElement>(null)
   const [loading, setLoading] = useState(false)

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      
      const formData = new FormData(e.currentTarget)
      const name = formData.get("name")?.toString().trim() || ""
      const email = formData.get("email")?.toString().trim() || ""
      const message = formData.get("message")?.toString().trim() || ""

      if (name.length < 2) {
         toast.warning("Please enter a valid name (at least 2 characters).", { position: "bottom-right" })
         return
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
         toast.warning("Please enter a valid email address.", { position: "bottom-right" })
         return
      }

      if (message.length < 20) {
         toast.warning("Your message must be at least 20 characters long.", { position: "bottom-right" })
         return
      }

      setLoading(true)
      formData.append("access_key", "e2f3426f-24fd-472c-b564-50bac442e030")

      try {
         const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
         })

         const data = await response.json()
         
         if (data.success) {
            toast.success('Your message has been sent successfully!', { position: "bottom-right" })
            formRef.current?.reset()
         } else {
            toast.error(data.message || 'Failed to send message.', { position: "bottom-right" })
         }
      } catch (error) {
         toast.error('An error occurred. Please try again.', { position: "bottom-right" })
      }
      
      setLoading(false)
   }

   return (
      <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
         <div className="row">
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="text" name="name" placeholder="Your Name" required />
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="email" name="email" placeholder="Your Email" required />
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
