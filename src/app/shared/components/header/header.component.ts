import { Component } from '@angular/core';
import { LogoComponent } from '../ui/logo/logo.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,LogoComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) { }


  handleLinkClick(event: MouseEvent) {
    const link = event.target as HTMLElement;
    if (link) {
      link.classList.add('clicked');
      setTimeout(() => {
        link.classList.remove('clicked');
      }, 1000);
    }
  }


  scrollToSection(sectionId: string, event: MouseEvent) {
    if (this.router.url !== '/') {
      this.navigateAndScroll(sectionId);
    } else {
      this.scrollToElement(sectionId);
    }
    this.handleLinkClick(event);
  }

 
  navigateAndScroll(sectionId: string) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToElement(sectionId);
      }, 100);
    });
  }

 
  scrollToElement(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
