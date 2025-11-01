export interface ProjectLink {
  name: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // URL or path to project image
  date: string; // Format: "10.01.24"
  category: string; // Should match a category ID
  links: ProjectLink[]; // e.g., [{ name: "GitHub", url: "..." }, { name: "Website", url: "..." }]
  tags?: string[]; // Optional additional tags
}

export interface Category {
  id: string;
  name: string;
  icon: string; // Lucide icon name or custom icon path
  color: string; // Hex color for the category
  description?: string;
}

export interface ScrollState {
  showHeader: boolean;
  activeSection: 'hero' | 'projects' | 'contact';
  scrollY: number;
}

export interface CursorPosition {
  x: number;
  y: number;
}