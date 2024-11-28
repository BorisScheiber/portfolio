import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationService } from '../../../../services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss'
})
export class LanguageSwitchComponent implements OnInit, OnDestroy {
  isGerman = false;
  private langChangeSubscription?: Subscription;

  constructor(private translationService: TranslationService) {
    this.langChangeSubscription = this.translationService.onLanguageChange()
      .subscribe((event) => {
        this.isGerman = event.lang === 'de';
      });
  }

  ngOnInit() {
    this.isGerman = this.translationService.getCurrentLanguage() === 'de';
  }

  ngOnDestroy() {
    // Subscription aufräumen
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  toggleLanguage() {
    this.isGerman = !this.isGerman;
    if (this.isGerman) {
        this.translationService.switchLanguage('de');
    } else {
        this.translationService.switchLanguage('en');
    }
}

}
