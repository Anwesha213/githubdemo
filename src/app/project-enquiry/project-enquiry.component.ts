import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Project } from '../project';
import { ProjectTypesService } from '../project-types.service';

@Inject(ProjectTypesService)
@Component({
  selector: 'app-project-enquiry',
  templateUrl: './project-enquiry.component.html',
  styleUrls: ['./project-enquiry.component.css']
})
export class ProjectEnquiryComponent implements OnInit {

  projectTypeControl = new FormControl("");

  matchingProject!:Project;

  constructor(private projectTypesService : ProjectTypesService) { }

  ngOnInit(): void {
  }

  findProjectType(){
    let projectType = this.projectTypeControl.value;
    console.log(this.projectTypeControl.value);
    
    let result = this.projectTypesService.getProjectTypeByName(projectType);

    if(result.name == ""){
      //No matching project was found
    }
    else{
      //Matching project found
      this.matchingProject = result;
    }
  }

}
