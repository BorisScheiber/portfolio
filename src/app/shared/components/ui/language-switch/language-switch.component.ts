import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../../../services/translation.service';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss'
})
export class LanguageSwitchComponent implements OnInit {
  isGerman = false;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.isGerman = this.translationService.getCurrentLanguage() === 'de';
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
