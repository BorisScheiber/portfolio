import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitchComponent } from '../ui/language-switch/language-switch.component';
import { animate, style, transition, trigger } from '@angular/animations';

/**
 * Mobile navigation overlay component.
 * Displays a sliding menu for mobile devices and handles navigation and state changes.
 */
@Component({
  selector: 'app-mobile-nav-overlay',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    LanguageSwitchComponent,
  ],
  templateUrl: './mobile-nav-overlay.component.html',
  styleUrl: './mobile-nav-overlay.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class MobileNavOverlayComponent implements OnChanges {
  /** Indicates whether the mobile menu is open. */
  @Input() isMenuOpen = false;

  /** Emits an event to close the overlay. */
  @Output() closeOverlay = new EventEmitter<void>();

  constructor(private router: Router) {}

  /**
   * Handles window resize events.
   * Closes the overlay if the window width exceeds 900px and the menu is open.
   */
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 900 && this.isMenuOpen) {
      this.closeOverlay.emit();
    }
  }

  /**
   * Handles changes to input properties.
   * Toggles the body overflow style based on the menu state.
   * @param changes The changes to the input properties.
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['isMenuOpen']) {
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
    }
  }

  /**
   * Navigates to a specific section on the homepage and closes the overlay.
   * @param sectionId The ID of the section to scroll to.
   */
  mobileNavigateTo(sectionId: string) {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement(sectionId);
        }, 100);
      });
    } else {
      this.scrollToElement(sectionId);
    }
    this.closeOverlay.emit();
  }

  /**
   * Scrolls to a specific element on the page.
   * @param sectionId The ID of the element to scroll to.
   */
  private scrollToElement(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
