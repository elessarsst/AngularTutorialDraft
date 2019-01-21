import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses = [];
  viewMode = 'map';
  task = {
    title: 'task1',
    asignee: {
      name: 'John'
    }
  };
  onAdd() {

    this.courses.push({ id: (this.courses.length + 1), name: 'course ' + (this.courses.length + 1)});
  }

  onRemove(course) {
    const index = this.courses.indexOf(course)
    this.courses.splice(index, 1);
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course 1'},
      { id: 1, name: 'course 2'},
      { id: 1, name: 'course 3'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
