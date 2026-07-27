import { TrendingUp, Building2, Award, Cuboid, Trees, MapPin, LucideIcon } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  link: string;
}

export const servicesData: ServiceData[] = [
  {
    id: 'structure-analysis-and-design',
    title: 'Structural Analysis & Design',
    description: 'Before anything gets built, we run the numbers - load calculations, foundation depth, reinforcement - the essential groundwork that decides whether a building stands strong for decades or develops problems in five years.',
    icon: TrendingUp,
    category: 'Structural Analysis & Design',
    link: '/services/structure-analysis-and-design',
  },
  {
    id: 'construction',
    title: 'Construction',
    description: "From breaking ground to final finishing, we're on-site managing the actual build - not handing it off and hoping for the best.",
    icon: Building2,
    category: 'Construction',
    link: '/services/construction',
  },
  {
    id: 'architecture-planning',
    title: 'Architecture Planning',
    description: "Good layouts start with how people actually use a space, not just how it looks on paper. We plan around your plot, your budget, and how you'll really use the building.",
    icon: Award,
    category: 'Architecture Planning',
    link: '/services/architecture-planning',
  },
  {
    id: '3d-interior-and-exterior',
    title: '3D Interior & Exterior Design',
    description: "See your space before it's built. We put together 3D visuals of interiors and exteriors so you're not guessing what the finished result will look like.",
    icon: Cuboid,
    category: '3D Interior & Exterior Design',
    link: '/services/3d-interior-and-exterior',
  },
  {
    id: 'landscaping',
    title: 'Landscaping',
    description: "The property doesn't end at the front door. We plan the outdoor spaces too, so the finished result feels complete, not like an afterthought.",
    icon: Trees,
    category: 'Landscaping',
    link: '/services/landscaping',
  },
  {
    id: 'surveying',
    title: 'Surveying',
    description: 'Land surveys done right the first time - measurements and documentation accurate enough to hold up through approvals, including work completed for government projects.',
    icon: MapPin,
    category: 'Surveying',
    link: '/services/surveying',
  },
];
