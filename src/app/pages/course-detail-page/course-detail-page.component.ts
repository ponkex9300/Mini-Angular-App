import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail-page.component.html',
  styleUrl: './course-detail-page.component.css'
})
export class CourseDetailPageComponent {
  course?: Course;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly coursesService: CoursesService
  ) {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (!Number.isNaN(id)) {
      this.course = this.coursesService.getCourseById(id);
    }
  }
}