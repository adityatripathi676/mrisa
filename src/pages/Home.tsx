import { motion } from 'framer-motion';
import { Shield, Cpu, Users, Trophy } from 'lucide-react';
import ProfileSlider from '../components/ProfileSlider';
import HeroSlider from '../components/HeroSlider';
import JoinCard from '../components/JoinCard';
import CursorEffect from '../components/CursorEffect';

const stats = [
  { icon: Shield, label: 'CTFs Won', value: '50+' },
  { icon: Users, label: 'Active Members', value: '200+' },
  { icon: Trophy, label: 'Awards', value: '25+' },
  { icon: Cpu, label: 'Projects', value: '100+' }
];

const features = [
  {
    title: 'Hands-on Training',
    description: 'Get practical experience with real-world cybersecurity challenges and tools.',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    title: 'Expert Mentorship',
    description: 'Learn from industry professionals and experienced security researchers.',
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    title: 'CTF Competitions',
    description: 'Participate in national and international Capture The Flag competitions.',
    gradient: 'from-green-500 to-teal-500'
  }
];

export default function Home() {
  return (
    <div>
      <CursorEffect />
      <HeroSlider />
      
      {/* Stats Section */}
      <div className="relative -mt-20 z-10 max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
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
      </div>

      {/* Join Card Section */}
      <JoinCard />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
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
            whileInView={{ opacity: 1, y: 0 }}
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