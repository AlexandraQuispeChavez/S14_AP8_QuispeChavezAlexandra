import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Inicio } from './pages/inicio/inicio';
import { Especialidades } from './pages/especialidades/especialidades';
import { Medicos } from './pages/medicos/medicos';
import { Contacto } from './pages/contacto/contacto';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'inicio', component: Inicio, canActivate: [authGuard] },
  { path: 'especialidades', component: Especialidades, canActivate: [authGuard] },
  { path: 'medicos', component: Medicos, canActivate: [authGuard] },
  { path: 'contacto', component: Contacto, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
