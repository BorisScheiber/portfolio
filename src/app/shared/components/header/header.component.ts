import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
