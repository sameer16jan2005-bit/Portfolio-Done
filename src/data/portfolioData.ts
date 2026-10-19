import { Project, ProcessStep, SocialLink } from '../types';

export const projectsData: Project[] = [
  {
    id: 'master-crafted-windows',
    title: 'MASTER CRAFTED & WINDOWS.',
    description: 'A high-contrast, modern landing page designed for an architectural glazing and premium window manufacturing brand.',
    tags: ['UI/UX', 'Website', 'Design'],
    bannerColor: '#f3e7bf',
    imageLeft: '/ambika-top.png',
    imageRight: '/ambika-bottom.png',
    link: 'https://www.behance.net/gallery/256240995/Ambika-Glass-Works',
    details: {
      overview: 'High-contrast, modern landing page designed for an architectural glazing and premium window manufacturing brand (Ambika Glass Works). Features yellow bold brand identity, showcase gallery of completed architectural works, and contact inquiry portal.',
      role: 'UI/UX Designer',
      deliverables: ['Website Concept', 'Design System', 'Responsive Layout', 'Showcase Grid']
    }
  },
  {
    id: 'nike-feel-every-step',
    title: 'NIKE FEEL EVERY STEP.',
    description: 'A modern, high-conversion moblie storefront concept designed to streamline product discovery and enhance visual browsing for footwear enthuasiasts.',
    tags: ['UI/UX', 'Mobile', 'Design'],
    bannerColor: '#5d5d5d',
    imageLeft: '/nike-top.png',
    imageRight: '/nike-bottom.png',
    link: 'https://www.behance.net/gallery/256241559/NikeClone/modules/1494084279',
    details: {
      overview: 'A modern, high-conversion mobile storefront concept designed to streamline product discovery and enhance visual browsing for footwear enthusiasts with category quick-filters, Ava Rover product showcase, and discount promotions.',
      role: 'Mobile UI/UX Designer',
      deliverables: ['Mobile E-Commerce Flow', 'Product Discovery System', 'High-Converting Checkout UI']
    }
  },
  {
    id: 'trova-find-your-next-hike',
    title: 'Trova Find Your Next Hike',
    description: 'Trova is a hiking agency built for people who wantto go further. Small groups, expert local guidesand routes most people never find on their own.',
    tags: ['UI/UX', 'Website', 'Design'],
    bannerColor: '#204333',
    imageLeft: '/trova-top.png',
    imageRight: '/trova-mountain.png',
    link: 'https://www.behance.net/gallery/256242665/Trova-clone',
    details: {
      overview: 'Trova is a hiking agency built for people who want to go further. Small groups, expert local guides, and routes most people never find on their own. Designed with deep forest green tones, scenic photography, and expedition itinerary planning.',
      role: 'UI/UX Designer',
      deliverables: ['Adventure Booking Experience', 'Route Explorer UI', 'Interactive Map Details']
    }
  },
  {
    id: 'where-lasting-change-brgins',
    title: 'Where lasting change brgins.',
    description: 'This project is end to end design clone of modern wellness coaching website, undertaken to study effective layout strategy.',
    tags: ['UI/UX', 'Website', 'Design'],
    bannerColor: '#ecc387',
    imageLeft: '/wellness-top.png',
    imageRight: '/wellness-bottom.png',
    link: 'https://www.behance.net/gallery/256242949/wellness',
    details: {
      overview: 'End-to-end design clone of modern wellness coaching website, undertaken to study effective layout strategy, testimonial placement, subscription pricing tiers, and trust-building patient onboarding.',
      role: 'UI/UX Designer',
      deliverables: ['Layout Strategy Analysis', 'Typography Hierarchy System', 'Conversion Flow Study']
    }
  }
];

export const processStepsData: ProcessStep[] = [
  {
    id: 1,
    title: 'Research & Ideation',
    subtitle: 'Understanding user needs, market gaps, and defining the core creative strategy.',
    icon: '/process-idea.svg'
  },
  {
    id: 2,
    title: 'Design & Wireframing',
    subtitle: 'Crafting clean wireframes, visual systems, and high-fidelity component layouts.',
    icon: '/process-design.svg'
  },
  {
    id: 3,
    title: 'Prototyping & Development',
    subtitle: 'Turning static designs into fluid, responsive, code-ready interactive experiences.',
    icon: '/process-code.svg'
  },
  {
    id: 4,
    title: 'Testing & Delivery',
    subtitle: 'Ensuring pixel-perfection, accessibility, responsiveness, and seamless delivery.',
    icon: '/process-delivery.svg'
  }
];

export const socialLinksData: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sameer-chauhan-a89763292?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: '/linkedin.svg'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/sameerrr__1016c?stkn=MmZ4YTZueDcxa2Ny',
    icon: '/instagram.svg'
  },
  {
    name: 'Figma',
    url: 'https://www.figma.com/@sameer_8f45ca1c',
    icon: '/figma.svg'
  }
];
