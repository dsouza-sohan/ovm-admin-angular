import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: AdminComponent
    },
    {
        path: '',
        component: LoginComponent
    }
];
