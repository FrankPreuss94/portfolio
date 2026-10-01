import { Component } from '@angular/core';

interface Project {
  id: number;
  projectName: string;
  previewImg: string;
  description: string;
  tech: string[];
  github: string;
  liveTest: string;
}


@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {

  selectedProject: Project | null = null;

  projectList: Project[] = [
    {
      id: 1,
      projectName: "Join",
      previewImg: "./assets/images/projects/join.png",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      tech: [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS",
        "Firebase",
      ],
      github: "",
      liveTest: "",
    },
    {
      id: 2,
      projectName: "El Pollo Loco",
      previewImg: "./assets/images/projects/el_pollo_loco.png",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github: "",
      liveTest: "",
    }
  ]

  openDialog(project: Project) {
    this.selectedProject = project;
  }


}
