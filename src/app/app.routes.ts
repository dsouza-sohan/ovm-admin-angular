import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';
import { AdminComponent } from './pages/shared/theme/layout/admin/admin.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: AdminComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard.component')
            }
        ]
    },
    {
        path: '',
        component: LoginComponent,
        canActivate: [loginGuard]
    }
];
