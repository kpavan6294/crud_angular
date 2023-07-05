import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './models/employee.model';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseApiUrl:string = environment.baseApiUrl;
  constructor(private _httpClient:HttpClient) { }

  getAllEmployees():Observable<Employee[]>
  {
    return this._httpClient.get<Employee[]>(this.baseApiUrl + 'api/employee');
  }

  addEmployee(employee:Employee):Observable<string>
  {
    return this._httpClient.post<string>(this.baseApiUrl + 'api/employee',employee);
  }

  getEmployeeById(id:string):Observable<Employee>
  {
    return this._httpClient.get<Employee>(this.baseApiUrl +'api/employee/' + id);
  }

  updateEmployee(id:string, employee:Employee):Observable<string>
  {
    return this._httpClient.put<string>(this.baseApiUrl+'api/employee/'+id,employee);
  }

  deleteEmployee(id:string):Observable<string>
  {
    return this._httpClient.delete<string>(this.baseApiUrl+'api/employee/'+id);
  }

}
