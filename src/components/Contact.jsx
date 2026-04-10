import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pp5zmwg',    // Service ID
      'template_9zn11fi',   // Template ID
      form.current, 
      'MnuHKTUwLyYUllwFU' // Public Key
    )
    .then((result) => {
        console.log(result.text);
        alert("Success! Your message has been sent to Vipul.");
        e.target.reset(); // Clears the form after sending
    }, (error) => {
        console.log(error.text);
        alert("Oops! Something went wrong. Please try again.");
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-wrapper">
          {/* Left Side: Info */}
          <div className="contact-info">
            <h3>Let's Collaborate</h3>
            <p>
              I'm currently open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, I'll get back to you!
            </p>
            
            <div className="contact-details">
              <p><strong>Location:</strong> Pune, Maharashtra</p>
            </div>

            {/* Updated Resume Link in Contact.jsx */}
<a 
  href="/Vipul_Raut_Resume.pdf" 
  download="Vipul_Raut_Resume.pdf" 
  className="resume-btn"
>
  Download My Resume
</a>
          </div>

          {/* Right Side: Functional Form */}
          <div className="contact-form-container">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Your Message" 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;