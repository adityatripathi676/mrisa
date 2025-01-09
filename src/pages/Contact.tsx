import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, AtSign, PenTool, SendHorizontal, User2 } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Sparkles className="h-8 w-8 text-purple-600" />
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-transparent bg-clip-text">
            Let's Connect
          </h1>
          <Sparkles className="h-8 w-8 text-rose-600" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="backdrop-blur-xl bg-white/30 rounded-3xl p-8 shadow-2xl border border-white/50"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative group">
              <label className="flex items-center gap-2 text-sm font-semibold text-purple-700 mb-2">
                <User2 className="h-4 w-4" />
                Your Name
              </label>
              <input
                type="text"
                className="block w-full rounded-xl border-0 bg-white/50 p-4 shadow-inner 
                         focus:ring-2 focus:ring-purple-500 transition-all duration-300
                         group-hover:bg-white/60"
                required
              />
            </div>
            
            <div className="relative group">
              <label className="flex items-center gap-2 text-sm font-semibold text-purple-700 mb-2">
                <AtSign className="h-4 w-4" />
                Email Address
              </label>
              <input
                type="email"
                className="block w-full rounded-xl border-0 bg-white/50 p-4 shadow-inner
                         focus:ring-2 focus:ring-purple-500 transition-all duration-300
                         group-hover:bg-white/60"
                required
              />
            </div>
            
            <div className="relative group">
              <label className="flex items-center gap-2 text-sm font-semibold text-purple-700 mb-2">
                <PenTool className="h-4 w-4" />
                Your Message
              </label>
              <textarea
                rows={4}
                className="block w-full rounded-xl border-0 bg-white/50 p-4 shadow-inner
                         focus:ring-2 focus:ring-purple-500 transition-all duration-300
                         group-hover:bg-white/60"
                required
              ></textarea>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex justify-center items-center gap-3 px-8 py-4 
                       bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 
                       text-white font-semibold rounded-xl hover:opacity-90 
                       transition-all shadow-xl"
            >
              Send Message
              <SendHorizontal className="h-5 w-5" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}