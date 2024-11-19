import { Component } from '@angular/core';

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
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Join',
      technologies: 'Javascript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: '/assets/img/joinlaptop.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'El Pollo Loco',
      technologies: 'Javascript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: '/assets/img/elpollolocolaptop.png',
      liveLink: '#',
      githubLink: '#',
      isReverse: true
    },
    {
      title: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS | API',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: '/assets/img/pokedexlaptop.png',
      liveLink: '#',
      githubLink: '#'
    }
  ];
}
