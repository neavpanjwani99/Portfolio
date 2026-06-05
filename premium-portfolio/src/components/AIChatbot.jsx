import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaUser } from 'react-icons/fa';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Neav's digital assistant. How can I help you?" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    // Dummy response simulation (Replace with actual API call later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "I'm currently just a UI placeholder! My brain will be connected soon." }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-80 h-[400px] bg-[#0a0a14]/80 backdrop-blur-xl rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden border border-white/10"
          >
            <div className="bg-white/5 p-4 flex justify-between items-center border-b border-white/10">
              <span className="font-bold text-white flex items-center gap-2">
                <FaRobot className="text-yellow-500" /> AI Assistant
              </span>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition">
                <FaTimes />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-white/20' : 'bg-yellow-500/20'}`}>
                    {msg.role === 'user' ? <FaUser className="text-white text-sm" /> : <FaRobot className="text-yellow-500 text-sm" />}
                  </div>
                  <div className={`px-4 py-2 text-sm text-gray-200 ${msg.role === 'user' ? 'bg-yellow-500/20 rounded-2xl rounded-tr-sm' : 'bg-white/10 rounded-2xl rounded-tl-sm'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/20">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..." 
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-yellow-500/50"
                />
                <button type="submit" className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-xl text-sm font-bold transition disabled:opacity-50">
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-[#141428] rounded-full shadow-[0_0_20px_rgba(255,215,0,0.15)] flex items-center justify-center border border-yellow-500/30 hover:border-yellow-500/60 hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] transition-all"
          >
            <FaRobot className="text-2xl text-yellow-500" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
