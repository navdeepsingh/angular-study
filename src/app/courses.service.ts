import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  getCourses() {
    return ["Course Title 1","Course Title 2","Course Title 3"]
  }
}
