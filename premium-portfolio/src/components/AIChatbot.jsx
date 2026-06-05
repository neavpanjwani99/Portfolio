import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaExclamationTriangle } from 'react-icons/fa';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "[SYSTEM MSG] Intercom activated. Neav's digital conductor online. State your inquiry." }
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

    // Dummy response simulation (Disaster themed)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "[ERR 404] Neural link severed. Manual AI override required soon. Awaiting connection..." }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence> 
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, rotate: 2 }}
            className="w-80 h-[420px] bg-[#0c0c0c] border-[2px] border-yellow-600/50 shadow-2xl flex flex-col relative"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)' }}
          >
            {/* Caution Strip Header */}
            <div 
              className="h-3 w-full bg-yellow-500 opacity-80" 
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, #eab308 10px, #eab308 20px)' }}
            />
            
            {/* Header Bar */}
            <div className="bg-[#1a1a1a] p-3 flex justify-between items-center border-b border-yellow-600/30">
              <span className="font-mono font-bold text-yellow-500 flex items-center gap-2 text-xs tracking-widest uppercase">
                <FaExclamationTriangle className="text-yellow-500 animate-pulse" /> 
                Terminal_Active
              </span>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500 transition">
                <FaTimes />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <span className="text-gray-600 text-[10px]">
                    {msg.role === 'user' ? 'GUEST_USER' : 'SYS_CONDUCTOR'}
                  </span>
                  <div className={`px-3 py-2 border ${msg.role === 'user' ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-200' : 'bg-gray-800/50 border-gray-700 text-gray-300'} max-w-[90%]`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 border-t border-yellow-600/30 bg-[#111]">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="ENTER COMMAND..." 
                  className="flex-1 bg-black border border-gray-700 px-3 py-2 text-xs text-yellow-500 font-mono focus:outline-none focus:border-yellow-600 placeholder-gray-600"
                />
                <button type="submit" className="bg-yellow-600 hover:bg-yellow-500 text-black px-3 py-2 text-xs font-bold font-mono transition disabled:opacity-50">
                  EXEC
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="relative w-16 h-16 bg-[#111] flex items-center justify-center border-[2px] border-yellow-600/50 hover:border-yellow-400 hover:bg-[#1a1a1a] transition-all group"
            style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
          >
            {/* Caution stripes at the bottom of the button */}
            <div 
              className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500 opacity-30 group-hover:opacity-80 transition-opacity" 
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 5px, #eab308 5px, #eab308 10px)' }}
            />
            <FaTerminal className="text-2xl text-yellow-600/80 group-hover:text-yellow-400 group-hover:animate-pulse transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
