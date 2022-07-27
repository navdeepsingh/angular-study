import { Component } from "@angular/core";

@Component({
    selector: "courses",
    templateUrl: './courses.component.html'
})

export class CoursesComponent {
    title = "List of Courses";
    courses = ["course1", "course2", "course3"]
}