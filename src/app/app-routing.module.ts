import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectEnquiryComponent } from './project-enquiry/project-enquiry.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {path:"projects",component:ProjectListComponent},
  {path:"project-enquiry",component:ProjectEnquiryComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"employee-list",component:EmployeeListComponent},
  {path:"add-employee",component:AddEmployeeComponent},
  {path:"features",component:FeaturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
