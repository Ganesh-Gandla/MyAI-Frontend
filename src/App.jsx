import { useEffect, useState, useRef } from 'react'
import axios from "axios"
import Markdown from 'react-markdown'

import './App.css'

function App() {
  const [question, setQuestion] = useState("")
  const [conversations, setConversations] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const chatEndRef = useRef(null)

  useEffect(() => {
    const storedConversations = localStorage.getItem("conversations")
    if (storedConversations) {
      setConversations(JSON.parse(storedConversations))
    }
  }, [])

  useEffect(() => {
    if (conversations.length > 0) {
      localStorage.setItem("conversations", JSON.stringify(conversations))
    }
  }, [conversations])

  // Scroll to bottom whenever conversations change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [conversations, isLoading])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!question.trim()) return
    setIsLoading(true)

    try {
      const response = await axios.post(`http://localhost:3000/ask`, { question })
      const finalRes = response.data

      const resText = finalRes._status ? finalRes.finalData : "Please try again"

      const newConversation = {
        question,
        res: resText,
        timestamp: new Date().toLocaleString()
      }

      setConversations(prev => [...prev, newConversation])
    } catch (err) {
      console.error("Error occurred:", err)
      const newConversation = {
        question,
        res: "Please try again",
        timestamp: new Date().toLocaleString()
      }
      setConversations(prev => [...prev, newConversation])
    }

    setIsLoading(false)
    setQuestion("")
  }

  return (
    <div className="chat-container">
      <h1 className="chat-title">MyAI Chatbot</h1>

      <div className="chat-window">
        {conversations.map((conv, index) => (
          <div key={index} className="message-block">
            <div className="message user-message">
              <p>{conv.question}</p>
              <span className="timestamp">{conv.timestamp}</span>
            </div>
            <div className="message ai-message">
              <Markdown>{conv.res}</Markdown>
              <span className="timestamp">{conv.timestamp}</span>
            </div>
          </div>
        ))}

        {/* Loading animation while waiting for response */}
        {isLoading && (
          <div className="message ai-message loading-dots">
            <span></span><span></span><span></span>
          </div>
        )}

        <div ref={chatEndRef}></div>
      </div>

      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          name="question"
          value={question}
          placeholder="Ask me anything..."
          onChange={e => setQuestion(e.target.value)}
          className="chat-input"
        />
        <button type="submit" className="chat-button">Send</button>
      </form>
    </div>
  )
}

export default App
