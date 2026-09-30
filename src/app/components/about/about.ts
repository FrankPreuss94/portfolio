import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {

  patternVisible = false;

  showPattern() {
    this.patternVisible = true;
  }
}
