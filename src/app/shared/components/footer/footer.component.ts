import { Component } from '@angular/core';
import { LogoComponent } from '../ui/logo/logo.component';
import { SocialLinksComponent } from '../ui/social-links/social-links.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule,LogoComponent, SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
