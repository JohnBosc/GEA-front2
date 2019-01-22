import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { EmployeeComponent } from './employee/employee.component';
import {MouvmentComponent} from "./mouvment/mouvment.component";
import {StockageComponent} from "./stockage/stockage.component";
import {LayoutComponent} from "./employee/layout/layout.component";
import {EmployeeListComponent} from "./employee/employeeList/employeeList.component";
import {EmployeeCreateComponent} from "./employee/employeeCreate/employeeCreate.component";
import { EmployeeProfileComponent } from './employee/employeeProfile/employeeProfile.component';

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
},{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule', pathMatch: 'full'
  },{
  path: 'employee', component: EmployeeComponent
},{
  path: 'mouvment', component: MouvmentComponent
},{
  path: 'stockage', component: StockageComponent
},{
     path: 'docs',
    loadChildren: './docs/docs.module#DocsModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

