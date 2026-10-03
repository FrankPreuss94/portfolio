import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {

  bannerItems: string[] = [
    'Available for remote work',
    'Frontend Developer',
    'Based in Essen',
    'Open to work'
  ];

  bannerCopies: number[] = [0, 1, 2];
}
