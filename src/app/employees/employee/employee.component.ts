import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employeedetails/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  
  constructor(private _employeeService:EmployeeService) { }
  public employees:any[]
  ngOnInit() {
    this._employeeService.getEmployee()
    .subscribe(data=> this.employees=data);
      
    
  }

}
