import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const events = [
  {
    title: "Cyber Security Workshop",
    date: "March 15, 2024",
    description: "Learn about the latest security threats and how to protect against them.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
  },
  {
    title: "Ethical Hacking Competition",
    date: "April 2, 2024",
    description: "Test your skills in a controlled environment with like-minded individuals.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen pt-32 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-effect rounded-xl overflow-hidden"
            >
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="h-5 w-5 mr-2" />
                  {event.date}
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}