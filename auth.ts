import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string): boolean {
    // Demo: accept "password" for all users
    if (password === 'password') {
      localStorage.setItem('user', email);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
