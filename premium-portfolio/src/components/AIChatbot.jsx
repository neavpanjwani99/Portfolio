import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaExclamationTriangle } from 'react-icons/fa';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "[SYSTEM MSG] Intercom activated. Neav's digital conductor online. State your inquiry." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages([...newMessages, { role: 'assistant', content: `[ERR] ${data.error || 'Connection Failed.'}` }]);
      }
    } catch (err) {
      setMessages([...newMessages, { role: 'assistant', content: "[CRITICAL ERR] Backend connection refused. Is the server running?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence> 
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, rotate: 2 }}
            className="w-80 h-[420px] bg-black border-[1px] border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.2)] flex flex-col relative"
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)',
              backgroundImage: 'linear-gradient(rgba(234, 179, 8, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(234, 179, 8, 0.03) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          >
            {/* Caution Strip Header */}
            <div 
              className="h-3 w-full bg-yellow-500 opacity-80" 
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, #eab308 10px, #eab308 20px)' }}
            />
            
            {/* Header Bar */}
            <div className="bg-[#050505] p-3 flex justify-between items-center border-b border-yellow-500/30">
              <span className="font-mono font-bold text-yellow-500 flex items-center gap-2 text-xs tracking-widest uppercase text-shadow-sm">
                <FaExclamationTriangle className="text-yellow-500 animate-pulse" /> 
                SYS_HACK_UPLINK
              </span>
              <button onClick={() => setIsOpen(false)} className="text-yellow-700 hover:text-yellow-400 transition">
                <FaTimes />
              </button>
            </div>

            {/* Chat Area */}
            <div 
              className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              <style>{`.flex-1::-webkit-scrollbar { display: none; }`}</style>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <span className="text-yellow-700/70 text-[10px]">
                    {msg.role === 'user' ? 'USER_OVERRIDE' : 'ROOT_ACCESS'}
                  </span>
                  <div className={`px-3 py-2 border ${msg.role === 'user' ? 'bg-yellow-500/10 border-yellow-500/50 text-yellow-300' : 'bg-[#0a0a0a] border-yellow-700/50 text-yellow-500'} max-w-[90%] shadow-[0_0_10px_rgba(234,179,8,0.05)]`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-yellow-700/70 text-[10px]">ROOT_ACCESS</span>
                  <div className="px-3 py-2 border bg-[#0a0a0a] border-yellow-700/50 text-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.05)] flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 border-t border-yellow-500/30 bg-[#050505]">
              <div className="flex gap-2">
                <span className="text-yellow-500 font-mono text-sm self-center animate-pulse">{'>'}</span>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="enter_command_" 
                  className="flex-1 bg-transparent px-2 py-2 text-xs text-yellow-400 font-mono focus:outline-none placeholder-yellow-700/50"
                />
                <button type="submit" className="bg-yellow-500/20 hover:bg-yellow-500 hover:text-black text-yellow-500 border border-yellow-500 px-3 py-2 text-[10px] tracking-widest font-bold font-mono transition disabled:opacity-50">
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
            className="relative w-16 h-16 bg-black flex items-center justify-center border border-yellow-500 hover:border-yellow-400 hover:bg-[#0a0a0a] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all group"
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
