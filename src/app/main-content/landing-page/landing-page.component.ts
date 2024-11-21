import { Component } from '@angular/core';
import { SocialLinksComponent } from '../../shared/components/ui/social-links/social-links.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
