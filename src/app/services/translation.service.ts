import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

/**
 * Service for managing translations and language preferences.
 */
@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  /**
   * Initializes the default language based on stored preferences or falls back to 'en'.
   */
  private initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);
  }

  /**
   * Switches the application language and stores the preference locally.
   * @param language The language code to switch to (e.g., 'en', 'de').
   */
  switchLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
  }

  /**
   * Gets the currently active language.
   * @returns The current language code (e.g., 'en').
   */
  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  /**
   * Subscribes to language change events.
   * @returns An observable for language change events.
   */
  onLanguageChange(): Observable<any> {
    return this.translate.onLangChange;
  }
}
