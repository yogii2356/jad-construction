import { useLocation, Link } from 'react-router';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Masonry from 'react-responsive-masonry';

export function ServiceDetail() {
  const location = useLocation();
  const servicePath = location.pathname.split('/').pop() || '';

  const categoryMap: Record<string, string> = {
    'construction': 'Construction',
    'structure-analysis-and-design': 'Structural Analysis & Design',
    'surveying': 'Surveying',
    'architecture-planning': 'Architecture Planning',
    '3d-interior-and-exterior': '3D Interior & Exterior Design',
    'landscaping': 'Landscaping',
  };

  const serviceData: Record<string, any> = {
    'construction': {
      title: 'Construction',
      subtitle: 'Complete construction solutions from foundation to finish',
      description: 'We deliver exceptional craftsmanship, on-time project completion, and uncompromising safety. Whether it is a modern home or a large-scale commercial project, we tailor our structural, engineering, and renovation services to fit your budget and timeline perfectly.',
      heroImage: 'https://images.unsplash.com/photo-1652876256405-3902cc201b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzgyNzE2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      process: [
        { step: 'Planning & Design', desc: 'Detailed architectural planning and engineering design' },
        { step: 'Site Preparation', desc: 'Land clearing, excavation, and foundation work' },
        { step: 'Structural Construction', desc: 'Building framework, walls, and roofing systems' },
        { step: 'MEP Installation', desc: 'Mechanical, electrical, and plumbing systems' },
        { step: 'Finishing Works', desc: 'Interior and exterior finishes, landscaping' },
        { step: 'Quality Inspection', desc: 'Final inspection, testing, and handover' },
      ],
      technologies: [
        'Skilled workforce',
        'Advanced construction equipment',
        'Project management software',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1652876256405-3902cc201b22?w=600',
        'https://images.unsplash.com/photo-1756227584303-f1400daaa69d?w=600',
        'https://images.unsplash.com/photo-1710701455648-e85f21bf3a79?w=600',
      ],
      faqs: [
        { q: 'What types of buildings do you construct?', a: 'We construct residential complexes, commercial buildings, office towers, institutional facilities, and mixed-use developments.' },
        { q: 'How long does a typical project take?', a: 'Project duration varies based on size and complexity, typically ranging from 6 months for smaller buildings to 2-3 years for large complexes.' },
        { q: 'Do you provide design services?', a: 'Yes - design and structural planning are handled directly, so there\'s no handoff between a separate architect and engineer.' },
      ],
    },
    'structure-analysis-and-design': {
      title: 'Structure Analysis and Design',
      subtitle: 'Advanced structural design and analysis for complex projects',
      description: 'We deliver comprehensive structural engineering solutions engineered for structural integrity, structural safety, and long-term asset durability. Our firm integrates advanced mechanics, material science, and computational modeling to design optimized structural frameworks for complex projects. From initial schematic concepts to final structural validation, we ensure your investments safely resist all static, dynamic, and environmental forces while strictly adhering to safety and serviceability limit states.',
      heroImage: 'https://images.unsplash.com/photo-1763405739542-02991ab5416c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwc3Vuc2V0JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzgzMzI5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      process: [
        { step: 'Site Assessment', desc: 'Geotechnical investigation and soil analysis' },
        { step: 'Structural Analysis', desc: 'Load calculations and structural modeling' },
        { step: 'Design Development', desc: 'Detailed structural drawings and specifications' },
        { step: 'Engineering Review', desc: 'Peer review and regulatory compliance check' },
        { step: 'Construction Support', desc: 'On-site engineering supervision and quality assurance' },
        { step: 'Post-Construction', desc: 'Structural testing and certification' },
      ],
      technologies: [
        'Software: Etabs, Staad-Pro, Revit, RCDC, SAFE, AutoCAD, Idea-Statica',
        'Codes: Indian codes',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1763405739542-02991ab5416c?w=600',
        'https://images.unsplash.com/photo-1770152626339-f55625a4c141?w=600',
        'https://images.unsplash.com/photo-1764767170557-8a9d4d8c5932?w=600',
      ],
      faqs: [
        { q: 'What is structural engineering?', a: 'Structural engineering involves designing and analyzing the framework that supports buildings and infrastructure, ensuring safety and stability.' },
        { q: 'Do you handle seismic design?', a: 'Yes, we specialize in seismic design and retrofitting to ensure structures can withstand earthquake forces.' },
        { q: 'Can you review existing structures?', a: 'Absolutely. We provide structural assessment and strengthening solutions for existing buildings.' },
      ],
    },
    'surveying': {
      title: 'Surveying',
      subtitle: 'Professional surveying and mapping for construction projects',
      description: 'Protect your investments with certified, pinpoint-accurate property data. We provide comprehensive land surveying services—including boundary markers, ALTA/NSPS title surveys, and topographic mapping—for homeowners, developers, and real estate professionals. We eliminate the guesswork so you can build, buy, or permit with absolute legal confidence.',
      heroImage: 'https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3ODMzMjk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      // process: [
      //   { step: 'Project Briefing', desc: 'Understanding survey requirements and objectives' },
      //   { step: 'Field Survey', desc: 'Data collection using GPS, total stations, and drones' },
      //   { step: 'Data Processing', desc: 'Processing and analyzing collected survey data' },
      //   { step: 'Mapping & Modeling', desc: 'Creating topographic maps and 3D terrain models' },
      //   { step: 'Report Generation', desc: 'Comprehensive survey reports with recommendations' },
      //   { step: 'Delivery & Support', desc: 'Data delivery and ongoing technical support' },
      // ],
      technologies: [
        'GPS/GNSS Systems',
        'UAV/Drone Surveying',
        'LiDAR Scanning',
        'GIS Software & Analysis',
        'Total Station Equipment',
        '3D Laser Scanning',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?w=600',
        'https://images.unsplash.com/photo-1718209962486-4f91ce71886b?w=600',
        'https://images.unsplash.com/photo-1758798349056-91d959e4b6c6?w=600',
      ],
      faqs: [
        { q: 'What types of surveys do you conduct?', a: 'We conduct boundary surveys, topographic surveys, construction staking, and aerial surveys using drones.' },
        { q: 'How accurate are your surveys?', a: 'Our surveys meet or exceed government standards, with accuracy down to millimeter level for critical infrastructure.' },
        { q: 'Do you provide GIS services?', a: 'Yes, we offer complete GIS data collection, analysis, and mapping services for spatial planning.' },
      ],
    },
    'architecture-planning': {
      title: 'Architecture Planning',
      subtitle: 'Innovative architectural planning tailored to your unique requirements',
      description: 'Great architecture tells a unique story. We specialize in luxury residential designs, cutting-edge commercial spaces, and comprehensive urban planning. By balancing contemporary aesthetics with functional blueprints, we craft iconic landmarks that elevate the human experience.',
      heroImage: 'https://images.unsplash.com/photo-1768054948628-82319724f0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMGNvbnN0cnVjdGlvbiUyMGVxdWlwbWVudCUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzgzMzI5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      process: [
        { step: 'Requirements Analysis', desc: 'Understanding industrial processes and facility needs' },
        { step: 'Site Development', desc: 'Heavy-duty foundation and utility infrastructure' },
        { step: 'Structural Erection', desc: 'Steel frame construction and pre-engineered buildings' },
        { step: 'Systems Integration', desc: 'Industrial HVAC, process piping, and electrical systems' },
        { step: 'Equipment Installation', desc: 'Machinery foundations and equipment placement' },
        { step: 'Commissioning', desc: 'Testing, startup support, and operational handover' },
      ],
      technologies: [
        'Pre-Engineered Metal Buildings',
        'Heavy Equipment Foundations',
        'Industrial Crane Systems',
        'Process Piping Networks',
        'High-Capacity Electrical Systems',
        'Industrial Safety Systems',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1768054948628-82319724f0b7?w=600',
        'https://images.unsplash.com/photo-1759850425285-46f70357253d?w=600',
        'https://images.unsplash.com/photo-1759745125627-333e78bc1edc?w=600',
      ],
      faqs: [
        { q: 'What industries do you serve?', a: 'We serve manufacturing, logistics, food processing, pharmaceuticals, automotive, and heavy industry sectors.' },
        { q: 'Can you work around existing operations?', a: 'Yes, we specialize in phased construction to minimize disruption to ongoing industrial operations.' },
        { q: 'Do you handle permits and compliance?', a: 'We manage all permitting, environmental compliance, and industrial safety certifications.' },
      ],
    },
    '3d-interior-and-exterior': {
      title: '3D Interior and Exterior',
      subtitle: 'High-quality 3D renderings for interior and exterior spaces',
      description: 'We transform ordinary spaces into bespoke, highly functional sanctuaries tailored entirely to your lifestyle. From the initial spatial layout and concept mood boards to comprehensive construction oversight and meticulous final styling, we manage every layer of your renovation or build with utmost transparency and attention to detail. Let us handle the heavy lifting while you enjoy a seamless, stress-free journey to your dream home.',
      heroImage: 'https://images.unsplash.com/photo-1652876256405-3902cc201b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzgyNzE2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      process: [
        { step: 'Building Assessment', desc: 'Comprehensive evaluation of existing conditions' },
        { step: 'Design & Planning', desc: 'Renovation design respecting original architecture' },
        { step: 'Structural Strengthening', desc: 'Seismic retrofitting and structural upgrades' },
        { step: 'Systems Upgrade', desc: 'Modernizing MEP systems and building automation' },
        { step: 'Interior Renovation', desc: 'Space reconfiguration and aesthetic improvements' },
        { step: 'Restoration', desc: 'Facade restoration and finishing touches' },
      ],
      technologies: [
        'Non-Destructive Testing',
        'Carbon Fiber Reinforcement',
        'Energy-Efficient HVAC Upgrades',
        'Historic Preservation Techniques',
        'Smart Building Retrofits',
        'Green Building Certifications',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1652876256405-3902cc201b22?w=600',
        'https://images.unsplash.com/photo-1756227584303-f1400daaa69d?w=600',
        'https://images.unsplash.com/photo-1710701455648-e85f21bf3a79?w=600',
      ],
      faqs: [
        { q: 'Can you work on occupied buildings?', a: 'Yes, we specialize in phased renovations that allow continued building occupancy.' },
        { q: 'Do you preserve historic features?', a: 'Absolutely. We have expertise in historic preservation and adaptive reuse projects.' },
        { q: 'What about asbestos and hazardous materials?', a: 'We conduct thorough assessments and provide certified abatement services as needed.' },
      ],
    },
    'landscaping': {
      title: 'Landscaping',
      subtitle: 'Professional landscaping services to enhance outdoor spaces',
      description: 'Keep your property looking pristine and vibrant all year round. We provide comprehensive residential and commercial landscape maintenance, including precision lawn mowing, seasonal yard cleanups, expert hedge trimming, and weed control. Let our reliable, detail-oriented crew take the hard work out of yard work so you can simply sit back and enjoy a beautifully manicured lawn.',
      heroImage: 'https://images.unsplash.com/photo-1763405739542-02991ab5416c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwc3Vuc2V0JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzgzMzI5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      process: [
        { step: 'Project Initiation', desc: 'Defining scope, objectives, and success criteria' },
        { step: 'Planning & Scheduling', desc: 'Detailed project plans and resource allocation' },
        { step: 'Procurement', desc: 'Vendor selection and contract management' },
        { step: 'Execution Management', desc: 'Daily coordination and progress monitoring' },
        { step: 'Quality & Safety', desc: 'Quality assurance and safety protocol enforcement' },
        { step: 'Project Closeout', desc: 'Final inspections, documentation, and handover' },
      ],
      technologies: [
        'Primavera P6 Scheduling',
        'Procore Construction Platform',
        'BIM 360 Collaboration',
        'Real-Time Budget Tracking',
        'Mobile Field Reporting',
        'Document Management Systems',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1763405739542-02991ab5416c?w=600',
        'https://images.unsplash.com/photo-1770152626339-f55625a4c141?w=600',
        'https://images.unsplash.com/photo-1764767170557-8a9d4d8c5932?w=600',
      ],
      faqs: [
        { q: 'What is your role as project manager?', a: 'We coordinate all construction activities, manage budgets and schedules, ensure quality, and serve as the single point of contact.' },
        { q: 'How do you control costs?', a: 'Through detailed budgeting, value engineering, competitive procurement, and rigorous change order management.' },
        { q: 'Do you provide progress reports?', a: 'Yes, we provide regular detailed reports including schedules, budgets, and quality metrics.' },
      ],
    },
    'road-infrastructure': {
      title: 'Road & Infrastructure',
      subtitle: 'Building the backbone of modern communities',
      description: 'We specialize in large-scale infrastructure development including highways, roads, bridges, drainage systems, and utilities. Our infrastructure projects connect communities and support economic growth with durable, sustainable solutions.',
      heroImage: 'https://images.unsplash.com/photo-1770152626760-3e9f5c59d71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwc3Vuc2V0JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzgzMzI5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      process: [
        { step: 'Route Planning', desc: 'Alignment design and environmental assessment' },
        { step: 'Earthworks', desc: 'Cut and fill operations, soil stabilization' },
        { step: 'Drainage Systems', desc: 'Storm water management and culvert installation' },
        { step: 'Pavement Construction', desc: 'Base courses and asphalt/concrete paving' },
        { step: 'Utilities Installation', desc: 'Water, sewer, and utility infrastructure' },
        { step: 'Finishing & Safety', desc: 'Road markings, signage, and safety features' },
      ],
      technologies: [
        'GPS-Guided Grading Equipment',
        'Intelligent Compaction Systems',
        'Asphalt Paving Machines',
        'Concrete Batch Plants',
        'Traffic Management Systems',
        'Pavement Testing Equipment',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1770152626760-3e9f5c59d71b?w=600',
        'https://images.unsplash.com/photo-1758127080058-dfe30ed490d9?w=600',
        'https://images.unsplash.com/photo-1763405739542-02991ab5416c?w=600',
      ],
      faqs: [
        { q: 'What types of roads do you build?', a: 'We construct highways, arterial roads, residential streets, rural roads, and specialized industrial access roads.' },
        { q: 'How do you minimize traffic disruption?', a: 'We use phased construction, night work when appropriate, and comprehensive traffic management plans.' },
        { q: 'Do you build bridges?', a: 'Yes, we have extensive experience in bridge construction including concrete, steel, and composite structures.' },
      ],
    },
  };

  const service = serviceData[servicePath];

  if (!service) {
    return (
      <div className="pt-40 pb-20 text-center text-white h-screen bg-[#0D0C0B] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-['Playfair_Display'] mb-4">Service not found</h1>
        <Link to="/services" className="text-[#C9974D] hover:underline font-['Inter']">
          ← Return to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 bg-[#0D0C0B]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-[#0D0C0B]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-50"
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
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#A8A29E] hover:text-[#C9974D] transition-colors mb-6 font-['Inter']"
            >
              ← Back to Services
            </Link>
            <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">Service Detail</span>
            </div>
            <h1 className="font-['Playfair_Display'] font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="font-['Inter'] text-xl text-[#A8A29E] leading-relaxed mb-8">
              {service.subtitle}
            </p>
            <Link
              to={`/projects?category=${encodeURIComponent(categoryMap[servicePath] || 'All')}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9974D] via-[#DEB06A] to-[#B8863C] text-white font-['Inter'] font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C9974D]/25 transition-all duration-300 group"
            >
              View Demo Projects
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-[#141210]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] font-bold text-3xl sm:text-4xl text-white mb-6">
              Detailed Overview
            </h2>
            <p className="font-['Inter'] text-lg text-[#A8A29E] leading-relaxed mb-10">
              {service.description}
            </p>

            {servicePath === 'structure-analysis-and-design' && (
              <div className="mt-8 bg-[#0D0C0B]/90 border border-[#C9974D]/25 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <h3 className="font-['Playfair_Display'] font-bold text-2xl text-white mb-2 text-center">
                  Structural Design & Analysis Framework
                </h3>
                <p className="font-['Inter'] text-sm text-[#A8A29E] text-center mb-8">
                  Core Engineering & Limit State Methodology Workflow
                </p>

                {/* Diagram graphic */}
                <div className="font-mono text-xs sm:text-sm text-[#DEB06A] bg-[#141210] p-6 rounded-xl border border-[#C9974D]/20 overflow-x-auto shadow-inner leading-relaxed">
                  <div className="text-center font-bold text-white mb-4 py-2 bg-[#C9974D]/15 border border-[#C9974D]/30 rounded">
                    STRUCTURAL DESIGN PHASE
                  </div>
                  <div className="text-center text-[#C9974D] my-2 font-bold">▼</div>
                  <div className="text-center font-bold text-white mb-4 py-2.5 bg-[#C9974D]/15 border border-[#C9974D]/30 rounded">
                    LOAD PATH ANALYSIS & VECTOR SUMMATION (ΣF = 0, ΣM = 0)
                  </div>
                  <div className="text-center text-[#C9974D] my-2 font-bold">▼</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-[#0D0C0B] p-4 rounded border border-[#C9974D]/30">
                      <div className="font-bold text-white text-sm border-b border-[#C9974D]/20 pb-2 mb-3">
                        STRENGTH LIMIT STATES (ULS)
                      </div>
                      <ul className="space-y-1.5 text-[#A8A29E] font-sans text-xs sm:text-sm">
                        <li className="flex items-center gap-2"><span className="text-[#C9974D]">•</span> Yield Strength</li>
                        <li className="flex items-center gap-2"><span className="text-[#C9974D]">•</span> Buckling Resistance</li>
                        <li className="flex items-center gap-2"><span className="text-[#C9974D]">•</span> Shear & Flexural Capacity</li>
                      </ul>
                    </div>
                    <div className="bg-[#0D0C0B] p-4 rounded border border-[#C9974D]/30">
                      <div className="font-bold text-white text-sm border-b border-[#C9974D]/20 pb-2 mb-3">
                        SERVICEABILITY LIMIT STATES (SLS)
                      </div>
                      <ul className="space-y-1.5 text-[#A8A29E] font-sans text-xs sm:text-sm">
                        <li className="flex items-center gap-2"><span className="text-[#C9974D]">•</span> Elastic Deflection Limits</li>
                        <li className="flex items-center gap-2"><span className="text-[#C9974D]">•</span> Vibrational Resonance</li>
                        <li className="flex items-center gap-2"><span className="text-[#C9974D]">•</span> Crack Width Controls</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Explanation text */}
                <div className="mt-8 space-y-6 font-['Inter'] text-sm sm:text-base text-[#A8A29E]">
                  <div>
                    <h4 className="font-['Playfair_Display'] font-semibold text-white text-lg mb-2">1. Structural Design Phase</h4>
                    <p className="leading-relaxed">Translating architectural blueprints into rigorous 3D computational structural models, identifying all static, dynamic, wind, and seismic forces acting on the building in compliance with relevant IS codes.</p>
                  </div>
                  <div>
                    <h4 className="font-['Playfair_Display'] font-semibold text-white text-lg mb-2">2. Load Path Analysis & Vector Summation ($\Sigma F = 0, \Sigma M = 0$)</h4>
                    <p className="leading-relaxed">Tracking force transfer through continuous load paths (Slabs $\rightarrow$ Beams $\rightarrow$ Columns $\rightarrow$ Footings $\rightarrow$ Soil) while enforcing strict static equilibrium laws ($\Sigma F = 0, \Sigma M = 0$) to ensure zero net unbalanced forces or rotational moments.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="bg-[#141210] p-5 rounded-xl border border-[#C9974D]/15">
                      <h5 className="font-['Playfair_Display'] font-semibold text-white text-base mb-2">Strength Limit States (ULS)</h5>
                      <p className="text-xs sm:text-sm leading-relaxed text-[#A8A29E]/90">Prevents structural failure and catastrophic collapse. Validates <strong>Yield Strength</strong> under maximum stress, <strong>Buckling Resistance</strong> for tall compression members, and <strong>Shear & Flexural Capacity</strong> against heavy bending and internal forces.</p>
                    </div>
                    <div className="bg-[#141210] p-5 rounded-xl border border-[#C9974D]/15">
                      <h5 className="font-['Playfair_Display'] font-semibold text-white text-base mb-2">Serviceability Limit States (SLS)</h5>
                      <p className="text-xs sm:text-sm leading-relaxed text-[#A8A29E]/90">Ensures long-term asset performance and daily occupant comfort. Controls <strong>Elastic Deflection Limits</strong> to eliminate floor sagging, restricts <strong>Vibrational Resonance</strong>, and strictly manages <strong>Crack Widths</strong> to prevent internal rebar corrosion.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Construction Process Timeline */}
      {/* <section className="py-24 bg-[#0D0C0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">Our Process</span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl text-white mb-4">
              Construction Process
            </h2>
            <p className="font-['Inter'] text-lg text-[#A8A29E] max-w-2xl mx-auto">
              Step-by-step approach to ensure quality and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#141210]/60 backdrop-blur-sm border border-[#C9974D]/12 rounded-xl p-6 hover:border-[#C9974D]/35 hover:bg-[#C9974D]/5 hover:-translate-y-1 shadow-md shadow-black/15 hover:shadow-xl hover:shadow-black/25 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C9974D] to-[#B8863C] rounded-full flex items-center justify-center flex-shrink-0 shadow-md shadow-[#C9974D]/10">
                    <span className="font-['Playfair_Display'] font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="font-['Playfair_Display'] font-semibold text-xl text-white">{step.step}</h3>
                </div>
                <p className="font-['Inter'] text-[#A8A29E] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Equipment & Technology */}
      <section className="py-24 bg-[#141210]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">Technology</span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl text-white mb-4">
              Software and Codes
            </h2>
          </motion.div>

          <div className={`grid grid-cols-1 ${service.technologies.length <= 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
            {service.technologies.map((tech: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#0D0C0B]/60 backdrop-blur-sm border border-[#C9974D]/12 rounded-xl p-6 hover:border-[#C9974D]/35 hover:-translate-y-1 shadow-md shadow-black/15 hover:shadow-xl hover:shadow-black/25 transition-all duration-300 flex items-center gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-[#C9974D] flex-shrink-0" />
                <span className="font-['Inter'] text-white font-medium text-base">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#141210]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#C9974D]/10 border border-[#C9974D]/25 rounded-full mb-6">
              <span className="font-['Inter'] font-semibold text-[#C9974D] text-xs uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {service.faqs.map((faq: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0D0C0B]/60 backdrop-blur-sm border border-[#C9974D]/12 rounded-xl p-6 hover:border-[#C9974D]/35 hover:-translate-y-1 shadow-md shadow-black/15 hover:shadow-xl hover:shadow-black/25 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-[#C9974D] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['Playfair_Display'] font-semibold text-xl text-white mb-2">{faq.q}</h3>
                    <p className="font-['Inter'] text-[#A8A29E]/90">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact */}
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
                Interested in This Service?
              </h2>
              <p className="font-['Inter'] text-xl text-[#A8A29E] mb-8 max-w-2xl mx-auto">
                Contact us to discuss your project requirements and get a detailed proposal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9974D] via-[#DEB06A] to-[#B8863C] text-white font-['Inter'] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#C9974D]/20 transition-all duration-300 group"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to={`/projects?category=${encodeURIComponent(categoryMap[servicePath] || 'All')}`}
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-[#C9974D]/20 text-[#C9974D] font-['Inter'] font-semibold rounded-lg hover:bg-[#C9974D]/10 hover:border-[#C9974D]/40 hover:text-white transition-all"
                >
                  View Demo Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

