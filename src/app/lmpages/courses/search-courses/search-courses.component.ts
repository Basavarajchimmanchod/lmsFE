import { Component, OnInit } from '@angular/core';
import { AddserviceService } from '../../../service/addservice.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-search-courses',
  templateUrl: './search-courses.component.html',
  styleUrls: ['./search-courses.component.css']
})
export class SearchCoursesComponent implements OnInit {
  
 
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
  constructor(private coursesServiceS:CoursesService) { }
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
