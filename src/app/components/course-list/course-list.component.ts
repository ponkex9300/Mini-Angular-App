import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
  @Output() courseSelected = new EventEmitter<number>();

  onSelectCourse(courseId: number): void {
    this.courseSelected.emit(courseId);
  }
}