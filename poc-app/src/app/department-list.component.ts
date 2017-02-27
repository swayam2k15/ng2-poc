import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'employee-list',
  template: `<h1>Department list</h1>
  <ul class="items">

  <li (click)="OnSelect(department)" *ngFor="let department of departments" >
  {{department.id}}{{department.name}}
  </li>
  </ul>`

})

//click event handler
export class DepartmentListComponent{
constructor(private router:Router){}

departments =[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"MongoDb"},
    {"id":3,"name":"JavaScript"},
    {"id":4,"name":"HTML"}
]
// onSelect() gets triggered on click
OnSelect(department){
    this.router.navigate(['/departments',department.id]);
    //navigate method of router service. Basically contains the info ng2 needs to construct the url and navigate to the corresponding view
}
}