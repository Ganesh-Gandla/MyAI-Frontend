import "../style/About.css"

function About() {
  return (
    <div className="about-container">
      
      <h1 className="about-title">About MyAI Chatbot</h1>

      <p className="about-text">
        <strong>MyAI Chatbot</strong> is a modern AI-powered web application designed to deliver
        fast, accurate, and intelligent responses to user queries in real time.
        It provides a smooth and interactive conversational experience using advanced AI models.
      </p>

      <p className="about-text">
        This project is built using a full-stack architecture with 
        <strong> React.js</strong> for the frontend and 
        <strong> Node.js & Express</strong> for the backend, integrated with 
        <strong> Groq’s high-performance LLM API</strong>.
      </p>

      <h2 className="about-subtitle">🚀 Key Features</h2>
      <ul className="about-list">
        <li>Real-time AI-powered responses</li>
        <li>Clean and interactive chat interface</li>
        <li>Markdown support for formatted answers</li>
        <li>Conversation history stored in browser (local storage)</li>
        <li>Fast and scalable backend performance</li>
      </ul>

      <h2 className="about-subtitle">🛠️ Technologies Used</h2>
      <ul className="about-list">
        <li>React.js (Frontend)</li>
        <li>Node.js & Express (Backend)</li>
        <li>Groq LLM API</li>
        <li>Axios (API calls)</li>
        <li>Vercel (Deployment)</li>
      </ul>

      <h2 className="about-subtitle">🎯 Purpose</h2>
      <p className="about-text">
        The purpose of this project is to demonstrate how AI can be integrated into modern
        web applications while showcasing full-stack development skills such as API integration,
        state management, deployment, and user experience design.
      </p>

      <div className="about-privacy">
        <p>
          🔐 <strong>Privacy & Data Usage:</strong> This platform does not store your personal
          data on any external servers. All conversations are محفوظ locally in your browser
          using local storage.
        </p>

        <p>
          ⚠️ <strong>Disclaimer:</strong> Please avoid sharing sensitive information such as
          passwords, banking details, or personal data while using this chatbot.
        </p>
        <p>
          By <strong>Ganesh Gandla</strong> 
        </p>
      </div>

    </div>
  );
}

export default About;