import "../style/ContactUs.css"

function ContactUs() {
  return (
    <div className="contact-container">

      <h1 className="contact-title">Contact Me</h1>

      <p className="contact-text">
        Feel free to reach out for collaboration, feedback, or any opportunities.
        I'm always open to discussing new ideas and projects.
      </p>

      <div className="contact-card">

        <div className="contact-item">
          <h3>Email</h3>
          <a href="mailto:your-email@example.com">
            ganeshgandla19@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <h3>LinkedIn</h3>
          <a 
            href="https://www.linkedin.com/in/ganeshgandla/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            linkedin.com/in/ganeshgandla/
          </a>
        </div>

        <div className="contact-item">
          <h3>GitHub</h3>
          <a 
            href="https://github.com/Ganesh-Gandla" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            github.com/Ganesh-Gandla
          </a>
        </div>

      </div>

      <div className="contact-message">
        <h2>📝 Message</h2>
        <p>
          If you have any suggestions or feedback about this project, feel free
          to connect. I’d love to hear from you!
        </p>
      </div>

    </div>
  );
}

export default ContactUs;