import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'trilha/:id',
    loadComponent: () => import('./pages/trilha/trilha.page').then((m) => m.TrilhaPage),
  },
  {
    path: 'video/:id',
    loadComponent: () => import('./pages/video/video.page').then((m) => m.VideoPage),
  },
];
