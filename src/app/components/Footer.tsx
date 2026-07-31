import { Link } from 'react-router';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-[#0D0C0B] border-t border-[#C9974D]/15 relative overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#C9974D]/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex flex-col items-center lg:items-start space-y-4 mb-6 group">
              <div className="w-24 h-24 flex items-center justify-center">
                <img src={logo} alt="JAD Consultants" className="w-full h-full object-contain brightness-110" />
              </div>
            </div>
            <p className="font-['Inter'] text-[#A8A29E] text-sm mb-6 leading-relaxed">
              JAD Consultants (formerly Jay Aedi Dev) - engineering-led design and construction based in Haldwani, Uttarakhand.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#C9974D]/15 border border-white/10 hover:border-[#C9974D]/40 rounded-lg flex items-center justify-center transition-all group">
                <Facebook className="w-5 h-5 text-[#A8A29E] group-hover:text-[#C9974D] transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#C9974D]/15 border border-white/10 hover:border-[#C9974D]/40 rounded-lg flex items-center justify-center transition-all group">
                <Twitter className="w-5 h-5 text-[#A8A29E] group-hover:text-[#C9974D] transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#C9974D]/15 border border-white/10 hover:border-[#C9974D]/40 rounded-lg flex items-center justify-center transition-all group">
                <Linkedin className="w-5 h-5 text-[#A8A29E] group-hover:text-[#C9974D] transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#C9974D]/15 border border-white/10 hover:border-[#C9974D]/40 rounded-lg flex items-center justify-center transition-all group">
                <Instagram className="w-5 h-5 text-[#A8A29E] group-hover:text-[#C9974D] transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-['Poppins'] font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] transition-colors text-sm">Services</Link></li>
              <li><Link to="/projects" className="font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] transition-colors text-sm">Projects</Link></li>
              <li><Link to="/contact" className="font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] transition-colors text-sm">Contact</Link></li>
              <li><Link to="/careers" className="font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins'] font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/structure-analysis-and-design" className="font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] transition-colors text-sm">Structural Analysis & Design</Link></li>
              <li><Link to="/services/construction" className="font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] transition-colors text-sm">Construction</Link></li>
              <li><Link to="/services/architecture-planning" className="font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] transition-colors text-sm">Architecture Planning</Link></li>
              <li><Link to="/services/3d-interior-and-exterior" className="font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] transition-colors text-sm">3D Interior & Exterior Design</Link></li>
              <li><Link to="/services/landscaping" className="font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] transition-colors text-sm">Landscaping</Link></li>
              <li><Link to="/services/surveying" className="font-['Inter'] text-[#A8A29E] hover:text-[#C9974D] transition-colors text-sm">Surveying</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins'] font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C9974D] flex-shrink-0 mt-0.5" />
                <span className="font-['Inter'] text-[#A8A29E] text-sm">H. No. 80A, Ward No 8, Jagdamanagar, Near DC, Haldwani - 263139</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C9974D] flex-shrink-0" />
                <span className="font-['Inter'] text-[#A8A29E] text-sm">+91 7055676167 / +91 6397496096</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C9974D] flex-shrink-0" />
                <span className="font-['Inter'] text-[#A8A29E] text-sm">er.darshankumarbhatt@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#C9974D]/15">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-['Inter'] text-gray-500 text-sm text-center md:text-left">
              © 2026 JAD Consultants. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-['Inter'] text-gray-500 hover:text-[#C9974D] transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="font-['Inter'] text-gray-500 hover:text-[#C9974D] transition-colors text-sm">Terms of Service</a>
              <a href="#" className="font-['Inter'] text-gray-500 hover:text-[#C9974D] transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
