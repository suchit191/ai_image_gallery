import { AIModel, Image } from './types';

export const aiModels: AIModel[] = [
  'Stable Diffusion',
  'DALL-E',
  'Midjourney',
  'GPT-4V'
];

export const sampleImages: Image[] = [
  {
    id: "1",
    title: "Abstract Landscape",
    imageUrl: "/api/placeholder/400/300",
    generationDate: "2025-01-26T10:30:00Z",
    aiModel: "Stable Diffusion",
    tags: ["landscape", "abstract"]
  },
  {
    id: "2",
    title: "Digital Portrait",
    imageUrl: "/api/placeholder/400/300",
    generationDate: "2025-01-26T11:30:00Z",
    aiModel: "DALL-E",
    tags: ["portrait", "digital"]
  },
  {
    id: "3",
    title: "Futuristic City",
    imageUrl: "/api/placeholder/400/300",
    generationDate: "2025-01-26T12:30:00Z",
    aiModel: "Midjourney",
    tags: ["city", "futuristic"]
  },
  {
    id: "4",
    title: "Nature Scene",
    imageUrl: "/api/placeholder/400/300",
    generationDate: "2025-01-26T13:30:00Z",
    aiModel: "GPT-4V",
    tags: ["nature", "landscape"]
  }
];