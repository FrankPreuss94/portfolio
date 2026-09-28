import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';

@Component({
  imports: [RouterOutlet, Header, Hero, About, Skills, Projects, Testimonials, Contact],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
}
