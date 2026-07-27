import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export function Services() {
  return (
    <div className="pt-32 bg-[#0D0C0B]">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0D0C0B] to-[#141210] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">Our Services</span>
            </div>
            <h1 className="font-['Playfair_Display'] font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Comprehensive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C9974D] via-[#DEB06A] to-[#B8863C]">
                Construction Solutions
              </span>
            </h1>
            <p className="font-['Inter'] text-xl text-[#A8A29E] max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we deliver excellence across all construction disciplines with precision engineering and unmatched quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0D0C0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#141210]/60 backdrop-blur-sm border border-[#C9974D]/12 rounded-2xl p-8 hover:border-[#C9974D]/35 hover:bg-[#C9974D]/5 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/15 hover:shadow-xl hover:shadow-black/25 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#C9974D]/15">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-['Playfair_Display'] font-bold text-2xl text-white mb-4">{service.title}</h3>
                    <p className="font-['Inter'] text-[#A8A29E] mb-8 leading-relaxed text-base">{service.description}</p>
                  </div>
                  <div>
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-[#C9974D] hover:text-[#DEB06A] font-['Inter'] font-semibold transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0D0C0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#141210]/80 border border-[#C9974D]/15 rounded-2xl p-12 sm:p-16 text-center relative overflow-hidden shadow-xl shadow-black/40"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="font-['Inter'] text-xl text-[#A8A29E] mb-8 max-w-2xl mx-auto">
                We can design a tailored construction plan for your unique requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-[#C9974D] via-[#DEB06A] to-[#B8863C] text-white font-['Inter'] font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C9974D]/25 transition-all duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-[#C9974D]/20 text-[#C9974D] font-['Inter'] font-semibold rounded-lg hover:bg-[#C9974D]/10 hover:border-[#C9974D]/40 hover:text-white transition-all"
                >
                  View Past Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

