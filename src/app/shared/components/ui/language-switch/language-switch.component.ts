import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationService } from '../../../../services/translation.service';
import { Subscription } from 'rxjs';

/**
 * Component for toggling the application language between German and English.
 */
@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss',
})
export class LanguageSwitchComponent implements OnInit, OnDestroy {
  isGerman = false;
  private langChangeSubscription?: Subscription;

  constructor(private translationService: TranslationService) {
    this.langChangeSubscription = this.translationService
      .onLanguageChange()
      .subscribe((event) => {
        this.isGerman = event.lang === 'de';
      });
  }

  /**
   * Initializes the component by checking the current language.
   */
  ngOnInit() {
    this.isGerman = this.translationService.getCurrentLanguage() === 'de';
  }

  /**
   * Cleans up subscriptions to avoid memory leaks.
   */
  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  /**
   * Toggles the application language between German ('de') and English ('en').
   */
  toggleLanguage() {
    this.isGerman = !this.isGerman;
    if (this.isGerman) {
      this.translationService.switchLanguage('de');
    } else {
      this.translationService.switchLanguage('en');
    }
  }
}
