import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqs =[
    {
      "question": "What is ThinkTank?",
      "answer": "ThinkTank is a professional networking platform designed to connect professionals, facilitate career growth, and provide learning opportunities. It's a comprehensive platform where you can build your professional network, discover job opportunities, access learning resources, and connect with mentors."
    },
    {
      "question": "How can ThinkTank help my career?",
      "answer": "ThinkTank offers multiple ways to advance your career: connect with industry experts and mentors, discover relevant job opportunities, access professional development courses, track your career progress, and build a strong professional network. Our platform uses smart algorithms to match you with relevant opportunities and connections."
    },
    {
      "question": "What industries does ThinkTank cover?",
      "answer": "ThinkTank is a global platform that covers a wide range of industries including technology, finance, healthcare, education, marketing, and more. We continuously expand our network to ensure comprehensive professional coverage across various sectors."
    },
    {
      "question": "Is ThinkTank free to use?",
      "answer": "ThinkTank offers a free basic version with essential networking features. Premium features like advanced job matching, mentorship programs, and exclusive learning resources are available under subscription plans."
    },
    {
      "question": "How does the mentorship program work?",
      "answer": "Our mentorship program connects you with experienced professionals in your field. You can browse mentor profiles, request mentorship, and engage in one-on-one sessions. The program is designed to provide personalized guidance for your career development."
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
            Find answers to common questions about our professional networking platform and how it can help you advance your career.
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