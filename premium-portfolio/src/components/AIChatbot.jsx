import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes } from 'react-icons/fa';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);

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
              {/* Dummy Message */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                  <FaRobot className="text-yellow-500 text-sm" />
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2 text-sm text-gray-200">
                  Hi! I'm Neav's digital assistant. How can I help you?
                </div>
              </div>
            </div>
            
            {/* Input Area Scaffold */}
            <div className="p-3 border-t border-white/10 bg-black/20">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ask me anything..." 
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-yellow-500/50"
                />
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-xl text-sm font-bold transition">
                  Send
                </button>
              </div>
            </div>
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
