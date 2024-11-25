import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Skill {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  skills: Skill[] = [
    { icon: '/assets/img/icons/html.svg' , name: 'HTML' },
    { icon: '/assets/img/icons/css.svg', name: 'CSS' },
    { icon: '/assets/img/icons/javascript.svg', name: 'JavaScript' },
    { icon: '/assets/img/icons/typescript.svg', name: 'TypeScript' },
    { icon: '/assets/img/icons/angular.svg', name: 'Angular' },
    { icon: '/assets/img/icons/firebase.svg', name: 'Firebase' },
    { icon: '/assets/img/icons/git.svg', name: 'GIT' },
    { icon: '/assets/img/icons/api.svg', name: 'Rest-API' },
    { icon: '/assets/img/icons/scrum.svg', name: 'Scrum' },
    { icon: '/assets/img/icons/materialdesign.svg', name: 'Material Design' },
    { icon: '/assets/img/icons/continuallylearning.svg', name: 'Continually learning' }
  ];


}
