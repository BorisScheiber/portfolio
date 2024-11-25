import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  title: string;
  technologies: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  isReverse?: boolean;
 }

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Join',
      technologies: 'Javascript | HTML | CSS | Firebase',
      description: 'portfolio.projects.join.description',
      image: '/assets/img/joinlaptop.png',
      liveLink: '#',
      githubLink: 'https://github.com/BorisScheiber/join-294'
    },
    {
      title: 'El Pollo Loco',
      technologies: 'Javascript | HTML | CSS',
      description: 'portfolio.projects.elPolloLoco.description',
      image: '/assets/img/elpollolocolaptop.png',
      liveLink: '#',
      githubLink: 'https://github.com/BorisScheiber/el-pollo-loco',
      isReverse: true
    },
    {
      title: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS | API',
      description: 'portfolio.projects.pokedex.description',
      image: '/assets/img/pokedexlaptop.png',
      liveLink: '#',
      githubLink: 'https://github.com/BorisScheiber/pokedex'
    }
  ];
}
