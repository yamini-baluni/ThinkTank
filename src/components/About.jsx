const About = () => {
	return (
		<section className="bg-gray-900 text-white py-16 px-6">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-4">About Our Legal AI Platform</h2>
				<p className="text-lg text-gray-300 mb-6">
					Our platform provides seamless access to past law cases, legal documents, and AI-powered legal research.
					With intelligent case search, legal precedent analysis, and AI-driven insights, we empower legal professionals
					and researchers with fast and reliable legal data.
				</p>
				<div className="grid md:grid-cols-3 gap-6 mt-8">
					<div className="bg-gray-800 p-6 rounded-2xl shadow-md">
						<h3 className="text-2xl font-semibold mb-2">Comprehensive Legal Data</h3>
						<p className="text-gray-400">Access a vast collection of past legal cases and judicial decisions.</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-2xl shadow-md">
						<h3 className="text-2xl font-semibold mb-2">AI-Powered Case Analysis</h3>
						<p className="text-gray-400">Leverage AI to analyze case patterns, legal precedents, and predictions.</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-2xl shadow-md">
						<h3 className="text-2xl font-semibold mb-2">Fast & Efficient Search</h3>
						<p className="text-gray-400">Find relevant cases and legal references instantly with smart search algorithms.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;