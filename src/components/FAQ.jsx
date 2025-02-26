import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is this platform about?",
      answer: "This platform provides access to past legal cases and AI-powered legal research tools for professionals and researchers.",
    },
    {
      question: "How does AI help in legal research?",
      answer: "Our AI analyzes legal precedents, case patterns, and judicial decisions to offer insights and case predictions.",
    },
    {
      question: "Is this platform free to use?",
      answer: "We offer both free and premium plans based on user needs and data access requirements.",
    },
    {
      question: "How can I search for specific cases?",
      answer: "Our smart search algorithm allows users to find relevant legal cases quickly using keywords and filters.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-md cursor-pointer" onClick={() => toggleFAQ(index)}>
              <h3 className="text-xl font-semibold flex justify-between">
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </h3>
              {openIndex === index && <p className="text-gray-400 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;