import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
    template:`<h1>You selected department with id ={{departmentId}}</h1>`
    
})

export class DepartmentDetailComponent implements OnInit{
public departmentId;
    //Activatedroute is essential to retrieve the id in the URL and show it in the view
constructor(private route:ActivatedRoute){}//Here route is an instance of Avtivated Route
ngOnInit(){
   //OnInit is used to fetch the id as soon as the component is loaded
       let id=this.route.snapshot.params['id'];
    //snapshot gives the location of the current route
    //snapshot gives access to the params property and id is passed as a parameter which we configured in our router
       this.departmentId= id;
}


}