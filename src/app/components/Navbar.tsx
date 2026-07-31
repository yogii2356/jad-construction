import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../assets/logo.png';


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const services = [
    { name: 'Structural Analysis & Design', path: '/services/structure-analysis-and-design' },
    { name: 'Construction', path: '/services/construction' },
    { name: 'Architecture Planning', path: '/services/architecture-planning' },
    { name: '3D Interior & Exterior Design', path: '/services/3d-interior-and-exterior' },
    { name: 'Landscaping', path: '/services/landscaping' },
    { name: 'Surveying', path: '/services/surveying' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0D0C0B]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#C9974D]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <Link to="/" className="flex items-center group">
            <div className="w-32 h-32 flex items-center justify-center p-2">
              <img
                src={logo}
                alt="JAD Consultants"
                className="w-full h-full object-contain brightness-110 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-['Inter'] font-medium transition-colors duration-300 ${
                location.pathname === '/'
                  ? 'text-[#C9974D]'
                  : 'text-[#A8A29E] hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-['Inter'] font-medium transition-colors duration-300 ${
                location.pathname === '/about'
                  ? 'text-[#C9974D]'
                  : 'text-[#A8A29E] hover:text-white'
              }`}
            >
              About
            </Link>
            <div className="relative group">
              <button className="font-['Inter'] font-medium text-[#A8A29E] hover:text-white transition-colors duration-300 flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#141210] rounded-xl shadow-xl shadow-black/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-[#C9974D]/15">
                <div className="p-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2.5 text-sm font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] hover:bg-[#C9974D]/5 rounded-lg transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/projects"
              className={`font-['Inter'] font-medium transition-colors duration-300 ${
                location.pathname === '/projects'
                  ? 'text-[#C9974D]'
                  : 'text-[#A8A29E] hover:text-white'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`font-['Inter'] font-medium transition-colors duration-300 ${
                location.pathname === '/contact'
                  ? 'text-[#C9974D]'
                  : 'text-[#A8A29E] hover:text-white'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/careers"
              className={`font-['Inter'] font-medium transition-colors duration-300 ${
                location.pathname === '/careers'
                  ? 'text-[#C9974D]'
                  : 'text-[#A8A29E] hover:text-white'
              }`}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#C9974D] to-[#B8863C] text-white font-['Inter'] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#C9974D]/25 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Request a Site Visit</span>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#A8A29E] hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#141210] border-t border-[#C9974D]/10"
          >
            <div className="px-4 py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-2 font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] hover:bg-[#C9974D]/5 rounded-lg"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] hover:bg-[#C9974D]/5 rounded-lg"
              >
                About
              </Link>
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] hover:bg-[#C9974D]/5 rounded-lg"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 space-y-1"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm font-['Inter'] text-[#A8A29E]/80 hover:text-[#C9974D] hover:bg-[#C9974D]/5 rounded-lg"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                to="/projects"
                className="block px-4 py-2 font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] hover:bg-[#C9974D]/5 rounded-lg"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] hover:bg-[#C9974D]/5 rounded-lg"
              >
                Contact
              </Link>
              <Link
                to="/careers"
                className="block px-4 py-2 font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] hover:bg-[#C9974D]/5 rounded-lg"
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="block mx-4 mt-4 px-6 py-2.5 bg-gradient-to-r from-[#C9974D] to-[#B8863C] text-white font-['Inter'] font-semibold rounded-lg text-center hover:opacity-90 transition-all"
              >
                Request a Site Visit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
