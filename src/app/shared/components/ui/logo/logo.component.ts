import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
 @Input() fontSize: string = '32px';
 @Input() minWidth: string = '145px';
 @Input() isMenuOpen = false;
 @Output() closeMenu = new EventEmitter<void>();

 constructor(private router: Router) {}

 handleLogoClick() {
  if (this.router.url !== '/') {
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (this.isMenuOpen) {
    this.closeMenu.emit();
  }
 }
}
