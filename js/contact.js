const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
   e.preventDefault()

   emailjs.sendForm('service_8ii265v', 'template_85g6ftk', '#contact-form', 'VQaq6RG_bXgUd78Nm')
   .then(() => {
    // show sent message
      contactMessage.textContent = 'Message sent successfully'

      // Remove message after five second
      setTimeout(() => {
        contactMessage.textContent = ''
      }, 5000) 
   })
}

contactForm .addEventListener('submit', sendEmail)