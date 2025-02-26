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

  const hoverVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        yoyo: 5
      }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Platform Statistics</h2>
          <div className="w-32 h-1.5 bg-[#251c1a]/50 mx-auto mb-6"></div>
        </motion.div>

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
              whileHover="hover"
              className="bg-gradient-to-br from-[#251c1a]/10 to-transparent p-8 rounded-2xl border border-[#251c1a]/10 text-center cursor-pointer relative transition-transform duration-300"
            >
              <motion.div variants={hoverVariants}>
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  <CountUp end={stat.value} duration={2.5} />
                </h3>
                <p className="text-lg text-[#251c1a]/80">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;