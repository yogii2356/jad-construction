import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Masonry from 'react-responsive-masonry';
import { MapPin, Calendar, Award } from 'lucide-react';
import { projectsData, CATEGORIES } from '../data/projectsData';

export function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [activeFilter, setActiveFilter] = useState<string>(categoryParam || 'All');

  useEffect(() => {
    if (categoryParam && CATEGORIES.includes(categoryParam as any)) {
      setActiveFilter(categoryParam);
    } else if (!categoryParam) {
      setActiveFilter('All');
    }
  }, [categoryParam]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: filter });
    }
  };

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

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
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">Our Portfolio</span>
            </div>
            <h1 className="font-['Playfair_Display'] font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Design
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C9974D] via-[#DEB06A] to-[#B8863C]">
                Concepts
              </span>
            </h1>
            <p className="font-['Inter'] text-xl text-[#A8A29E] max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of design concepts and architectural elevations for diverse projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section id="portfolio" className="py-12 bg-[#141210] sticky top-20 z-40 border-b border-[#C9974D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-5 py-2.5 rounded-lg font-['Inter'] font-semibold text-sm transition-all border ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#C9974D] via-[#DEB06A] to-[#B8863C] text-white border-transparent shadow-lg shadow-[#C9974D]/20'
                    : 'bg-white/5 text-[#A8A29E] hover:bg-[#C9974D]/10 hover:text-white border-[#C9974D]/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-[#0D0C0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <Masonry columnsCount={3} gutter="24px" className="masonry-grid">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-[#141210]/60 backdrop-blur-sm border border-[#C9974D]/12 hover:border-[#C9974D]/35 hover:-translate-y-1 shadow-md shadow-black/15 hover:shadow-xl hover:shadow-black/25 transition-all duration-300"
                >
                  <div className="relative overflow-hidden project-image-wrap">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-[#0D0C0B]/40 to-transparent z-10 pointer-events-none"></div>

                    <div className="absolute top-4 right-4 z-20">
                      <div className="px-3 py-1 bg-[#C9974D]/20 backdrop-blur-sm border border-[#C9974D]/35 rounded-full">
                        <span className="font-['Inter'] font-medium text-[#F0EAE0] text-xs">{project.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-['Playfair_Display'] font-bold text-2xl text-white mb-3 group-hover:text-[#C9974D] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-['Inter'] text-[#A8A29E] mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#A8A29E]/80">
                        <MapPin className="w-4 h-4 text-[#C9974D]" />
                        <span className="font-['Inter'] text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#A8A29E]/80">
                        <Calendar className="w-4 h-4 text-[#C9974D]" />
                        <span className="font-['Inter'] text-sm">Designed {project.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          ) : (
            <div className="text-center py-20 bg-[#141210]/60 border border-[#C9974D]/15 rounded-2xl p-12 shadow-xl">
              <h3 className="font-['Playfair_Display'] font-bold text-2xl text-white mb-3">No design concept renders currently tagged under "{activeFilter}"</h3>
              <p className="font-['Inter'] text-[#A8A29E] max-w-lg mx-auto mb-6 leading-relaxed">
                Our portfolio currently showcases architectural elevation renders. Technical plan documents, structural calculations, and survey filings are maintained separately.
              </p>
              <button
                onClick={() => handleFilterChange('All')}
                className="px-6 py-3 bg-gradient-to-r from-[#C9974D] via-[#DEB06A] to-[#B8863C] text-white font-['Inter'] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#C9974D]/25 transition-all"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#0D0C0B] border-y border-[#C9974D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#141210]/80 border border-[#C9974D]/15 rounded-2xl p-10 sm:p-12 shadow-xl shadow-black/40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Award, number: '10+', label: 'Design Concepts' },
                { icon: MapPin, number: '15', label: 'States Served' },
                { icon: Calendar, number: '25+', label: 'Years Experience' },
                { icon: Award, number: '98%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-10 h-10 text-[#C9974D] mx-auto mb-4" />
                  <div className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl brand-gradient-text mb-2">{stat.number}</div>
                  <div className="font-['Inter'] font-medium text-[#A8A29E] tracking-wide uppercase text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
