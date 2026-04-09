import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Tours } from './pages/tours/tours';
import { Posts } from './pages/posts/posts';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'tours', component: Tours },
  { path: 'posts', component: Posts },
  { path: 'profile', component: Profile }
];