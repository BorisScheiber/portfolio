import { Component, Input } from '@angular/core';

/**
 * Component for displaying social media links.
 * Allows customization of spacing between links.
 */
@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
})
export class SocialLinksComponent {
  /** Spacing (in pixels) between the social media links. Default is 32px. */
  @Input() gap: number = 32;
}
