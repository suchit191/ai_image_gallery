export type AIModel = 'Stable Diffusion' | 'DALL-E' | 'Midjourney' | 'GPT-4V';

export interface Image {
  id: string;
  title: string;
  imageUrl: string;
  generationDate: string;
  aiModel: AIModel;
  tags: string[];
}