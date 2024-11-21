import { Component } from '@angular/core';
import { LogoComponent } from '../ui/logo/logo.component';
import { SocialLinksComponent } from '../ui/social-links/social-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
