import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
})
export class LoginScreenComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  demoAccounts = [
    { email: 'admin@restaurant.com', role: 'Admin', password: 'password' },
    { email: 'customer@example.com', role: 'Customer', password: 'password' },
    { email: 'staff@restaurant.com', role: 'Staff', password: 'password' },
  ];

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    this.error = '';
    const success = this.authService.login(this.email, this.password);
    if (!success) {
      this.error = 'Invalid email or password';
    }
  }
}
