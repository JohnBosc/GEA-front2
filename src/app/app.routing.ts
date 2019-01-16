import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: '',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },{
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }]
}, {
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },{
    path: 'signup',
    loadChildren: './signup/signup.module#SignupModule'
  }, {
    path: 'icons',
    loadChildren: './icons/icons.module#IconsModule'
  },{
     path: 'docs',
    loadChildren: './docs/docs.module#DocsModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

