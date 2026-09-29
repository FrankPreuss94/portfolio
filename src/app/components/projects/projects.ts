import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {

  projectList = [
    {
      projectName: "Join",
      previewImg: "./assets/images/projects/join.png",
      tech: [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS",
        "Firebase",
      ]
    },
    {
      projectName: "El Pollo Loco",
      previewImg: "./assets/images/projects/el_pollo_loco.png",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
      ]
    }
  ]


}
