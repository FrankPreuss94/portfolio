import { Component, HostListener } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {

  menuOpen = false;
  headerScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    const hero = document.querySelector('.hero');
    if (!hero) {
      return;
    }
    this.headerScrolled = window.scrollY >= hero.clientHeight;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      this.menuOpen &&
      !target.closest('.mobile_nav') &&
      !target.closest('.menu_button')) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
