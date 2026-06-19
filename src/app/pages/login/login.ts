import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;
  errorMessage = '';
  showPassword = false;
  isLoading = false;

  private platformId = inject(PLATFORM_ID);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Solo verificar sesión en el browser
    if (isPlatformBrowser(this.platformId) && this.authService.isLoggedIn()) {
      this.router.navigate(['/inicio']);
    }

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.loginForm.get('email')!; }
  get password() { return this.loginForm.get('password')!; }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    setTimeout(() => {
      const { email, password } = this.loginForm.value;
      const success = this.authService.login(email, password);

      if (success) {
        this.router.navigate(['/inicio']);
      } else {
        this.errorMessage = 'Correo o contraseña incorrectos. Verifica tus datos e intenta de nuevo.';
        this.isLoading = false;
      }
    }, 800);
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
