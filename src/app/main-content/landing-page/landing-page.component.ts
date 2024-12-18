import { Component } from '@angular/core';
import { SocialLinksComponent } from '../../shared/components/ui/social-links/social-links.component';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Landing page component that serves as the entry point of the application.
 * Displays social links and supports translations.
 */
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [SocialLinksComponent, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
