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
import hjdr01 from '../../assets/design-concepts/image.png';
import hjdr02 from '../../assets/design-concepts/View_1.jpg.jpeg';
import hjdr03 from '../../assets/design-concepts/View_2.jpg (1).jpeg';
import hjdc01 from '../../assets/construction/WhatsApp Image 2026-08-24 at 18.53.41.jpeg';
import hjdc02 from '../../assets/construction/WhatsApp Image 2026-08-24 at 18.53.41 (1).jpeg';
import hjdc03 from '../../assets/construction/WhatsApp Image 2026-08-24 at 18.53.42.jpeg';
import hjdc04 from '../../assets/construction/WhatsApp Image 2026-08-24 at 18.53.42 (1).jpeg';
import hjdc05 from '../../assets/construction/WhatsApp Image 2026-08-24 at 18.53.43.jpeg';
import pb01 from '../../assets/construction/WhatsApp Image 2026-08-24 at 18.52.12.jpeg';
import pb02 from '../../assets/construction/WhatsApp Image 2026-08-24 at 18.52.12 (1).jpeg';
import pb03 from '../../assets/construction/WhatsApp Image 2026-08-24 at 18.52.13.jpeg';
import pb04 from '../../assets/construction/WhatsApp Image 2026-08-24 at 18.52.13 (1).jpeg';
import pb05 from '../../assets/construction/WhatsApp Image 2026-08-24 at 18.52.13 (2).jpeg';
import pb06 from '../../assets/construction/WhatsApp Image 2026-08-31 at 14.53.01.jpeg';
import pb07 from '../../assets/construction/WhatsApp Image 2026-08-31 at 14.53.02.jpeg';
import gym01 from '../../assets/3D_interiror_and_design/WhatsApp Image 2026-08-30 at 15.02.56.jpeg';
import gym02 from '../../assets/3D_interiror_and_design/WhatsApp Image 2026-08-30 at 15.02.57.jpeg';
import gym03 from '../../assets/3D_interiror_and_design/WhatsApp Image 2026-08-30 at 15.02.58.jpeg';
import gym04 from '../../assets/3D_interiror_and_design/WhatsApp Image 2026-08-30 at 15.02.58 (1).jpeg';
import gym05 from '../../assets/3D_interiror_and_design/WhatsApp Image 2026-08-30 at 15.02.59.jpeg';
import gym06 from '../../assets/3D_interiror_and_design/WhatsApp Image 2026-08-30 at 15.02.59 (1).jpeg';
import hjdrint01 from '../../assets/3D_interiror_and_design/WhatsApp Image 2026-08-24 at 18.52.17.jpeg';
import hjdrint02 from '../../assets/3D_interiror_and_design/WhatsApp Image 2026-08-24 at 18.52.18.jpeg';
import hjdrint03 from '../../assets/3D_interiror_and_design/WhatsApp Image 2026-08-24 at 18.52.19.jpeg';
import hjdrint04 from '../../assets/3D_interiror_and_design/WhatsApp Image 2026-08-24 at 18.52.20.jpeg';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  images: string[];
  description: string;
}

export const CATEGORIES = [
  'All',
  'Structural Analysis & Design',
  'Construction',
  'Architecture Planning',
  '3D Interior & Exterior Design',
  'Landscaping',
  'Surveying',
] as const;

export type Category = (typeof CATEGORIES)[number];

export const projectsData: ProjectItem[] = [
  {
    id: 'hjdrint-01',
    title: 'Hotel Jageshwar Dham & Restaurant',
    category: '3D Interior & Exterior Design',
    location: 'Haldwani',
    year: '2026',
    images: [hjdrint01, hjdrint02, hjdrint03, hjdrint04],
    description: 'Stunning 3D interior design renders for Hotel Jageshwar Dham & Restaurant — showcasing luxurious room layouts, warm ambience, and premium hospitality interiors.',
  },
  {
    id: 'gym-01',
    title: 'Gym Interior Design',
    category: '3D Interior & Exterior Design',
    location: 'Haldwani',
    year: '2026',
    images: [gym01, gym02, gym03, gym04, gym05, gym06],
    description: 'A modern gym interior featuring premium equipment layout, dynamic lighting, and energetic design — crafted to inspire peak performance.',
  },
  {
    id: 'hjdc-01',
    title: 'Hotel Jageshwar Dham & Restaurant',
    category: 'Construction',
    location: 'Haldwani',
    year: '2026',
    images: [hjdc01, hjdc02, hjdc03, hjdc04, hjdc05],
    description: 'On-site construction progress of Hotel Jageshwar Dham & Restaurant — a premium multi-storey hospitality complex built with precision and quality craftsmanship.',
  },
  {
    id: 'pb-01',
    title: 'Pant Bhawan',
    category: 'Construction',
    location: 'Rampur Road, Near Panchayat Ghar',
    year: '2026',
    images: [pb01, pb02, pb03, pb04, pb05, pb06, pb07],
    description: 'Construction progress of Pant Bhawan — a well-planned residential building on Rampur Road, near Panchayat Ghar, built with quality construction practices.',
  },
  {
    id: 'hjdr-01',
    title: 'Hotel Jageshwar Dham & Restaurant',
    category: 'Architecture Planning',
    location: 'Haldwani',
    year: '2026',
    images: [hjdr01, hjdr02, hjdr03],
    description: 'A premium multi-storey hotel and restaurant complex featuring elegant balconies, warm ambient lighting, and modern hospitality architecture set amidst lush greenery.',
  },
  {
    id: 'dc-01',
    title: 'Hillside Residential Villa',
    category: 'Architecture Planning',
    location: 'Haldwani',
    year: '2026',
    images: [dc01, dc02],
    description: 'A beautiful hillside elevation concept for a modern residential villa. Features elegant stone-facade design blending traditional materials with contemporary lines.',
  },
  {
    id: 'dc-03',
    title: 'Modern Residential Elevation',
    category: 'Architecture Planning',
    location: 'Haldwani',
    year: '2026',
    images: [dc03],
    description: 'Clean, modern residential elevation emphasizing natural light and open space.',
  },
  {
    id: 'dc-04',
    title: 'Two story modern villa with car porch',
    category: 'Architecture Planning',
    location: 'Haldwani',
    year: '2026',
    images: [dc04, dc10],
    description: 'A modern two-story home featuring clean lines, a flat roof, and an integrated car porch.',
  },
  {
    id: 'dc-05',
    title: 'Two-Story Villa Concept',
    category: 'Architecture and Design',
    location: 'Haldwani',
    year: '2026',
    images: [dc05],
    description: 'Spacious two-story family villa designed for comfortable modern living.',
  },
  {
    id: 'dc-06',
    title: 'Triplex Villa Complex',
    category: 'Architecture Planning',
    location: 'Haldwani',
    year: '2026',
    images: [dc06],
    description: 'Multi-family triplex villa complex offering privacy and community.',
  },
  {
    id: 'dc-07',
    title: 'Mixed-Use Apartment & Retail Complex',
    category: 'Architecture Planning',
    location: 'Haldwani',
    year: '2026',
    images: [dc07],
    description: 'Versatile mixed-use building combining ground-floor retail with residential apartments.',
  },
  {
    id: 'dc-08',
    title: 'Twin Villa Compound',
    category: 'Architecture Planning',
    location: 'Haldwani',
    year: '2026',
    images: [dc08],
    description: 'Symmetrical twin villa compound designed for extended families.',
  }
];
