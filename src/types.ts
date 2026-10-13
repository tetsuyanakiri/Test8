export type EraType = 'all' | 'sukhothai' | 'ayutthaya' | 'rattanakosin' | 'lanna';

export type CategoryType = 
  | 'performing_arts' 
  | 'culinary' 
  | 'festivals' 
  | 'craftsmanship' 
  | 'architecture';

export interface CulturalArtifact {
  id: string;
  title: string;
  titleEn: string;
  category: CategoryType;
  categoryLabel: string;
  era: 'sukhothai' | 'ayutthaya' | 'rattanakosin' | 'lanna';
  eraLabel: string;
  region: 'ภาคกลาง' | 'ภาคเหนือ' | 'ภาคอีสาน' | 'ภาคใต้';
  badge: string;
  image: string;
  altText: string;
  description: string;
  longDescription: string;
  highlights: {
    label: string;
    value: string;
    icon: string;
  }[];
  provenance: string;
  unescoStatus?: string;
  tags: string[];
}

export interface AudioTrack {
  id: number;
  title: string;
  subtitle: string;
  performer: string;
  recordingYear: string;
  duration: string;
  durationSeconds: number;
  isExclusive: boolean;
  audioQuality: string;
  coverImage?: string;
  description: string;
}

export interface Documentary {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  resolution: string;
  year: string;
  badge: string;
  coverImage: string;
  description: string;
  director: string;
  chapters: { time: string; title: string }[];
  isExclusive: boolean;
}

export interface ResearchArticle {
  id: string;
  title: string;
  author: string;
  dateAgo: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  citations: string[];
}

export interface ApiEndpoint {
  method: 'GET' | 'POST';
  path: string;
  description: string;
  parameters: { name: string; type: string; required: boolean; description: string }[];
  sampleResponse: Record<string, any>;
}
