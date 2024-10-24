import { Routes } from '@angular/router';
import {HomeComponent} from './Pages/home/home.component';
import {AboutComponent} from './Pages/about/about.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('./Pages/about/about.component').then((c) => c.AboutComponent)
  },
  {
    path: 'works',
    loadComponent: () =>
      import('./Pages/works/works.component').then((c) => c.WorksComponent)
  }
];
