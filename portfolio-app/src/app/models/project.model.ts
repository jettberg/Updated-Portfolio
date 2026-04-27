export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}