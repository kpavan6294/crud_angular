import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee:Employee={
    id:0,
    name:'',
    emailId:'',
    mobileNo:'',
    salary:0
  }
  
  constructor(private _empService:EmployeeService, private route:ActivatedRoute, 
    private router:Router){}

  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id');

        if(id)
        {
          this._empService.getEmployeeById(id.toString())
          .subscribe(response => this.employee=response);
        }
      }
    })
  }

  updateEmployee()
  {
    this._empService.updateEmployee(this.employee.id.toString(),this.employee)
    .subscribe(
      {
        next:(response)=>
        {
          this.router.navigate(['employees']);
        }
      }
    );
  }

  deleteEmployee(id:number)
  {
    this._empService.deleteEmployee(id.toString())
    .subscribe({
      next: (respose) =>
      {
        this.router.navigate(['employees']);
      }
    });
  }
}
