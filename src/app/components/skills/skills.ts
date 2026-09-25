import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  skills = [
    {
      name: "HTML",
      src: "./assets/images/tech_icons/HTML.png"
    },
    {
      name: "CSS",
      src: "./assets/images/tech_icons/CSS.png"
    },
    {
      name: "JavaScript",
      src: "./assets/images/tech_icons/JavaScript.png"
    },
    {
      name: "Material Design",
      src: "./assets/images/tech_icons/MaterialDesign.png"
    },
    {
      name: "TypeScript",
      src: "./assets/images/tech_icons/TypeScript.png"
    },
    {
      name: "Angular",
      src: "./assets/images/tech_icons/Angular.png"
    },
    {
      name: "Supabase",
      src: "./assets/images/tech_icons/Supabase.png"
    },
    {
      name: "Git",
      src: "./assets/images/tech_icons/Git.png"
    },
    {
      name: "REST-API",
      src: "./assets/images/tech_icons/Rest-Api.png"
    },
    {
      name: "Scrum",
      src: "./assets/images/tech_icons/Scrum.png"
    },
    {
      name: "Growth mindset",
      src: "./assets/images/tech_icons/GrowthMindset.png"
    },



  ]


}
