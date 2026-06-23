import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'login', renderMode: RenderMode.Prerender },
  { path: 'inicio', renderMode: RenderMode.Prerender },
  { path: 'especialidades', renderMode: RenderMode.Prerender },
  { path: 'medicos', renderMode: RenderMode.Prerender },
  { path: 'contacto', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender }
];
