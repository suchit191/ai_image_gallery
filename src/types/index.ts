// src/types/index.ts

export interface Image {
  id: string;
  title: string;
  imageUrl: string;
  generationDate: string;
  aiModel: string;
  tags: string[];
}

export interface ImageData {
  images: Image[];
}