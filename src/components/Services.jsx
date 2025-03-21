import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBriefcase, FaGraduationCap, FaChartLine, FaGlobe, FaHandshake } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: FaUsers,
      title: 'Professional Networking',
      description: 'Connect with industry experts and peers. Build meaningful relationships and expand your professional network.',
      color: 'from-blue-500 to-blue-600',
      features: ['Industry-specific groups', 'Expert connections', 'Peer networking']
    },
    {
      icon: FaBriefcase,
      title: 'Career Opportunities',
      description: 'Discover job opportunities and internships. Get matched with roles that align with your skills and aspirations.',
      color: 'from-green-500 to-green-600',
      features: ['Job matching', 'Career guidance', 'Industry insights']
    },
    {
      icon: FaGraduationCap,
      title: 'Learning & Development',
      description: 'Access professional courses and resources. Stay ahead with continuous learning and skill development.',
      color: 'from-purple-500 to-purple-600',
      features: ['Online courses', 'Skill assessments', 'Learning paths']
    },
    {
      icon: FaChartLine,
      title: 'Professional Growth',
      description: 'Track your career progress and set goals. Get insights and recommendations for career advancement.',
      color: 'from-orange-500 to-orange-600',
      features: ['Progress tracking', 'Goal setting', 'Performance analytics']
    },
    {
      icon: FaGlobe,
      title: 'Global Community',
      description: 'Join a diverse community of professionals from around the world. Share experiences and learn from others.',
      color: 'from-red-500 to-red-600',
      features: ['Global networking', 'Cultural exchange', 'International opportunities']
    },
    {
      icon: FaHandshake,
      title: 'Mentorship Programs',
      description: 'Connect with experienced professionals for guidance. Get personalized advice for your career journey.',
      color: 'from-indigo-500 to-indigo-600',
      features: ['Mentor matching', 'Career guidance', 'Skill development']
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYuMjUgMzUuMjVhMi4yNSAyLjI1IDAgMTAwLTQuNSAyLjI1IDIuMjUgMCAwMDAgNC41eiIgZmlsbD0iIzI1MWMxYSIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-5"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#251c1a]/5 via-transparent to-[#3a2e2b]/5"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#251c1a] mb-6 relative"
          >
            Our Features
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#251c1a]/10 via-[#3a2e2b]/10 to-[#251c1a]/10 blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#251c1a]/70 text-lg max-w-2xl mx-auto"
          >
            Comprehensive platform for professional networking and career advancement.
            Connect, learn, and grow with our suite of powerful features.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-[#f3eee5] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Icon with gradient */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                    <service.icon className="text-2xl text-white" />
                  </div>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-br opacity-20 blur-lg"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <motion.h3 
                    className="text-2xl font-bold text-[#251c1a] mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-[#251c1a]/70 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  {/* Features list */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                        className="flex items-center text-[#251c1a]/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#251c1a] to-[#3a2e2b] mr-2"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#251c1a]/5 to-transparent rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#3a2e2b]/5 to-transparent rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#251c1a] to-[#3a2e2b] text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Join Now</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#3a2e2b] to-[#251c1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;