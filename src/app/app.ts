import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Clínica Neonatológica BebéVida';

  constructor(public router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/';
  }
}
