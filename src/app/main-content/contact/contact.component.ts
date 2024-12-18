import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Contact component for handling user contact form submissions.
 * Supports form validation, server communication, and user feedback messages.
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  contactForm!: FormGroup;
  submitted = false;
  mailTest = false; // Test-Modus

  showThankYouMessage = false;
  showErrorMessage = false;
  isHiding = false;

  post = {
    endPoint: 'https://boris-scheiber.at/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Initializes the contact form with validation rules.
   */
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,63}$')]],
      message: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(1000)]],
      privacy: [false, Validators.requiredTrue]
    });
  }

  /**
   * Handles form submission. Validates the form and sends data if valid.
   */
  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      if (!this.mailTest) {
        this.sendFormData(formData);
      } else {
        this.handleTestMode(formData);
      }
    }
  }

  /**
   * Sends the form data to the server via an HTTP POST request.
   * @param formData The validated form data to be sent.
   */
  private sendFormData(formData: any): void {
    this.http.post(this.post.endPoint, this.post.body(formData)).subscribe({
      next: () => this.handleSuccess(),
      error: (error) => this.handleError(error),
      complete: () => console.info('Form submission complete'),
    });
  }

  /**
   * Handles the form submission in test mode (no server communication).
   * @param formData The form data to log for testing.
   */
  private handleTestMode(formData: any): void {
    console.log('Test mode - Form data:', formData);
    this.resetFormWithSuccess();
  }

  /**
   * Handles successful form submission. Resets the form and shows a thank you message.
   */
  private handleSuccess(): void {
    this.resetFormWithSuccess();
  }

  /**
   * Handles errors during form submission. Displays an error message.
   * @param error The error response from the server.
   */
  private handleError(error: any): void {
    console.error(error);
    this.showErrorMessage = true;
    this.startHideTimer('error');
  }

  /**
   * Resets the form and displays the thank you message.
   */
  private resetFormWithSuccess(): void {
    this.contactForm.reset();
    this.submitted = false;
    this.showThankYouMessage = true;
    this.startHideTimer('success');
  }

  /**
   * Getter for accessing form controls.
   * @returns The form controls of the contact form.
   */
  get f() {
    return this.contactForm.controls;
  }

  /**
   * Starts a timer to hide feedback messages after a delay.
   * @param type The type of message ('success' or 'error').
   */
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

  /**
   * Scrolls the page to the top.
   */
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
