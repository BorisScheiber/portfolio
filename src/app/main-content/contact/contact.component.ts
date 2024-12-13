import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  
  contactForm!: FormGroup;
  submitted = false;
  mailTest = true; 

  showThankYouMessage = false;
  showErrorMessage = false;
  isHiding = false;
 
  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,63}$')]],
      message: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(1000)]],
      privacy: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      
      if (!this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(formData))
          .subscribe({
            next: (response) => {
              this.contactForm.reset();
              this.submitted = false;
              this.showThankYouMessage = true;
              this.startHideTimer('success');
            },
            error: (error) => {
              console.error(error);
              this.showErrorMessage = true;
              this.startHideTimer('error');
            },
            complete: () => console.info('send post complete'),
          });
      } else {
        // Test-Modus
        console.log('Test mode - Form data:', formData);
        this.contactForm.reset();
        this.submitted = false;
        this.showThankYouMessage = true;
        // this.showErrorMessage = true;
        this.startHideTimer('success');
      }
    }
  }

  get f() {
    return this.contactForm.controls;
  }


  startHideTimer(type: 'success' | 'error') {
    setTimeout(() => {
      this.isHiding = true;
      setTimeout(() => {
        if (type === 'success') {
          this.showThankYouMessage = false;
        } else {
          this.showErrorMessage = false;
        }
        this.isHiding = false;
      }, 400);
    }, 3000);
  }








  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
