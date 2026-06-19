import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly VALID_EMAIL = 'admin@bebevida.com';
  private readonly VALID_PASSWORD = '123456';
  private readonly SESSION_KEY = 'bebevida_session';

  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  private get storage(): Storage | null {
    return isPlatformBrowser(this.platformId) ? sessionStorage : null;
  }

  login(email: string, password: string): boolean {
    if (email === this.VALID_EMAIL && password === this.VALID_PASSWORD) {
      this.storage?.setItem(
        this.SESSION_KEY,
        JSON.stringify({ email, loggedAt: new Date().toISOString() })
      );
      return true;
    }
    return false;
  }

  logout(): void {
    this.storage?.removeItem(this.SESSION_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.storage?.getItem(this.SESSION_KEY);
  }

  getUser(): string {
    const session = this.storage?.getItem(this.SESSION_KEY);
    if (session) {
      return JSON.parse(session).email;
    }
    return '';
  }
}
