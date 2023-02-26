import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength-checker',
  templateUrl: './password-strength-checker.component.html',
  styleUrls: ['./password-strength-checker.component.css'],
})
export class PasswordStrengthCheckerComponent {
  password: string = '';
  graySection: string = 'gray';
  yellowSection: string = 'gray';
  greenSection: string = 'gray';

  checkPassword() {
    if (this.password.length < 8) {
      this.graySection = 'red';
      this.yellowSection = 'red';
      this.greenSection = 'red';
    } else if (
      /[a-zA-Z]/.test(this.password) &&
      /[0-9]/.test(this.password) &&
      /[^\w\s]/.test(this.password)
    ) {
      this.graySection = 'green';
      this.yellowSection = 'green';
      this.greenSection = 'green';
    } else if (
      (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password)) ||
      (/[a-zA-Z]/.test(this.password) && /[^\w\s]/.test(this.password)) ||
      (/[0-9]/.test(this.password) && /[^\w\s]/.test(this.password))
    ) {
      this.graySection = 'yellow';
      this.yellowSection = 'yellow';
      this.greenSection = 'gray';
    } else {
      this.graySection = 'gray';
      this.yellowSection = 'gray';
      this.greenSection = 'gray';
    }
  }
}
