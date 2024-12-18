import { Component } from '@angular/core';
import { LogoComponent } from '../ui/logo/logo.component';
import { SocialLinksComponent } from '../ui/social-links/social-links.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Footer component of the application.
 * Displays the logo, social links, and navigation links.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, LogoComponent, SocialLinksComponent, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
