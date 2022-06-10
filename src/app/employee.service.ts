import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:Employee[]=[{
    id:1, name:"abc", address:"Bangalore", title:"Developer"
  },
  {
    id:2, name:"pqr", address:"Bangalore", title:"Developer"
  },
  {
    id:3, name:"xyz", address:"Kolkata", title:"Architect"
  },
  {
    id:4, name:"jkl", address:"Bangalore", title:"Manager"
  }];
  constructor() { }

  getAllEmployees():Employee[]{
   return this.employees;
  }

  getEmployeeByName(name : string): Employee{
    let emp = new Employee();

    this.employees.forEach(employee => {
      if(employee.name == name){
        emp = employee;
      }
    });
    return emp;
  }
  addEmployee(employee : Employee){
     this.employees.push(employee);
  }

  removeEmployee(employee : Employee){
    for(let x = 0; x < this.employees.length; x++){
      if(this.employees[x] == employee){
        this.employees.splice(x,1);
      }
    }
  }
}
