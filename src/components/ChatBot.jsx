import { useEffect, useState, useRef } from 'react'
import axios from "axios"
import Markdown from 'react-markdown'
import "../style/ChatBot.css"

function ChatBot() {

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
            const API_URL = import.meta.env.VITE_API_URL;

            const response = await axios.post(`${API_URL}/ask`, { question });
            const finalRes = response.data

            const resText = finalRes.status
                ? finalRes.finalData
                : finalRes.message || "Something went wrong";

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
                res: err.response?.data?.message || "Server error. Try again later.",
                timestamp: new Date().toLocaleString()
            }

            setConversations(prev => [...prev, newConversation])
        }

        setIsLoading(false)
        setQuestion("")
    }

    function handleClearChat() {
        const confirmClear = window.confirm("Are you sure you want to clear all chats?");
        if (confirmClear) {
            localStorage.removeItem("conversations");
            setConversations([]);
        }
    }

    return (
  <div className="chat-container">

    {/* Header */}
    <div className="chat-header">
      <h2>MyAI Chatbot</h2>
      <button onClick={handleClearChat} className="clear-button">
        Clear Chat
      </button>
    </div>

    {/* Chat Window */}
    <div className="chat-window">
      {conversations.map((conv, index) => (
        <div key={index} className="message-block">

          {/* User */}
          <div className="message user-message">
            <p>{conv.question}</p>
            <span className="timestamp">{conv.timestamp}</span>
          </div>

          {/* AI */}
          <div className="message ai-message">
            <Markdown>{conv.res}</Markdown>
            <span className="timestamp">{conv.timestamp}</span>
          </div>

        </div>
      ))}

      {/* Loading */}
      {isLoading && (
        <div className="message ai-message">
          <p className="thinking">Thinking...</p>
        </div>
      )}

      <div ref={chatEndRef}></div>
    </div>

    {/* Input */}
    <form onSubmit={handleSubmit} className="chat-form">
      <input
        type="text"
        value={question}
        placeholder="Ask me anything..."
        onChange={(e) => setQuestion(e.target.value)}
        className="chat-input"
      />
      <button type="submit" disabled={isLoading} className="chat-button">
        {isLoading ? "Sending..." : "Send"}
      </button>
    </form>

  </div>
)
}

export default ChatBot