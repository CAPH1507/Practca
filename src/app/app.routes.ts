import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';
import { Detail } from './detail/detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'galeria', component: Gallery },
  { path: 'detalle/:id', component: Detail },
  { path: '**', redirectTo: '' }
];
