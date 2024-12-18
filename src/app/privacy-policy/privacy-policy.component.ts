import { Component} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  restriction = {
    cases: [
      'dataProtection.generalInfo.restriction.cases.0',
      'dataProtection.generalInfo.restriction.cases.1',
      'dataProtection.generalInfo.restriction.cases.2',
      'dataProtection.generalInfo.restriction.cases.3'
    ]
  };


  ngOnInit() {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);
  }


}
