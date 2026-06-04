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
            className="w-80 h-96 bg-gray-900 rounded-2xl shadow-xl flex flex-col overflow-hidden border border-gray-700"
          >
            <div className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
              <span className="font-bold text-white flex items-center gap-2">
                <FaRobot className="text-yellow-500" /> AI Assistant
              </span>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition">
                <FaTimes />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <p className="text-gray-300 text-sm">Chat window placeholder...</p>
            </div>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-gray-800 rounded-full shadow-lg flex items-center justify-center border border-gray-700 hover:border-yellow-500 transition-colors"
          >
            <FaRobot className="text-2xl text-yellow-500" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
