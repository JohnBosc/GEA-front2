import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeRoutes } from './employee.routing';
import { EmployeeListComponent } from './employeeList/employeeList.component';
import { EmployeeCreateComponent } from './employeeCreate/employeeCreate.component';
import { EmployeeProfileComponent } from './employeeProfile/employeeProfile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [EmployeeListComponent, EmployeeCreateComponent, EmployeeProfileComponent],
})

export class EmployeeModule {}
