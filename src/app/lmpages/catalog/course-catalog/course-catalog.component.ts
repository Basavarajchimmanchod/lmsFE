import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { MultiDataCont } from '../../../Shared/multiDataCont';
import { DataOrg } from '../../../Shared/dataOrg';

import { AddserviceService } from '../../../service/addservice.service';
import { Course } from '../../courses/course.model'
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.css']
})
export class CourseCatalogComponent implements OnInit {
  
  deliveryMethod=['Assessment',
  'Classroom',
  'Course Group',
  'eLearning',
  'Self-Study'
];
status=['Active','Inactive'];

  disciplinesd=[
    {

    }
  ]
  constructor(private coursesServiceS:CatalogService) { }
search=true;
isDisable=false;
  coursesd=[];
  ngOnInit() {

    this.coursesServiceS.getDiscipline()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.disciplinesd=data

      },
     (error)=> console.log(error)
    );

  }
  onSubmit(formName:NgForm){

    const value=formName.value

    const keywordvalue=value.keyword;
    const codevalue=value.code;
    const disciplinevalue=value.major;
    const deliveryMethodvalue=value.deliveryMethod
    const statusvalue=value.status;

if((keywordvalue=="") && (codevalue=="") && (disciplinevalue=="") && (deliveryMethodvalue=="")){
  alert("Check The value You have Selected")
}
else if((codevalue=="") && (disciplinevalue=="") && (deliveryMethodvalue=="")){
  this.coursesServiceS.getCcourseName(keywordvalue)
  .subscribe(
    (data)=>{
      if(data==""){
        this.isDisable=false;
        alert("No Record Found")
      }
      else
      {
       this.onDisable();
this.coursesd=data
      }
    }
  );
}
else if((keywordvalue=="") && (disciplinevalue=="") && (deliveryMethodvalue=="")){
  this.coursesServiceS.getCcourseCode(codevalue)
  .subscribe(
    (data)=>{
      if(data==""){
        this.isDisable=false;
        alert("No Record Found")
      }
      else
      {
       this.onDisable();
this.coursesd=data
      }
    }
  );
}
else{
  this.coursesServiceS.getCourseData(keywordvalue,codevalue,disciplinevalue,deliveryMethodvalue,statusvalue)
  .subscribe(
    (data)=>{
      if(data==""){
        this.isDisable=false;
        alert("No Record Found")
      }
      else
      {
       this.onDisable();
this.coursesd=data
      }
    }
  );
}
  //   if(code==""){
  //     this.search=true;
  //   }
  //   else
  //   {
  //     this.search=false;
  //   }
  }
  onDisable(){
    this.isDisable=true;
  }
}
