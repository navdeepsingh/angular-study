import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: "courses",
    templateUrl: './courses.component.html',
    providers: [CoursesService]
})

export class CoursesComponent {
    title = "List of Courses";
    courses;

    constructor() {
        let services = new CoursesService;
        this.courses = services.getCourses()
    }
}