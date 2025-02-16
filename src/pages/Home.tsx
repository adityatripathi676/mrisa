import React from 'react';
import { motion } from 'framer-motion';
import JoinCard from '../components/JoinCard';
import ProfileSlider from '../components/ProfileSlider';

const stats = [
  { icon: <i className="fas fa-users"></i>, value: '1K+', label: 'Members' },
  { icon: <i className="fas fa-award"></i>, value: '50+', label: 'Events' },
  { icon: <i className="fas fa-shield-alt"></i>, value: '100+', label: 'Projects' },
  { icon: <i className="fas fa-briefcase"></i>, value: '200+', label: 'Internships' },
];

const features = [
  { title: 'Expert Training', description: 'Get trained by industry experts with hands-on sessions.', gradient: 'from-red-500 to-purple-500' },
  { title: 'Hackathons', description: 'Participate in exciting hackathons and showcase your skills.', gradient: 'from-blue-500 to-green-500' },
  { title: 'Networking', description: 'Connect with like-minded individuals and expand your network.', gradient: 'from-yellow-500 to-orange-500' },
];

export default function Home() {
  return (
    <div className="relative -mt-20 z-10 max-w-6xl mx-auto px-4">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-xl 
                   dark:bg-gray-800/50 rounded-2xl p-8 shadow-xl border border-white/20"
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <stat.icon className="w-8 h-8 mx-auto mb-3 text-red-500" />
            <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-purple-500 
                          bg-clip-text text-transparent mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Join Card Section */}
      <JoinCard />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose MRISA?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join the elite community of cybersecurity enthusiasts in Manav Rachna International Institute of Researcha and Studies and build your future in digital security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30, delay: index * 0.2 }}
              className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 hover-glow 
                       backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
            >
              <div className={`text-xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} 
                            bg-clip-text text-transparent`}>
                {feature.title}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Preview Section */}
      <div className="py-24 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The brilliant minds behind MRISA's success.
            </p>
          </motion.div>
          <ProfileSlider />
        </div>
      </div>
    </div>
  );
}
