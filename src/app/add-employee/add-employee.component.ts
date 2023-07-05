import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee:Employee={
    id:0,
    name:'',
    emailId:'',
    mobileNo:'',
    salary:0
  }
  
  message:string=''

  constructor(private _empService:EmployeeService, private router:Router) {}

  addEmployee()
  {
    this._empService.addEmployee(this.employee)
    .subscribe (
      {
        next:(response) =>
        {
          this.router.navigate(['employees']);
        }
      }
    );
  }
}
