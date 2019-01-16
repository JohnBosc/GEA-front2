import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { SignupComponent } from './signup.component';
import { SignupRoutes } from './signup.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(SignupRoutes), NgbAccordionModule],
  declarations: [SignupComponent]
})

export class SignupModule {}
