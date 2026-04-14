import { Routes } from '@angular/router';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'courses' },
	{ path: 'courses', component: CoursesPageComponent },
	{ path: 'courses/:id', component: CourseDetailPageComponent },
	{ path: '**', redirectTo: 'courses' }
];
