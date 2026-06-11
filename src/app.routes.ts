import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { adminGuard } from './app/core/core/guards/admin.guard-guard';

export const appRoutes: Routes = [
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },

    {
        path: '',
        component: AppLayout,
        canActivate: [adminGuard],
        children: [{ path: '', loadChildren: () => import('./app/pages/pages.routes') }]
    },

    { path: '**', redirectTo: '/notfound' }
];
