import { Routes } from '@angular/router';

import { Routes } from '@angular/router';
import { SignupComponent } from './signup.component';


export const SignupRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'signup',
      component: SignupComponent,
      data: {
        heading: 'Signup'
      }
    }]
  }
];
