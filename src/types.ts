export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string; // Icon name
  skills: string[];
  activities: string[];
  ageGroup: string;
}

export interface AgeGroup {
  id: string;
  title: string;
  range: string;
  focus: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  technology: string;
  skills: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}
