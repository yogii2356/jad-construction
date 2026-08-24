import { Link } from 'react-router';
import { Building2, TrendingUp, Award, Shield, Users, ArrowRight, CheckCircle2, Star, FileText, Download, Trees, Cuboid, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { servicesData } from '../data/servicesData';

import heroImg from '../../assets/11.jpg.jpeg'; 
import aboutImg from '../../assets/WhatsApp Image 2026-05-09 at 18.16.52.jpeg';

import dc01 from '../../assets/design-concepts/design-concept-01.jpg';
import dc02 from '../../assets/design-concepts/design-concept-02.jpg';
import dc03 from '../../assets/design-concepts/design-concept-03.jpg';
import dc04 from '../../assets/design-concepts/design-concept-04.jpg';
import dc05 from '../../assets/design-concepts/design-concept-05.jpg';
import dc06 from '../../assets/design-concepts/design-concept-06.jpg';
import dc07 from '../../assets/design-concepts/design-concept-07.jpg';
import dc08 from '../../assets/design-concepts/design-concept-08.jpg';
import dc09 from '../../assets/design-concepts/design-concept-09.jpg';
import dc10 from '../../assets/design-concepts/design-concept-10.jpg';

import foundationPlanPdf from '../../assets/plans/foundation-plan.pdf';
import groundFloorPlanPdf from '../../assets/plans/ground-floor-plan.pdf';

export function Home() {


  const projects = [
    {
      title: 'Hillside Residential Villa',
      category: 'Design Concept',
      image: dc01,
    },
    {
      title: 'Stone-Facade Residential Villa',
      category: 'Design Concept',
      image: dc02,
    },
    {
      title: 'Modern Residential Elevation',
      category: 'Design Concept',
      image: dc03,
    },
    {
      title: 'Contemporary Villa Design',
      category: 'Design Concept',
      image: dc04,
    },
    {
      title: 'Two-Story Villa Concept',
      category: 'Design Concept',
      image: dc05,
    },
    {
      title: 'Triplex Villa Complex',
      category: 'Design Concept',
      image: dc06,
    },
    {
      title: 'Mixed-Use Apartment & Retail Complex',
      category: 'Design Concept',
      image: dc07,
    },
    {
      title: 'Twin Villa Compound',
      category: 'Design Concept',
      image: dc08,
    },
    {
      title: 'Modern Villa - Night Elevation',
      category: 'Design Concept',
      image: dc09,
    },
    {
      title: 'Two-Story Home with Car Porch',
      category: 'Design Concept',
      image: dc10,
    },
  ];

  // TODO: Replace placeholder testimonials with real client quotes
  const testimonials = [
    {
      name: '[Client Name]',
      position: '[Project Type]',
      content: 'JAD Consultants\' structural planning gave us confidence before we even broke ground.',
      rating: 5,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0C0B]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImg}
            alt="Construction site"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0C0B]/98 via-[#0D0C0B]/85 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
          {/* Subtle warm glow */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C9974D]/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-['Playfair_Display'] font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] tracking-tight">
                Structure First.
                <span className="block brand-gradient-text-animate">
                  Design That Stands.
                </span>
              </h1>
              <p className="font-['Inter'] text-lg sm:text-xl text-[#A8A29E] mb-8 leading-relaxed">
                We seamlessly integrate architectural design, structural engineering, precise surveying, 3D visualization, and construction management under one roof. By combining technical precision with advanced digital modeling, we transform complex concepts into buildable, cost-efficient realities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-[#C9974D] via-[#DEB06A] to-[#B8863C] text-white font-['Inter'] font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C9974D]/25 transition-all duration-300 text-center flex items-center justify-center gap-2 group"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-[#C9974D]/20 text-white font-['Inter'] font-semibold rounded-lg hover:bg-[#C9974D]/10 hover:border-[#C9974D]/40 transition-all duration-300 text-center"
                >
                  View Our Projects
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-[#141210]/60 backdrop-blur-md border border-[#C9974D]/15 rounded-xl p-6 hover:border-[#C9974D]/35 hover:bg-[#C9974D]/5 transition-all duration-300 shadow-lg shadow-black/25 hover:-translate-y-1">
                <div className="text-4xl font-['Playfair_Display'] font-bold brand-gradient-text mb-2">10+</div>
                <div className="font-['Inter'] text-[#A8A29E] text-sm tracking-wide uppercase font-medium">Years in Practice</div>
              </div>
              <div className="bg-[#141210]/60 backdrop-blur-md border border-[#C9974D]/15 rounded-xl p-6 hover:border-[#C9974D]/35 hover:bg-[#C9974D]/5 transition-all duration-300 shadow-lg shadow-black/25 hover:-translate-y-1">
                <div className="text-4xl font-['Playfair_Display'] font-bold brand-gradient-text mb-2">100+</div>
                <div className="font-['Inter'] text-[#A8A29E] text-sm tracking-wide uppercase font-medium">Design Concepts</div>
              </div>
              <div className="bg-[#141210]/60 backdrop-blur-md border border-[#C9974D]/15 rounded-xl p-6 hover:border-[#C9974D]/35 hover:bg-[#C9974D]/5 transition-all duration-300 col-span-2 shadow-lg shadow-black/25 hover:-translate-y-1">
                <div className="text-4xl font-['Playfair_Display'] font-bold brand-gradient-text mb-2">Haldwani, Almora </div>
                <div className="font-['Inter'] text-[#A8A29E] text-sm tracking-wide uppercase font-medium">Uttarakhand,Delhi</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-[#141210] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <ImageWithFallback
                  src={aboutImg}
                  alt="Construction team"
                  className="w-full h-[500px] object-cover rounded-2xl opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B]/90 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
                <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">About JAD Consultants</span>
              </div>
              <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
                About JAD Consultants
              </h2>
              <p className="font-['Inter'] text-lg text-[#A8A29E] mb-6 leading-relaxed">
                JAD Consultants is led by partners with deep expertise in design and execution, bringing together years of hands-on industry experience. We deliver integrated design, engineering, and construction solutions, eliminating the friction of managing multiple vendors by providing a single point of accountability from blueprint to handover.
              </p>
              <div className="space-y-3 mb-8">
                <h3 className="font-['Playfair_Display'] font-semibold text-white text-xl mb-3">Core Disciplines</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-['Inter'] text-sm text-[#A8A29E]">
                  <div className="flex items-start gap-2">
                    <span className="text-[#C9974D] font-bold">•</span>
                    <span><strong className="text-white">Construction:</strong> Full-scale site management and execution.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#C9974D] font-bold">•</span>
                    <span><strong className="text-white">Architecture:</strong> Functional and aesthetic spatial design.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#C9974D] font-bold">•</span>
                    <span><strong className="text-white">Structural:</strong> Analysis and design of structure as per IS codes.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#C9974D] font-bold">•</span>
                    <span><strong className="text-white">Surveying:</strong> Precise land mapping and site analysis.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#C9974D] font-bold">•</span>
                    <span><strong className="text-white">3D Visualization:</strong> Photorealistic digital renderings.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#C9974D] font-bold">•</span>
                    <span><strong className="text-white">Interior & Exterior:</strong> Complete indoor and outdoor visualization with modern to classic designs.</span>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#C9974D]/20 text-[#C9974D] font-['Inter'] font-semibold rounded-lg hover:bg-[#C9974D]/10 hover:border-[#C9974D]/40 transition-all group"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0D0C0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl text-white mb-4">
              What We Do
            </h2>
            <p className="font-['Inter'] text-lg text-[#A8A29E] max-w-2xl mx-auto">
              We handle structural engineering, architectural design, and construction under one roof — so you're not coordinating between separate firms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#141210]/60 backdrop-blur-sm border border-[#C9974D]/12 rounded-xl p-6 hover:border-[#C9974D]/35 hover:bg-[#C9974D]/5 transition-all duration-300 flex flex-col justify-between shadow-md shadow-black/15 hover:shadow-xl hover:shadow-black/25 hover:-translate-y-1 group"
                >
                  <div>
                    <div className="w-14 h-14 bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-[#C9974D]/10">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-['Playfair_Display'] font-semibold text-xl text-white mb-2">{service.title}</h3>
                    <p className="font-['Inter'] text-[#A8A29E] text-sm mb-6 leading-relaxed">{service.description}</p>
                  </div>
                  <div>
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-[#C9974D] hover:text-[#DEB06A] font-['Inter'] font-medium text-sm transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9974D] via-[#DEB06A] to-[#B8863C] text-white font-['Inter'] font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C9974D]/25 transition-all duration-300 group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-24 bg-[#141210]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">Our Design Portfolio</span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl text-white mb-4">
              Design Concepts
            </h2>
            <p className="font-['Inter'] text-lg text-[#A8A29E] max-w-2xl mx-auto">
              Architectural elevation renders from our studio — these are design drawings, not photos of completed builds.
            </p>
          </motion.div>

          <div className="projects-slider">
            <Slider {...sliderSettings}>
              {projects.map((project, index) => (
                <div key={index} className="px-3">
                  <div className="group relative overflow-hidden rounded-xl project-image-wrap">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-[#0D0C0B]/40 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <div className="inline-block px-3 py-1 bg-[#C9974D]/20 backdrop-blur-sm border border-[#C9974D]/35 rounded-full mb-3">
                        <span className="font-['Inter'] font-medium text-[#F0EAE0] text-xs">{project.category}</span>
                      </div>
                      <h3 className="font-['Playfair_Display'] font-bold text-xl text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-[#C9974D]/20 text-[#C9974D] font-['Inter'] font-semibold rounded-lg hover:bg-[#C9974D]/10 hover:border-[#C9974D]/40 hover:text-white transition-all group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>



      {/* Statistics Counter */}
      {/* <section className="py-20 bg-[#0D0C0B] relative overflow-hidden border-y border-[#C9974D]/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#141210]/80 border border-[#C9974D]/15 rounded-2xl p-10 sm:p-12 shadow-xl shadow-black/40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '10+', label: 'Design Concepts' },
                { number: 'Uttarakhand', label: 'Region Served', size: 'text-2xl sm:text-3xl lg:text-4xl' },
                { number: '5+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Completed' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`font-['Playfair_Display'] font-bold ${stat.size || 'text-4xl sm:text-5xl'} brand-gradient-text mb-2 whitespace-nowrap`}>{stat.number}</div>
                  <div className="font-['Inter'] font-medium text-[#A8A29E] text-sm tracking-wide uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}



      {/* Client Testimonials */}
      <section className="py-24 bg-[#141210]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl text-white mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="testimonial-slider">
            <Slider {...testimonialSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <div className="bg-[#0D0C0B]/60 backdrop-blur-sm border border-[#C9974D]/12 rounded-xl p-8 text-center shadow-lg shadow-black/20 hover:border-[#C9974D]/35 transition-all">
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#C9974D] text-[#C9974D]" />
                      ))}
                    </div>
                    <p className="font-['Inter'] text-lg text-[#A8A29E] mb-8 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-['Playfair_Display'] font-semibold text-white text-lg">{testimonial.name}</div>
                      <div className="font-['Inter'] text-[#A8A29E]/80 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#0D0C0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#141210]/80 border border-[#C9974D]/15 rounded-2xl p-12 sm:p-16 text-center relative overflow-hidden shadow-xl shadow-black/40"
          >
            {/* Glowing orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9974D]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F0EAE0]/3 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl text-white mb-4">
                Have a plot or a project in mind?
              </h2>
              <p className="font-['Inter'] text-xl text-[#A8A29E] mb-8 max-w-2xl mx-auto">
                We'll walk through the site, talk through what's feasible structurally and budget-wise, and tell you what a realistic timeline looks like. No pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-[#C9974D] via-[#DEB06A] to-[#B8863C] text-white font-['Inter'] font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C9974D]/25 transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-[#C9974D]/20 text-[#C9974D] font-['Inter'] font-semibold rounded-lg hover:bg-[#C9974D]/10 hover:border-[#C9974D]/40 hover:text-white transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
