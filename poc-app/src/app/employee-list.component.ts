import { Component } from '@angular/core';
@Component({
  selector: 'employee-list',
  template: `<h1>Employee List</h1>

<p>{{name1}}</p>
<p>{{name2}}</p>
<p>{{name3}}</p>
<p>{{name4}}</p>

`
})
export class EmployeeListComponent  {
   
       name1="Shafeeq";
        name2="Naveen";
        name3="Sudheer";
        name4="Abraham";

    }

