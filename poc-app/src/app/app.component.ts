import { Component } from '@angular/core';
import {EmployeeService} from './employee.service'
@Component({
  selector: 'my-app',
  template: `<h1>Routing Application</h1>
  <nav>
  <a routerLink="/departments" routerLinkActive="active">Departments</a>
  <a routerLink="/employees" routerLinkActive="active">Employees</a>
  </nav>
  <router-outlet></router-outlet>`
})
// routerLink: Angular Directive which specifies the path it should navigate
// routerLinkActive: Angular Directive which specifies the name of the class which gets applied when the path is followed
//router-outlet: marks where a router should display a view
export class AppComponent { }
