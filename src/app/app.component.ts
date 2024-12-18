import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { MobileNavOverlayComponent } from './shared/components/mobile-nav-overlay/mobile-nav-overlay.component';
import AOS from 'aos';

/**
 * Root component of the application.
 * Manages global layout, responsive breakpoints, and animations.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MobileNavOverlayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly MOBILE_BREAKPOINT = 480;
  private readonly TABLET_BREAKPOINT = 1024;
  private lastBreakpoint: string;
  isMenuOpen = false;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event) => {
      document.documentElement.lang = event.lang;
    });
    this.lastBreakpoint = this.getCurrentBreakpoint();
  }

  /**
   * Determines the current responsive breakpoint.
   * @returns The current breakpoint ('mobile', 'tablet', or 'desktop').
   */
  private getCurrentBreakpoint(): string {
    const width = window.innerWidth;
    if (width < this.MOBILE_BREAKPOINT) {
      return 'mobile';
    } else if (width < this.TABLET_BREAKPOINT) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  /**
   * Gets the AOS (Animate On Scroll) offset based on the screen width.
   * @returns The appropriate AOS offset value.
   */
  private getAOSOffset(): number {
    const width = window.innerWidth;
    if (width < this.MOBILE_BREAKPOINT) {
      return 50;
    } else if (width < this.TABLET_BREAKPOINT) {
      return 100;
    } else {
      return 200;
    }
  }

  /**
   * Initializes AOS animations when the component is loaded.
   */
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      offset: this.getAOSOffset(),
      startEvent: 'load',
    });
  }

  /**
   * Refreshes AOS animations on window resize if the breakpoint changes.
   */
  @HostListener('window:resize')
  onResize() {
    const currentBreakpoint = this.getCurrentBreakpoint();
    if (currentBreakpoint !== this.lastBreakpoint) {
      AOS.refresh();
      this.lastBreakpoint = currentBreakpoint;
    }
  }

  /**
   * Toggles the state of the mobile navigation menu.
   */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
