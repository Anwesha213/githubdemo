import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Inject(EmployeeService)
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  empId = new FormControl("");
  empName = new FormControl("");
  empAddress = new FormControl("");
  empTitle = new FormControl("");
 
  employee! : Employee;
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employee = {
     id:this.empId.value,
     name:this.empName.value,
     address:this.empAddress.value,
     title:this.empTitle.value
    };

    this.employeeService.addEmployee(this.employee);
    alert("Employee saved");
  }

}
