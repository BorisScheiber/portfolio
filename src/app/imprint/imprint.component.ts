import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
