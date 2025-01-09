import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, X } from 'lucide-react';

export default function JoinCard() {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden
                      border border-white/20 dark:border-gray-700/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Team Image */}
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 mix-blend-overlay" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                Join Our Community
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Become part of an exciting community of cybersecurity enthusiasts. Learn, grow, and make an impact together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowQR(true)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 
                         text-white rounded-xl hover:shadow-lg hover:shadow-red-500/20 transition-all w-fit"
              >
                <QrCode className="w-5 h-5" />
                Scan QR Code to Join
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* QR Code Popup */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 relative max-w-sm w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQR(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Join MRISA</h3>
                <div className="bg-white p-4 rounded-xl shadow-inner mb-4">
                  {/* Replace with your actual QR code */}
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://instagram.com/"
                    alt="Join QR Code"
                    className="w-48 h-48 mx-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Scan this QR code with your phone's camera to join our community
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}