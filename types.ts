export enum ProjectCategory {
  TwoD = '2D',
  MG = 'Motion Graphic',
  ThreeD = '3D',
  Practice = 'Practice',
  Web = 'Web Design'
}

export interface ProjectItem {
  id: string;
  category: ProjectCategory;
  title: string;
  client?: string;
  description: string;
  longDescription?: string; // For detailed modal text
  imageUrl: string; // Main cover image
  year?: string;
  videoUrl?: string;
  videoUrls?: string[]; // Multiple videos support
  detailImages?: string[]; // Additional gallery images
}