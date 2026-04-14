import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseListComponent } from '../../components/course-list/course-list.component';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-page',
  standalone: true,
  imports: [CourseListComponent],
  templateUrl: './courses-page.component.html'
})
export class CoursesPageComponent {
  courses: Course[] = [];

  constructor(
    private readonly coursesService: CoursesService,
    private readonly router: Router
  ) {
    this.courses = this.coursesService.getCourses();
  }

  goToCourseDetail(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }
}