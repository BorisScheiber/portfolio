import { Component, Input } from '@angular/core';
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

 constructor(private router: Router) {}

 handleLogoClick() {
  if (this.router.url !== '/') {
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 }
}
