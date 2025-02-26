const Services = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-300 mb-6">
          We provide AI-powered legal solutions to help professionals access case laws, analyze precedents, and streamline legal research.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Case Law Retrieval</h3>
            <p className="text-gray-400">Access a vast database of past legal cases with intelligent search capabilities.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">AI Legal Analysis</h3>
            <p className="text-gray-400">Utilize AI-driven tools to analyze case patterns and predict legal outcomes.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Legal Document Summarization</h3>
            <p className="text-gray-400">Get concise summaries of lengthy legal documents for faster comprehension.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
