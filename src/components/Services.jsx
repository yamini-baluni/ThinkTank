import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBriefcase, FaGraduationCap, FaHandshake, FaGlobe, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
  {
    title: "Professional Networking",
    description: "Connect with industry experts, mentors, and peers to expand your professional network and unlock new opportunities.",
    icon: <FaUsers className="text-4xl mb-4 text-[#f3eee5]/80" />,
    features: ["Smart matching algorithm", "Industry-specific groups", "Professional recommendations"]
  },
  {
    title: "Career Opportunities",
    description: "Discover job opportunities, internships, and projects that match your skills and career aspirations.",
    icon: <FaBriefcase className="text-4xl mb-4 text-[#f3eee5]/80" />,
    features: ["Job matching", "Skill-based recommendations", "Company insights"]
  },
  {
    title: "Learning & Development",
    description: "Access professional courses, workshops, and resources to enhance your skills and stay competitive.",
    icon: <FaGraduationCap className="text-4xl mb-4 text-[#f3eee5]/80" />,
    features: ["Online courses", "Skill assessments", "Learning paths"]
  },
  {
    title: "Professional Growth",
    description: "Track your career progress, set goals, and get personalized recommendations for professional development.",
    icon: <FaChartLine className="text-4xl mb-4 text-[#f3eee5]/80" />,
    features: ["Career analytics", "Skill tracking", "Progress insights"]
  },
  {
    title: "Global Community",
    description: "Join a diverse community of professionals from around the world and expand your global network.",
    icon: <FaGlobe className="text-4xl mb-4 text-[#f3eee5]/80" />,
    features: ["International networking", "Cultural exchange", "Global opportunities"]
  },
  {
    title: "Mentorship Programs",
    description: "Connect with experienced professionals for guidance, mentorship, and career advice.",
    icon: <FaHandshake className="text-4xl mb-4 text-[#f3eee5]/80" />,
    features: ["Mentor matching", "Career guidance", "Professional advice"]
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const handleSearchNowClick = () => {
    const heroSection = document.querySelector('#home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#251c1a] text-[#f3eee5] py-20 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#f3eee5]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f3eee5]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="bg-[#f3eee5]/10 text-[#f3eee5] px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-5">
            Our Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">ThinkTank Platform</h2>
          <p className="text-lg text-[#f3eee5]/80 max-w-3xl mx-auto leading-relaxed">
            We provide a comprehensive platform for professional networking, career development, 
            and continuous learning to help you achieve your career goals.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-[#f3eee5]/10 to-transparent backdrop-blur-sm p-8 rounded-2xl border border-[#f3eee5]/10 group hover:border-[#f3eee5]/30 transition-all duration-300"
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 30px -10px rgba(0,0,0,0.2)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="h-16 w-16 rounded-2xl bg-[#f3eee5]/10 flex items-center justify-center mb-6 group-hover:bg-[#f3eee5]/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#f3eee5] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#f3eee5]/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-[#f3eee5]/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f3eee5]/40 mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[#f3eee5]/10">
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#f3eee5] font-medium group-hover:text-[#f3eee5]/80"
                >
                  Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <button 
            onClick={handleSearchNowClick}
            className="inline-block bg-[#f3eee5] text-[#251c1a] px-8 py-4 rounded-lg font-semibold hover:bg-[#f3eee5]/90 transition-colors duration-300"
          >
            Join Now
          </button>
          <p className="text-[#f3eee5]/60 mt-4 text-sm">
            Start building your professional network and advancing your career today
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;