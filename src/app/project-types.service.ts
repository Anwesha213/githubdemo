import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectTypesService {

  projectTypes: Project[] = [
    {
      name:"Software Development",startingPrice:1000000/1000000
    },
    {
      name:"Digital Transformation",startingPrice:2000000/1000000
    },
    {
      name:"IT Services Management",startingPrice:2000000/1000000
    }
  ];

  constructor() { }
 
  getAllProjectTypes() : Project[]{
     return this.projectTypes;
  }
  
  getProjectTypeByName(name : string) : Project{
    var projectType: Project = {name:"", startingPrice:0};

    console.log("Service Called with Argument " + name);

    this.projectTypes.forEach(p => {
      if(p.name == name){
        projectType = p;
      }
    });
      return projectType;
  }

}
