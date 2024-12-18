import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Logo component that displays the application's logo and handles navigation interactions.
 */
@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  /** The font size of the logo text. Default is '32px'. */
  @Input() fontSize: string = '32px';

  /** The minimum width of the logo element. Default is '145px'. */
  @Input() minWidth: string = '145px';

  /** Indicates whether the mobile menu is open. */
  @Input() isMenuOpen = false;

  /** Emits an event to close the menu. */
  @Output() closeMenu = new EventEmitter<void>();

  constructor(private router: Router) {}

  /**
   * Handles click events on the logo.
   * If the user is not on the homepage, navigates to the homepage and scrolls to the top.
   * If already on the homepage, scrolls to the top immediately.
   * Closes the mobile menu if it is open.
   */
  handleLogoClick() {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToTop();
        }, 100);
      });
    } else {
      this.scrollToTop();
    }

    if (this.isMenuOpen) {
      this.closeMenu.emit();
    }
  }

  /**
   * Scrolls the page to the top immediately.
   */
  private scrollToTop(): void {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
