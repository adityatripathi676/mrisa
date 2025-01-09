import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const teamMembers = {
  heads: [
    {
      name: "Yashashvi Yadav",
      position: "Club President",
      year: "4th Year",
      image: "https://media.licdn.com/dms/image/v2/D5603AQE_CLjQhLVfag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731636718389?e=1741824000&v=beta&t=vQ_Gn2zyprXPiwKKpPcviti-zEHyyM5biiKvQph6NGo",
      social: {
        linkedin: "https://www.linkedin.com/in/yashasviyadav007/",
        github: "https://github.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "Shivansh Saxena",
      position: "Vice President",
      year: "3rd Year",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFHodtQrIQ33w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721995847687?e=1741824000&v=beta&t=nC9UKFqVid0woY7qn6TWylm-GONhKn4hJbMaTsaIFbI",
      social: {
        linkedin: "https://www.linkedin.com/in/shivansh-saxena-6a31b3248/",
        github: "https://github.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "P Bhaskar Rao",
      position: "Secretary",
      year: "4th Year",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQE0u0jwLliUmg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698470402913?e=1741824000&v=beta&t=-Gx5_OlgjhRSiJj_gaw3wVbQ1Ia6gX9CPutBByiJk3s",
      social: {
        linkedin: "https://www.linkedin.com/in/p-bhaskar-rao-140a24227/",
        github: "https://github.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "Aditya Tripathi",
      position: "Operations Head",
      year: "2nd Year",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQE_UKmfsMOsfg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694882203503?e=1741824000&v=beta&t=43222cEO756214lf0z1-8o45G5iGbJDYrKHMQOFaghY",
      social: {
        linkedin: "https://www.linkedin.com/in/aditya766/",
        github: "https://github.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "Jiya Siwach",
      position: "Media | PR",
      year: "2nd Year",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFyxU_onmcTLw/profile-displayphoto-shrink_400_400/B56ZQig1BoG8Ag-/0/1735745820107?e=1741824000&v=beta&t=4j4PAJl9Tbr9xQ4E_IvAdO4MJhI6NHCryV-YZ9hY5nM",
      social: {
        linkedin: "https://www.linkedin.com/in/jiya-siwach-9b5826310/",
        github: "https://github.com",
        instagram: "https://instagram.com"
      }
    }
  ],
  core: [
    {
      name: "Abhijeet Kharol",
      position: "Core Member",
      year: "3rd Year",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Sneha Khurana",
      position: "Core Member",
      year: "2nd Year",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Bidhu Mitra",
      position: "Core Member",
      year: "2nd Year",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Nanda Kishore avulamanda ",
      position: "Core Member",
      year: "2nd Year",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Nisha",
      position: "Core Member",
      year: "3rd Year",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Subodh Sharma",
      position: "Core Member",
      year: "1st Year",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Aadarsh Bonthula",
      position: "Core Member",
      year: "1st Year",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    }
  ],
  domain_heads: [
    {
      name: "Ayush Choudhary",
      position: "Network Security Lead",
      year: "3rd Year",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Om Pusp Raj Patel",
      position: "Web Security Lead",
      year: "3rd Year",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Saurav Kumar",
      position: "IoT Security Lead",
      year: "2nd Year",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Madhav Tyagi",
      position: "Digital Forensics Lead",
      year: "2nd Year",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Bhavya Anand",
      position: "Cryptography Lead",
      year: "3rd Year",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    }
  ]
};

const TeamSection = ({ title, members }: { title: string; members: any[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 
                     hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300
                     border border-white/20 dark:border-gray-700/20"
          >
            <div className="flex items-center gap-4">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-red-600 dark:text-red-400">{member.position}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.year}</p>
              </div>
              <div className="flex gap-2">
                {member.social.linkedin && (
                  <motion.a
                    whileHover={{ scale: 1.2, color: "#0077b5" }}
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#0077b5]"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                )}
                {member.social.github && (
                  <motion.a
                    whileHover={{ scale: 1.2, color: "#333" }}
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                )}
                {member.social.instagram && (
                  <motion.a
                    whileHover={{ scale: 1.2, color: "#e4405f" }}
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#e4405f]"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Team() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 
                    dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the brilliant minds behind MRISA who work tirelessly to make our community thrive.
          </p>
        </motion.div>

        <TeamSection title="Leadership Team" members={teamMembers.heads} />
        <TeamSection title="Domain Heads" members={teamMembers.domain_heads} />
        <TeamSection title="Core Team" members={teamMembers.core} />
      </div>
    </div>
  );
}