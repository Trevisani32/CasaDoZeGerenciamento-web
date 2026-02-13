import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./modules/login/login').then(m => m.Login),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./modules/dashboard/dashboard').then(m => m.Dashboard),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'login' },
];