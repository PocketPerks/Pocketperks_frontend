const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">About CashKaro</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Useful Reads */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">Useful Reads</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy & Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Anti-Spam Policy</a></li>
            </ul>
          </div>

          {/* Special Pages */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">Special Pages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refer and Earn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Become our Partner</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Let's Get Social</h4>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12..."/>
                  </svg>
                </a>
                {/* Twitter */}
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825..."/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029..."/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016..."/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554..."/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Download App Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h3 className="text-xl font-bold text-orange-400 mb-4">Download App</h3>
            <div className="flex justify-center space-x-4">
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2">
                <span>Android App</span>
              </button>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2">
                <span>iOS App</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © Copyright 2025 CashKaro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
