import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogoComponent } from '../ui/logo/logo.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageSwitchComponent } from '../ui/language-switch/language-switch.component';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Header component of the application.
 * Displays the logo, language switcher, and handles navigation and menu interactions.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    LanguageSwitchComponent,
    RouterModule,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  /** Indicates whether the mobile menu is open. */
  @Input() isMenuOpen = false;

  /** Emits an event to toggle the mobile menu. */
  @Output() toggleMenuEvent = new EventEmitter<void>();

  constructor(private router: Router) {}

  /**
   * Toggles the state of the mobile menu.
   */
  toggleMenu() {
    this.toggleMenuEvent.emit();
  }

  /**
   * Handles link clicks by adding and removing a temporary "clicked" class.
   * @param event The mouse event triggered by the link click.
   */
  handleLinkClick(event: MouseEvent) {
    const link = event.target as HTMLElement;
    if (link) {
      link.classList.add('clicked');
      setTimeout(() => {
        link.classList.remove('clicked');
      }, 1000);
    }
  }

  /**
   * Scrolls to a specific section or navigates to the homepage and then scrolls.
   * @param sectionId The ID of the section to scroll to.
   * @param event The mouse event triggered by the click.
   */
  scrollToSection(sectionId: string, event: MouseEvent) {
    if (this.router.url !== '/') {
      this.navigateAndScroll(sectionId);
    } else {
      this.scrollToElement(sectionId);
    }
    this.handleLinkClick(event);
  }

  /**
   * Navigates to the homepage and scrolls to a specific section.
   * @param sectionId The ID of the section to scroll to.
   */
  navigateAndScroll(sectionId: string) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToElement(sectionId);
      }, 100);
    });
  }

  /**
   * Scrolls to a specific element by its ID.
   * @param sectionId The ID of the element to scroll to.
   */
  scrollToElement(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
    }
  }
}
