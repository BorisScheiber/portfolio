import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Component for displaying the privacy policy.
 * Handles data protection information and user restrictions.
 */
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements OnInit {
  /**
   * Stores the restriction cases for data protection information.
   */
  restriction = {
    cases: [
      'dataProtection.generalInfo.restriction.cases.0',
      'dataProtection.generalInfo.restriction.cases.1',
      'dataProtection.generalInfo.restriction.cases.2',
      'dataProtection.generalInfo.restriction.cases.3',
    ],
  };

  
  /**
   * Scrolls the page to the top when the component is initialized.
   */
  ngOnInit(): void {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);
  }
}
