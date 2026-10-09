import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Login } from './login/login';
import { Admin } from './admin/admin';
import { adminGuard } from './admin-guard';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {path: 'home',component:Home},
    {path: 'about',component:About},
    {path: 'login',component:Login},
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'admin', component: Admin, canActivate: [adminGuard] },
    { path: 'home', component: Home, canActivate: [authGuard] },
];
