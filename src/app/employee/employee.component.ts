import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  employees:Employee[]=[];

  constructor(private _empService:EmployeeService){}
  
  ngOnInit(): void {
    
    this._empService.getAllEmployees().subscribe( result => this.employees=result);

  }
}
