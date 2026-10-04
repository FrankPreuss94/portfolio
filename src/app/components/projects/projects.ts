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
      github: "https://github.com/FrankPreuss94/El_pollo_loco",
      liveTest: "https://frankpreuss.developerakademie.net/El_pollo_loco/index.html",
    }
  ]

  openDialog(project: Project) {
    this.selectedProject = project;
    document.body.classList.add('dialog-open');
  }

  closeDialog() {
    document.body.classList.remove('dialog-open');
  }

  nextProject() {
    const currentProject = this.projectList.findIndex(
      project => project.id === this.selectedProject!.id
    );

    const nextProject = (currentProject + 1) % this.projectList.length;

    this.selectedProject = this.projectList[nextProject];
  }

}
