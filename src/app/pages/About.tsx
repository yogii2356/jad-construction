import { motion } from 'motion/react';
import { Award, Users, Building2, Shield, Target, Zap, CheckCircle2, TrendingUp, HardHat, Ruler, Palette, Home } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { aboutDescription, coreDisciplines, approachText, visionText, team, timeline, certifications } from '../data/aboutData';

import heroImg from '../../assets/WhatsApp Image 2026-05-09 at 18.16.51.jpeg';
import machineryImg from '../../assets/005.jpg.jpeg';

export function About() {

  return (
    <div className="pt-32 bg-[#0D0C0B]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-[#0D0C0B]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImg}
            alt="Our team"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0C0B]/98 to-[#0D0C0B]/70"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">About JAD Consultants</span>
            </div>
            <h1 className="font-['Inter'] font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              About JAD Consultants
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C9974D] via-[#DEB06A] to-[#B8863C]">
                Haldwani, Uttarakhand
              </span>
            </h1>
            <p className="font-['Inter'] text-xl text-[#A8A29E] leading-relaxed mb-8">
              {aboutDescription}
            </p>
            <div className="bg-[#141210]/80 backdrop-blur-md border border-[#C9974D]/20 rounded-2xl p-6 sm:p-8">
              <h2 className="font-['Inter'] font-bold text-2xl text-white mb-6">Core Disciplines</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-['Inter'] text-sm sm:text-base text-[#A8A29E]">
                {coreDisciplines.map((discipline) => (
                  <div key={discipline.label} className="flex items-start gap-2.5">
                    <span className="text-[#C9974D] font-bold text-lg">•</span>
                    <span><strong className="text-white font-semibold">{discipline.label}:</strong> {discipline.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="py-24 bg-[#141210]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Inter'] font-bold text-4xl sm:text-5xl text-white mb-4">
              How We Got Here
            </h2>
            <p className="font-['Inter'] text-lg text-[#A8A29E] max-w-2xl mx-auto">
              A short history of the practice, from its first projects to where we are today.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#C9974D] to-transparent hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-[#0D0C0B]/60 backdrop-blur-sm border border-[#C9974D]/12 rounded-xl p-6 hover:border-[#C9974D]/35 hover:-translate-y-1 shadow-md shadow-black/15 hover:shadow-xl hover:shadow-black/25 transition-all duration-300 group">
                      <div className="font-['Inter'] font-bold text-2xl text-[#C9974D] mb-2">{item.title}</div>
                      <p className="font-['Inter'] text-[#A8A29E]/90 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#C9974D]/30">
                    <span className="font-['Inter'] font-bold text-white text-lg">{item.year}</span>
                  </div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#0D0C0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#141210]/60 backdrop-blur-sm border border-[#C9974D]/12 rounded-2xl p-8 hover:border-[#C9974D]/35 hover:-translate-y-1 shadow-md shadow-black/15 hover:shadow-xl hover:shadow-black/25 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-full flex items-center justify-center mb-6 shadow-md shadow-[#C9974D]/15">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-['Inter'] font-bold text-3xl text-white mb-4">Our Approach</h2>
              <p className="font-['Inter'] text-lg text-[#A8A29E]/95 leading-relaxed">
                {approachText}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#141210]/60 backdrop-blur-sm border border-[#C9974D]/12 rounded-2xl p-8 hover:border-[#C9974D]/35 hover:-translate-y-1 shadow-md shadow-black/15 hover:shadow-xl hover:shadow-black/25 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-full flex items-center justify-center mb-6 shadow-md shadow-[#C9974D]/15">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-['Inter'] font-bold text-3xl text-white mb-4">Where We're Headed</h2>
              <p className="font-['Inter'] text-lg text-[#A8A29E]/95 leading-relaxed">
                {visionText}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications - Removed - re-add once credential/stat is confirmed with documentation
      <section className="py-24 bg-[#141210]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">Certifications</span>
            </div>
            <h2 className="font-['Inter'] font-bold text-4xl sm:text-5xl text-white mb-4">
              Registrations &amp; Credentials
            </h2>
            <p className="font-['Inter'] text-lg text-[#A8A29E] max-w-2xl mx-auto">
              Current registrations relevant to construction work in Uttarakhand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0D0C0B]/60 backdrop-blur-sm border border-[#C9974D]/12 rounded-xl p-6 hover:border-[#C9974D]/35 hover:-translate-y-1 shadow-md shadow-black/15 hover:shadow-xl hover:shadow-black/25 transition-all duration-300 flex items-start gap-4"
              >
                <Award className="w-8 h-8 text-[#C9974D] flex-shrink-0" />
                <div>
                  <p className="font-['Inter'] font-medium text-[#F0EAE0]">{cert}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Leadership Team */}
      <section className="py-24 bg-[#0D0C0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">Leadership</span>
            </div>
            <h2 className="font-['Inter'] font-bold text-4xl sm:text-5xl text-white mb-4">
              The Team
            </h2>
            {/* <p className="font-['Inter'] text-lg text-[#A8A29E] max-w-2xl mx-auto">
              JAD Consultants is led by Darshan Kumar Bhatt, a civil engineer based in Haldwani.
            </p> */}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => {
              const roleIcons: Record<string, React.ReactNode> = {
                'Structural Engineer': <HardHat className="w-8 h-8 text-white" />,
                'Interior Designer': <Palette className="w-8 h-8 text-white" />,
                'Architect': <Home className="w-8 h-8 text-white" />,
              };
              const initials = member.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2);
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="group relative bg-[#141210]/70 backdrop-blur-sm border border-[#C9974D]/12 rounded-2xl p-6 hover:border-[#C9974D]/50 hover:-translate-y-2 shadow-md shadow-black/20 hover:shadow-2xl hover:shadow-[#C9974D]/10 transition-all duration-400 cursor-default overflow-hidden"
                >
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9974D]/0 to-[#C9974D]/0 group-hover:from-[#C9974D]/5 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />

                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#C9974D] via-[#DEB06A] to-[#B8863C] flex items-center justify-center shadow-xl shadow-[#C9974D]/30 group-hover:shadow-[#C9974D]/50 transition-all duration-300 ring-4 ring-[#C9974D]/10 group-hover:ring-[#C9974D]/30">
                      <span className="font-['Inter'] font-bold text-3xl text-white">{initials}</span>
                    </div>
                    {/* Role icon badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-9 h-9 bg-[#141210] border-2 border-[#C9974D]/40 rounded-full flex items-center justify-center group-hover:border-[#C9974D]/80 transition-all duration-300">
                      <div className="w-5 h-5 text-[#C9974D]">
                        {member.role === 'Structural Engineer' && <HardHat className="w-5 h-5" />}
                        {member.role === 'Interior Designer' && <Palette className="w-5 h-5" />}
                        {member.role === 'Architect' && <Home className="w-5 h-5" />}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center mt-4">
                    <h3 className="font-['Inter'] font-bold text-lg text-white mb-1 group-hover:text-[#DEB06A] transition-colors duration-300">{member.name}</h3>
                    <div className="inline-block px-3 py-0.5 bg-[#C9974D]/15 border border-[#C9974D]/25 rounded-full mb-3">
                      <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs">{member.role}</span>
                    </div>
                    <p className="font-['Inter'] text-[#A8A29E]/80 text-sm mb-1">{member.education}</p>
                    <p className="font-['Inter'] text-[#A8A29E]/60 text-xs leading-relaxed">{member.experience}</p>
                  </div>

                  {/* Animated bottom border on hover */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#C9974D] via-[#DEB06A] to-[#B8863C] rounded-full transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Machinery & Equipment
      <section className="py-24 bg-[#141210]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">Equipment Fleet</span>
            </div>
            <h2 className="font-['Inter'] font-bold text-4xl sm:text-5xl text-white mb-4">
              Equipment We Work With
            </h2>
            <p className="font-['Inter'] text-lg text-[#A8A29E] max-w-2xl mx-auto">
              On-site equipment used across active JAD Consultants projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {machinery.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0D0C0B]/60 backdrop-blur-sm border border-[#C9974D]/12 rounded-xl p-6 text-center hover:border-[#C9974D]/35 hover:-translate-y-1 shadow-md shadow-black/15 hover:shadow-xl hover:shadow-black/25 transition-all duration-300"
              >
                <div className="font-['Inter'] font-bold text-3xl text-[#C9974D] mb-2">{item.count}</div>
                <div className="font-['Inter'] text-sm text-[#A8A29E]/90">{item.name}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 relative overflow-hidden rounded-2xl project-image-wrap"
          >
            <ImageWithFallback
              src={machineryImg}
              alt="Equipment fleet"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B]/95 to-transparent z-10 pointer-events-none"></div>
          </motion.div>
        </div>
      </section> */}

      {/* Site Safety section commented out */}
      {/* 
      <section className="py-24 bg-[#141210]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">Safety Standards</span>
            </div>
            <h2 className="font-['Inter'] font-bold text-4xl sm:text-5xl text-white mb-4">
              Site Safety
            </h2>
            <p className="font-['Inter'] text-lg text-[#A8A29E] max-w-2xl mx-auto">
              Rigorous protocols ensure worker well-being and project integrity on every site.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                  {[
                    'PPE required on all active sites',
                    'Daily site inspection before work begins',
                    'Regular safety briefings with crew',
                    'Emergency response procedures in place',
                  ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9974D] flex-shrink-0" />
                    <span className="font-['Inter'] text-[#A8A29E]/90">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div> 

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-xl p-8 text-center shadow-lg shadow-[#C9974D]/15">
                <Shield className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="font-['Inter'] font-bold text-4xl text-white mb-2">All</div>
                <div className="font-['Inter'] text-white/90">Projects Insured</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> 
      */}
    </div>
  );
}


