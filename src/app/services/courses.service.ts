import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly courses: Course[] = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      level: 'Beginner',
      durationHours: 8,
      description: 'Introduccion a componentes, templates, data binding y routing basico.'
    },
    {
      id: 2,
      title: 'TypeScript for Frontend',
      level: 'Intermediate',
      durationHours: 6,
      description: 'Tipos, interfaces, clases y buenas practicas para proyectos frontend.'
    },
    {
      id: 3,
      title: 'RxJS Essentials',
      level: 'Advanced',
      durationHours: 5,
      description: 'Observables, operators y patrones reactivos en aplicaciones Angular.'
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find((course) => course.id === id);
  }
}