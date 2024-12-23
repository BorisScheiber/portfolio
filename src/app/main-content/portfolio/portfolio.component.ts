import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

/**
 * Interface representing a portfolio project.
 */
interface Project {
  title: string;
  technologies: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  isReverse?: boolean;
}

/**
 * Portfolio component displaying a list of projects with details.
 * Supports responsive view detection and animations refresh.
 */
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  private lastViewState: boolean;

  projects: Project[] = [
    {
      title: 'Join',
      technologies: 'Javascript | HTML | CSS | Firebase',
      description: 'portfolio.projects.join.description',
      image: '/assets/img/joinlaptop.png',
      liveLink: 'https://join.boris-scheiber.at',
      githubLink: 'https://github.com/BorisScheiber/join-294',
    },
    {
      title: 'El Pollo Loco',
      technologies: 'Javascript | HTML | CSS',
      description: 'portfolio.projects.elPolloLoco.description',
      image: '/assets/img/elpollolocolaptop.png',
      liveLink: 'https://el-pollo-loco.boris-scheiber.at',
      githubLink: 'https://github.com/BorisScheiber/el-pollo-loco',
      isReverse: true,
    },
    {
      title: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS | API',
      description: 'portfolio.projects.pokedex.description',
      image: '/assets/img/pokedexlaptop.png',
      liveLink: 'https://pokedex.boris-scheiber.at',
      githubLink: 'https://github.com/BorisScheiber/pokedex',
    },
  ];

  constructor() {
    this.lastViewState = this.isMobileView();
  }

  /**
   * Determines if the current view is in mobile mode.
   * @returns True if the view width is less than 1150px, otherwise false.
   */
  isMobileView(): boolean {
    return window.innerWidth < 1150;
  }

  /**
   * Listens to window resize events and refreshes animations if the view state changes.
   */
  @HostListener('window:resize')
  onResize() {
    const currentViewState = this.isMobileView();
    if (currentViewState !== this.lastViewState) {
      AOS.refresh();
      this.lastViewState = currentViewState;
    }
  }
}
