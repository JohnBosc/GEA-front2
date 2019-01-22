import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent{
  constructor(route: ActivatedRoute){
    route.params.subscribe(params => console.log("side menu id parameter",params['id']));
  }
}
