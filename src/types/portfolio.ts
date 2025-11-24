export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  isButton?: boolean;
}

export interface HeroProps {
  greeting: string;
  name: string;
  description: string;
  cvButtonLabel: string;
}

export interface ProjectItem {
  title: string;
  description: string;
}

export interface ProjectProps {
  title?: string;
  introduction: string;
  projects: ProjectItem[];
}

export interface WorkExperience {
  jobTitle: string;
  company: string;
  duration: string;
  summary: string;
  achievements: string[];
}

export interface TimelineProps {
  title?: string;
  experiences: WorkExperience[];
}

export interface ContactProps {
  title?: string;
  introduction?: string;
  email: string;
  linkedin: string;
  github: string;
}
