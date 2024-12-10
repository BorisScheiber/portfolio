import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { MobileNavOverlayComponent } from './shared/components/mobile-nav-overlay/mobile-nav-overlay.component';
import AOS from 'aos';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MobileNavOverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isMenuOpen = false;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event) => {
      document.documentElement.lang = event.lang;
    });
  }

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: false,         
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
