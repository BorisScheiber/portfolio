import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Component that displays the imprint/legal notice.
 * Provides legal information and contact details.
 */
@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent implements OnInit {
  /**
   * Initializes the component and scrolls the page to the top for better UX.
   * Ensures compatibility across browsers, including iOS.
   */
  ngOnInit(): void {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);
  }
}
