import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0F1115] to-[#161B22] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 bg-[#C9974D]/10 border border-[#C9974D]/20 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-sm">Get In Touch</span>
            </div>
            <h1 className="font-['Poppins'] font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Contact
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C9974D] to-[#B8863C]">
                JAD Consultants
              </span>
            </h1>
            <p className="font-['Inter'] text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start your construction project? Reach out to us for a consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-[#0F1115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-['Poppins'] font-bold text-3xl text-white mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#C9974D]/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-['Poppins'] font-semibold text-white mb-1">Office Address</h3>
                        <p className="font-['Inter'] text-gray-400 text-sm">
                          H. No. 80A, Ward No 8<br />
                          Jagdamanagar, Near DC<br />
                          Haldwani - 263139
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#C9974D]/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-['Poppins'] font-semibold text-white mb-1">Phone Numbers</h3>
                        <p className="font-['Inter'] text-gray-400 text-sm">
                          +91 7055676167<br />
                          +91 6397496096<br />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#C9974D]/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-['Poppins'] font-semibold text-white mb-1">Email Addresses</h3>
                        <p className="font-['Inter'] text-gray-400 text-sm">
                          er.darshankumarbhatt@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#C9974D]/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-['Poppins'] font-semibold text-white mb-1">Business Hours</h3>
                        <p className="font-['Inter'] text-gray-400 text-sm">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-xl p-6 text-center">
                    <MessageSquare className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="font-['Poppins'] font-semibold text-white mb-2">WhatsApp Support</h3>
                    <p className="font-['Inter'] text-white/90 text-sm mb-4">
                      Get instant answers to your questions
                    </p>
                    <a
                      href="https://wa.me/917351866817"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-white text-[#C9974D] font-['Inter'] font-semibold rounded-lg hover:bg-gray-100 transition-all"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="font-['Poppins'] font-bold text-3xl text-white mb-2">
                  Request a Site Visit
                </h2>
                <p className="font-['Inter'] text-gray-400 mb-8">
                  Fill out the form below and we will get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-['Inter'] font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#C9974D] focus:outline-none focus:ring-2 focus:ring-[#C9974D]/20 transition-all font-['Inter']"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-['Inter'] font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#C9974D] focus:outline-none focus:ring-2 focus:ring-[#C9974D]/20 transition-all font-['Inter']"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-['Inter'] font-medium text-white mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#C9974D] focus:outline-none focus:ring-2 focus:ring-[#C9974D]/20 transition-all font-['Inter']"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block font-['Inter'] font-medium text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#C9974D] focus:outline-none focus:ring-2 focus:ring-[#C9974D]/20 transition-all font-['Inter']"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block font-['Inter'] font-medium text-white mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#C9974D] focus:outline-none focus:ring-2 focus:ring-[#C9974D]/20 transition-all font-['Inter']"
                    >
                      <option value="" className="bg-[#161B22]">Select a service</option>
                      <option value="building-construction" className="bg-[#161B22]">Building Construction</option>
                      <option value="structural-engineering" className="bg-[#161B22]">Structural Engineering</option>
                      <option value="government-survey" className="bg-[#161B22]">Government Survey</option>
                      <option value="industrial-construction" className="bg-[#161B22]">Industrial Construction</option>
                      <option value="renovation-retrofit" className="bg-[#161B22]">Renovation & Retrofit</option>
                      <option value="project-management" className="bg-[#161B22]">Project Management</option>
                      <option value="road-infrastructure" className="bg-[#161B22]">Road & Infrastructure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-['Inter'] font-medium text-white mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#C9974D] focus:outline-none focus:ring-2 focus:ring-[#C9974D]/20 transition-all font-['Inter'] resize-none"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#C9974D] to-[#B8863C] text-white font-['Inter'] font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C9974D]/50 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-[#161B22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Poppins'] font-bold text-4xl text-white mb-4">
              Visit Our Office
            </h2>
            <p className="font-['Inter'] text-lg text-gray-400">
              Stop by for a consultation or project discussion
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://maps.google.com/maps?q=29.2306925,79.5275433&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
