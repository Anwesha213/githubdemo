import { Component, Inject, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Inject(EmployeeService)
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees:Employee[] = [];

  constructor(private employeeService : EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getAllEmployees();
  }

  removeEmployee(employee : Employee){
    this.employeeService.removeEmployee(employee);
    alert(`Employee ${employee.name} deleted`);
  }

}
