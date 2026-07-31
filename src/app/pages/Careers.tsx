import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Briefcase, Users, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

export function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    resumeLink: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for applying! We will get back to you if there\'s a fit.');
    setFormData({ name: '', email: '', phone: '', area: '', resumeLink: '', message: '' });
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
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-sm">Join Our Team</span>
            </div>
            <h1 className="font-['Poppins'] font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Join
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C9974D] to-[#B8863C]">
                JAD Consultants
              </span>
            </h1>
            <p className="font-['Inter'] text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a small, growing team based in Haldwani. We don't have specific openings listed right now, but we're always open to hearing from people who do good work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-[#0F1115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Poppins'] font-bold text-4xl text-white mb-4">
              Why Work With Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#C9974D]/50 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-['Poppins'] font-bold text-xl text-white mb-4">Hands-On Experience</h3>
              <p className="font-['Inter'] text-gray-400 leading-relaxed">
                Work directly on real projects from planning through construction, not sidelined on paperwork.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#C9974D]/50 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-['Poppins'] font-bold text-xl text-white mb-4">Small Team, Real Responsibility</h3>
              <p className="font-['Inter'] text-gray-400 leading-relaxed">
                Being a small operation means your work is visible and matters - not lost in a large hierarchy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#C9974D]/50 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-['Poppins'] font-bold text-xl text-white mb-4">Growing With Us</h3>
              <p className="font-['Inter'] text-gray-400 leading-relaxed">
                We're early in our growth as JAD Consultants. Joining now means growing into bigger roles as the company does.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-24 bg-[#161B22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Poppins'] font-bold text-3xl text-white mb-8 text-center">
                What We Look For
              </h2>
              <ul className="space-y-4 font-['Inter'] text-lg text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C9974D] mt-2.5 flex-shrink-0"></div>
                  <span>Civil engineering or architecture background (students/graduates welcome to inquire)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C9974D] mt-2.5 flex-shrink-0"></div>
                  <span>Site supervision or construction management experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C9974D] mt-2.5 flex-shrink-0"></div>
                  <span>Interest in design/3D visualization work</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C9974D] mt-2.5 flex-shrink-0"></div>
                  <span>Reliable, hands-on people who want real project experience</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-24 bg-[#0F1115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
            >
              <div className="text-center mb-10">
                <h2 className="font-['Poppins'] font-bold text-3xl text-white mb-4">
                  Interested in Joining?
                </h2>
                <p className="font-['Inter'] text-gray-400">
                  Send your resume and a short note about what you're looking for. We'll get back to you if there's a fit.
                </p>
              </div>

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
                      placeholder="Jane Doe"
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
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-['Inter'] font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#C9974D] focus:outline-none focus:ring-2 focus:ring-[#C9974D]/20 transition-all font-['Inter']"
                      placeholder="+91 00000 00000"
                    />
                  </div>

                  <div>
                    <label htmlFor="area" className="block font-['Inter'] font-medium text-white mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#C9974D] focus:outline-none focus:ring-2 focus:ring-[#C9974D]/20 transition-all font-['Inter']"
                    >
                      <option value="" className="bg-[#161B22]">Select an area</option>
                      <option value="engineering" className="bg-[#161B22]">Engineering</option>
                      <option value="architecture-design" className="bg-[#161B22]">Architecture/Design</option>
                      <option value="site-supervision" className="bg-[#161B22]">Site Supervision</option>
                      <option value="other" className="bg-[#161B22]">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="resumeLink" className="block font-['Inter'] font-medium text-white mb-2">
                    Resume Link
                  </label>
                  <input
                    type="url"
                    id="resumeLink"
                    name="resumeLink"
                    value={formData.resumeLink}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#C9974D] focus:outline-none focus:ring-2 focus:ring-[#C9974D]/20 transition-all font-['Inter']"
                    placeholder="Link to Google Drive, LinkedIn, Portfolio, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-['Inter'] font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#C9974D] focus:outline-none focus:ring-2 focus:ring-[#C9974D]/20 transition-all font-['Inter'] resize-none"
                    placeholder="Tell us a little bit about yourself and what you're looking for..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#C9974D] to-[#B8863C] text-white font-['Inter'] font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C9974D]/50 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Application
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
