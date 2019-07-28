import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/employees/employeeinterface/Iemployee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }
  private _url:string ="assets/data/employees.json"
  getEmployee():Observable<IEmployee[]>
  {
    return this._http.get<IEmployee[]>(this._url)
  }
  
}
