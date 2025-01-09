import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, Linkedin } from 'lucide-react';

const profiles = [
  {
    name: "Yashashvi Yadav",
    role: "Club President",
    image: "https://media.licdn.com/dms/image/v2/D5603AQE_CLjQhLVfag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731636718389?e=1741824000&v=beta&t=vQ_Gn2zyprXPiwKKpPcviti-zEHyyM5biiKvQph6NGo",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/yashasviyadav007/"
  },
  {
    name: "Shivansh Saxena",
    role: "Vice President",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFHodtQrIQ33w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721995847687?e=1741824000&v=beta&t=nC9UKFqVid0woY7qn6TWylm-GONhKn4hJbMaTsaIFbI",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/shivansh-saxena-6a31b3248/"
  },
  {
    name: "P Bhaskar Rao",
    role: "Secretary",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE0u0jwLliUmg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698470402913?e=1741824000&v=beta&t=-Gx5_OlgjhRSiJj_gaw3wVbQ1Ia6gX9CPutBByiJk3s",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/p-bhaskar-rao-140a24227/"
  },
  {
    name: "Aditya Tripathi",
    role: "Operations Head",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE_UKmfsMOsfg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694882203503?e=1741824000&v=beta&t=43222cEO756214lf0z1-8o45G5iGbJDYrKHMQOFaghY",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/aditya766/"
  },
  {
    name: "Jiya Siwach",
    role: "Media | PR",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFyxU_onmcTLw/profile-displayphoto-shrink_400_400/B56ZQig1BoG8Ag-/0/1735745820107?e=1741824000&v=beta&t=4j4PAJl9Tbr9xQ4E_IvAdO4MJhI6NHCryV-YZ9hY5nM",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/jiya-siwach-9b5826310/"
  }
];

export default function ProfileSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-16">
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
      >
        <ChevronLeft className="h-8 w-8 text-gray-800 dark:text-white" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
      >
        <ChevronRight className="h-8 w-8 text-gray-800 dark:text-white" />
      </button>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
      >
        <div className="text-center p-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-500 shadow-lg transform hover:rotate-6 transition-transform duration-300">
            <img 
              src={profiles[currentIndex].image}
              alt={profiles[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{profiles[currentIndex].name}</h3>
          <p className="text-red-600 dark:text-red-400 mb-6">{profiles[currentIndex].role}</p>
          <div className="flex justify-center space-x-6">
            <a 
              href={profiles[currentIndex].github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transform hover:scale-110 transition-all"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href={profiles[currentIndex].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transform hover:scale-110 transition-all"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}