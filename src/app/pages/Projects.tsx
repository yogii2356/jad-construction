import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MapPin, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projectsData, CATEGORIES, ProjectItem } from '../data/projectsData';

const ProjectCard = ({ project, index, onOpenLightbox }: { project: ProjectItem; index: number; onOpenLightbox: (project: ProjectItem, index: number) => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      key={`${project.id}-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-[#141210]/60 backdrop-blur-sm border border-[#C9974D]/12 hover:border-[#C9974D]/35 hover:-translate-y-1 shadow-md shadow-black/15 hover:shadow-xl hover:shadow-black/25 transition-all duration-300"
    >
      <div 
        className="relative overflow-hidden project-image-wrap group/carousel h-64 cursor-pointer"
        onClick={() => onOpenLightbox(project, currentImageIndex)}
      >
        <ImageWithFallback
          src={project.images[currentImageIndex]}
          alt={`${project.title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70 z-30"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70 z-30"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {project.images.map((_, i) => (
                <button 
                  key={i} 
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${i === currentImageIndex ? 'bg-[#C9974D]' : 'bg-white/50 hover:bg-white/80'}`} 
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-[#0D0C0B]/40 to-transparent z-10 pointer-events-none"></div>

        <div className="absolute top-4 right-4 z-20">
          <div className="px-3 py-1 bg-[#C9974D]/20 backdrop-blur-sm border border-[#C9974D]/35 rounded-full shadow-lg shadow-black/20">
            <span className="font-['Inter'] font-medium text-[#F0EAE0] text-xs">{project.category}</span>
          </div>
        </div>
      </div>

      <div className="p-6 relative z-20">
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
  );
};

const Lightbox = ({ project, initialIndex, onClose }: { project: ProjectItem; initialIndex: number; onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % project.images.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, project.images.length]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm" 
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-[#C9974D] rounded-full transition-all z-[110]"
      >
        <X className="w-6 h-6" />
      </button>

      {project.images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-[#C9974D] transition-all z-[110]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-[#C9974D] transition-all z-[110]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <ImageWithFallback
          src={project.images[currentIndex]}
          alt={`${project.title} - Image ${currentIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />
        <div className="mt-4 text-center">
          <h3 className="text-white font-['Playfair_Display'] text-2xl">
            {project.title}
          </h3>
          {project.images.length > 1 && (
            <p className="text-[#A8A29E] font-['Inter'] text-sm mt-1">
              Image {currentIndex + 1} of {project.images.length}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export function Projects() {
  const [lightboxData, setLightboxData] = useState<{ project: ProjectItem; initialIndex: number } | null>(null);
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  onOpenLightbox={(proj, idx) => setLightboxData({ project: proj, initialIndex: idx })}
                />
              ))}
            </div>
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

      <AnimatePresence>
        {lightboxData && (
          <Lightbox 
            project={lightboxData.project} 
            initialIndex={lightboxData.initialIndex} 
            onClose={() => setLightboxData(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
