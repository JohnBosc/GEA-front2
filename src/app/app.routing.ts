import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { EmployeeComponent } from './employee/employee.component';
import { MouvmentComponent } from './mouvment/mouvment.component';
import { StockageComponent } from './stockage/stockage.component';
import { FileExplorerComponent } from './file_explorer/file_explorer.component';

import { EmployeeListComponent } from './employee/employeeList/employeeList.component';
import { EmployeeCreateComponent } from './employee/employeeCreate/employeeCreate.component';
import { EmployeeProfileComponent } from './employee/employeeProfile/employeeProfile.component';
import { from } from 'rxjs/observable/from';

export const AppRoutes: Routes = [{
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: '',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }, {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }]
        }, {
              path: '',
              component: AdminLayoutComponent,
                  children: [
                                {
                                path: 'dashboard',
                                loadChildren: './dashboard/dashboard.module#DashboardModule', pathMatch: 'full'
                              }, {
                              path: 'employee', component: EmployeeComponent,
                                                      children: [{
                                                        path: '',
                                                        component: EmployeeListComponent
                                                      }, {
                                                        path: 'employee/create',
                                                        component: EmployeeCreateComponent
                                                      }, {
                                                        path: 'employee/profile',
                                                        component: EmployeeProfileComponent
                                                      }, {
                                                        path: 'employee/list',
                                                        redirectTo: '',
                                                        pathMatch: 'full'}]
                                }, {
                                  path: 'mouvment', component: MouvmentComponent
                                }, {
                                  path: 'stockage', component: StockageComponent
                                }, {
                                     path: 'explorer', component: FileExplorerComponent
                                  }
                            ]
          }
];

