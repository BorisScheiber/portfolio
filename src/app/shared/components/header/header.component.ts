import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  handleLinkClick(event: MouseEvent) {
    const link = event.target as HTMLElement;
    if (link) {
      link.classList.add('clicked');
      setTimeout(() => {
        link.classList.remove('clicked');
      }, 1000);
    }
  }




}
