export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  bannerColor: string;
  imageLeft: string;
  imageRight?: string;
  link: string;
  leftOffset?: { top: number; left: number };
  rightOffset?: { top: number; left: number };
  details?: {
    overview: string;
    role: string;
    deliverables: string[];
    link?: string;
  };
}

export interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
