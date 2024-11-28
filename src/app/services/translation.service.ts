// src/app/services/translation.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translate: TranslateService) {
   this.initLanguage();
  }

  private initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);
  }

  switchLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  // Neue Methode für Language-Change-Events
  onLanguageChange(): Observable<any> {
    return this.translate.onLangChange;
  }
}