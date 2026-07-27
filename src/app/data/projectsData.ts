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

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
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
    id: 'dc-01',
    title: 'Hillside Residential Villa',
    category: 'Architecture Planning',
    location: 'Haldwani',
    year: '2026',
    image: dc01,
    description: 'A beautiful hillside elevation concept for a modern residential villa.',
  },
  {
    id: 'dc-02',
    title: 'Stone-Facade Residential Villa',
    category: 'Architecture Planning',
    location: 'Haldwani',
    year: '2026',
    image: dc02,
    description: 'Elegant stone-facade design blending traditional materials with contemporary lines.',
  },
  {
    id: 'dc-03',
    title: 'Modern Residential Elevation',
    category: '3D Interior & Exterior Design',
    location: 'Haldwani',
    year: '2026',
    image: dc03,
    description: 'Clean, modern residential elevation emphasizing natural light and open space.',
  },
  {
    id: 'dc-04',
    title: 'Contemporary Villa Design',
    category: 'Architecture Planning',
    location: 'Haldwani',
    year: '2026',
    image: dc04,
    description: 'Striking contemporary villa concept with bold architectural features.',
  },
  {
    id: 'dc-05',
    title: 'Two-Story Villa Concept',
    category: '3D Interior & Exterior Design',
    location: 'Haldwani',
    year: '2026',
    image: dc05,
    description: 'Spacious two-story family villa designed for comfortable modern living.',
  },
  {
    id: 'dc-06',
    title: 'Triplex Villa Complex',
    category: 'Construction',
    location: 'Haldwani',
    year: '2026',
    image: dc06,
    description: 'Multi-family triplex villa complex offering privacy and community.',
  },
  {
    id: 'dc-07',
    title: 'Mixed-Use Apartment & Retail Complex',
    category: 'Construction',
    location: 'Haldwani',
    year: '2026',
    image: dc07,
    description: 'Versatile mixed-use building combining ground-floor retail with residential apartments.',
  },
  {
    id: 'dc-08',
    title: 'Twin Villa Compound',
    category: 'Landscaping',
    location: 'Haldwani',
    year: '2026',
    image: dc08,
    description: 'Symmetrical twin villa compound designed for extended families.',
  },
  {
    id: 'dc-09',
    title: 'Modern Villa - Night Elevation',
    category: '3D Interior & Exterior Design',
    location: 'Haldwani',
    year: '2026',
    image: dc09,
    description: 'Atmospheric night rendering of a modern villa showcasing exterior lighting design.',
  },
  {
    id: 'dc-10',
    title: 'Two-Story Home with Car Porch',
    category: 'Architecture Planning',
    location: 'Haldwani',
    year: '2026',
    image: dc10,
    description: 'Practical and stylish two-story home featuring an integrated car porch.',
  },
];
