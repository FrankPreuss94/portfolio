import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})
export class Testimonials {

  testimonials = [
    {
      text: 'I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He\'s super knowledgeable, easy to work with, and I\'d happily work with him again given the chance.',
      author: 'A. Fischer - Team Partner'
    },
    {
      text: 'Our project benefited enormously from Simon efficient way of working.',
      author: 'T. Schulz - Frontend Developer'
    },
    {
      text: 'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'H. Janisch - Team Partner'
    }
  ];

  activeIndex = 0;

  direction: 'next' | 'previous' | null = null;

  isAnimating = false;

  next(): void {
    if (this.isAnimating) {
      return;
    }
    const nextIndex =
      (this.activeIndex + 1) % this.testimonials.length;
    this.startAnimation('next', nextIndex);
  }

  previous(): void {
    if (this.isAnimating) {
      return;
    }
    const previousIndex =
      (this.activeIndex - 1 + this.testimonials.length)
      % this.testimonials.length;
    this.startAnimation('previous', previousIndex);
  }

  goTo(index: number): void {
    if (this.isAnimating) {
      return;
    }
    if (index === this.activeIndex) {
      return;
    }
    const difference =
      (index - this.activeIndex + this.testimonials.length)
      % this.testimonials.length;
    if (difference === 1) {
      this.next();
    } else {
      this.previous();
    }
  }

  private startAnimation(
    direction: 'next' | 'previous',
    targetIndex: number
  ): void {
    this.direction = direction;
    this.isAnimating = true;
    setTimeout(() => {
      this.activeIndex = targetIndex;
      this.direction = null;
      this.isAnimating = false;
    }, 500);
  }

  getPosition(index: number): 'left' | 'center' | 'right' {
    const difference =
      (index - this.activeIndex + this.testimonials.length)
      % this.testimonials.length;
    if (difference === 0) {
      return 'center';
    }
    if (difference === 1) {
      return 'right';
    }
    return 'left';
  }
}