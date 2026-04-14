export interface Course {
  id: number;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  durationHours: number;
  description: string;
}