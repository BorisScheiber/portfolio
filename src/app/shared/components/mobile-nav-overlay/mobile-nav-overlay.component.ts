import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitchComponent } from '../ui/language-switch/language-switch.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-mobile-nav-overlay',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule, LanguageSwitchComponent],
  templateUrl: './mobile-nav-overlay.component.html',
  styleUrl: './mobile-nav-overlay.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      // transition(':leave', [
      //   animate('125ms ease-out', style({ transform: 'translateX(100%)' }))
      // ])
    ])
  ]
})
export class MobileNavOverlayComponent implements OnChanges {

@Input() isMenuOpen = false;
@Output() closeOverlay = new EventEmitter<void>();

@HostListener('window:resize')
onResize() {
  if (window.innerWidth >= 900 && this.isMenuOpen) {
    this.closeOverlay.emit();
  }
}

constructor(private router: Router) {}


ngOnChanges(changes: SimpleChanges) {
if (changes['isMenuOpen']) {
  document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
}
}


mobileNavigateTo(sectionId: string) {
  if (this.router.url !== '/') {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToElement(sectionId);
      }, 100);
    });
  } else {
    this.scrollToElement(sectionId);
  }
  this.closeOverlay.emit();
}



private scrollToElement(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

}
