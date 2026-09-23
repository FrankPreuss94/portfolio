import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';

@Component({
  imports: [RouterOutlet, Header, Hero, About],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
}
