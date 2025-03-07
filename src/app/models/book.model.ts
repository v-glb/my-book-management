export interface Book {
  id: number;
  title: string;
  author: string;
  rating: number;
  notes: string;
  coverUrl?: string; // optional
}
