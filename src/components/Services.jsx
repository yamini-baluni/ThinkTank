import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaSearch, FaFileAlt, FaChartLine, FaUserTie, FaRegLightbulb } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Case Law Retrieval",
      description: "Access a vast database of legal cases with advanced search filters and intelligent pattern recognition to find relevant precedents quickly.",
      icon: <FaSearch className="text-4xl mb-4 text-[#f3eee5]/80" />,
      features: ["5M+ indexed cases", "Advanced filters", "Citation tracking"]
    },
    {
      title: "AI Legal Analysis",
      description: "Leverage machine learning algorithms that analyze case patterns, precedent relevance, and predict potential legal outcomes with high accuracy.",
      icon: <FaBalanceScale className="text-4xl mb-4 text-[#f3eee5]/80" />,
      features: ["Outcome prediction", "Pattern recognition", "Jurisdictional insights"]
    },
    {
      title: "Document Summarization",
      description: "Transform lengthy legal documents into concise, actionable summaries highlighting key arguments, precedents, and conclusions.",
      icon: <FaFileAlt className="text-4xl mb-4 text-[#f3eee5]/80" />,
      features: ["Key point extraction", "Brief generation", "Citation linking"]
    },
    {
      title: "Legal Analytics",
      description: "Visualize case trends, judge tendencies, and legal argument effectiveness through comprehensive data analytics dashboards.",
      icon: <FaChartLine className="text-4xl mb-4 text-[#f3eee5]/80" />,
      features: ["Custom reports", "Visual dashboards", "Trend analysis"]
    },
    {
      title: "Expert Network",
      description: "Connect with specialized legal experts for consultation on complex matters requiring human expertise alongside AI-driven insights.",
      icon: <FaUserTie className="text-4xl mb-4 text-[#f3eee5]/80" />,
      features: ["Verified specialists", "Secure consultation", "Collaborative tools"]
    },
    {
      title: "Legal Innovation Lab",
      description: "Stay ahead with our continuous legal tech innovations, including predictive compliance tools and regulatory change monitoring.",
      icon: <FaRegLightbulb className="text-4xl mb-4 text-[#f3eee5]/80" />,
      features: ["Beta features", "Custom solutions", "API access"]
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
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Legal AI Services</h2>
          <p className="text-lg text-[#f3eee5]/80 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge AI technology with comprehensive legal databases to 
            revolutionize how professionals access, analyze, and leverage legal information.
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
          <a 
            href="#" 
            className="inline-block bg-[#f3eee5] text-[#251c1a] px-8 py-4 rounded-lg font-semibold hover:bg-[#f3eee5]/90 transition-colors duration-300"
          >
            Schedule a Demo
          </a>
          <p className="text-[#f3eee5]/60 mt-4 text-sm">
            See how our AI-powered platform can transform your legal research workflow
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;