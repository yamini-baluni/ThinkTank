const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">About Us</h3>
            <p className="text-gray-400">
              Our platform provides AI-powered legal research and access to past law cases for legal professionals and researchers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Cases</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
            <p className="text-gray-400">Email: support@legalai.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
            <p className="text-gray-400">Location: 123 Legal St, Law City</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Legal AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;