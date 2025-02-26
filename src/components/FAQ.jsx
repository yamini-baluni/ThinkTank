import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      question: "What is this legal AI platform about?",
      answer: "Our platform combines advanced artificial intelligence with comprehensive legal databases to provide powerful research tools for legal professionals, researchers, and organizations. We focus on making case law more accessible and insights more actionable."
    },
    {
      question: "How does AI enhance the legal research process?",
      answer: "Our AI technology analyzes thousands of legal precedents, identifies patterns in judicial decisions, extracts key legal principles, and predicts case outcomes based on historical data. This significantly reduces research time and improves the quality of legal arguments."
    },
    {
      question: "What subscription plans are available?",
      answer: "We offer tiered subscription options including a free basic plan with limited searches, a professional plan for individual practitioners, and enterprise solutions for law firms and organizations. Each tier provides increasing access to advanced features and historical case data."
    },
    {
      question: "How accurate is the case prediction algorithm?",
      answer: "Our case prediction algorithm has demonstrated over 85% accuracy in test environments across multiple practice areas. The system continually improves through machine learning as more data and outcomes are incorporated into our models."
    },
    {
      question: "Can I integrate this platform with existing legal software?",
      answer: "Yes, our platform offers API integration with major legal document management systems, practice management software, and citation tools. Our technical team provides support for custom integrations with proprietary systems."
    },
    {
      question: "How is sensitive legal data protected?",
      answer: "We implement bank-level encryption, strict access controls, and regular security audits. All user data is anonymized for analysis purposes, and we maintain compliance with legal industry data protection standards and regulations."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-[#f3eee5] to-[#e2dac9] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#251c1a]">Frequently Asked Questions</h2>
          <p className="text-[#251c1a]/70 max-w-2xl mx-auto">
            Find answers to common questions about our legal AI platform and how it can revolutionize your legal research process.
          </p>
        </motion.div>
        
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`border border-[#251c1a]/10 rounded-xl overflow-hidden ${
                openIndex === index ? "bg-gradient-to-r from-[#251c1a] to-[#3c2b26] text-[#f3eee5]" : "bg-[#f3eee5] text-[#251c1a]"
              }`}
            >
              <div 
                className={`p-6 cursor-pointer flex justify-between items-center transition-colors duration-300 ${
                  openIndex === index ? "" : "hover:bg-[#251c1a]/5"
                }`} 
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 ${openIndex === index ? "text-[#f3eee5]" : "text-[#251c1a]/60"}`}
                >
                  <FaChevronDown />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[#f3eee5]/90 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[#251c1a]/70 mb-6">
            Still have questions? Our team is here to help.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-[#251c1a] text-[#f3eee5] px-8 py-3.5 rounded-lg font-medium hover:bg-[#251c1a]/90 transition-colors duration-300"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;