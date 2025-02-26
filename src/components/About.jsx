import React from 'react';
import { FaDatabase, FaRobot, FaSearch, FaUsers, FaGavel, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const About = () => {
  const stats = [
    { icon: <FaDatabase className="text-4xl text-[#251c1a]" />, value: 5000000, label: "Cases Indexed" },
    { icon: <FaRobot className="text-4xl text-[#251c1a]" />, value: 85, label: "Prediction Accuracy (%)" },
    { icon: <FaSearch className="text-4xl text-[#251c1a]" />, value: 2, label: "Avg. Search Time (s)" },
    { icon: <FaUsers className="text-4xl text-[#251c1a]" />, value: 10000, label: "Active Users" },
    { icon: <FaGavel className="text-4xl text-[#251c1a]" />, value: 50, label: "Jurisdictions Covered" },
    { icon: <FaClock className="text-4xl text-[#251c1a]" />, value: 24, label: "Support Availability (hrs)" }
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
    <section className="bg-[#f3eee5] text-[#251c1a] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">About Our Legal AI Platform</h2>
          <p className="text-lg mb-6">
            Our platform provides seamless access to past law cases, legal documents, and AI-powered legal research.
            With intelligent case search, legal precedent analysis, and AI-driven insights, we empower legal professionals
            and researchers with fast and reliable legal data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#251c1a] text-[#f3eee5] p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2">Comprehensive Legal Data</h3>
            <p className="text-[#f3eee5]/80">Access a vast collection of past legal cases and judicial decisions.</p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#251c1a] text-[#f3eee5] p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2">AI-Powered Case Analysis</h3>
            <p className="text-[#f3eee5]/80">Leverage AI to analyze case patterns, legal precedents, and predictions.</p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#251c1a] text-[#f3eee5] p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2">Fast & Efficient Search</h3>
            <p className="text-[#f3eee5]/80">Find relevant cases and legal references instantly with smart search algorithms.</p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-[#251c1a]/10 to-transparent p-8 rounded-2xl border border-[#251c1a]/10 text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">
                <CountUp end={stat.value} duration={2.5} />
              </h3>
              <p className="text-lg text-[#251c1a]/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;