import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { MultiDataCont } from '../../../Shared/multiDataCont';
import { DataOrg } from '../../../Shared/dataOrg';



import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { CoursesService } from '../../courses/courses.service'
import { NgForm } from '@angular/forms';
import { AddserviceService } from '../../../service/addservice.service';

import { Course } from '../../courses/course.model';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  contentss=[
    {

    }
  ]
organizationd=[]
  disciplinesd=[
    {

    }
  ]
  id: number;
  ids:number;
  editMode = false;
  // coursesForm: FormGroup;
  
public  idsd:number=0;
appNumber:number;
  name:string;
  contacts:Array<MultiDataCont>;
  organizations:Array<DataOrg>;

  public isCollapsed=true;
  constructor(private _script: ScriptLoaderService,
              private router: Router,
              private route: ActivatedRoute,
              private CoursesServicesS:CoursesService,
              private courseServices:AddserviceService
             ) {
    this.contacts=[];
    this.organizations=[];

   }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
    // this.initForm();
        }
      );
      ;

      console.log("init-id",this.id);
       this.idsd=this.id
  }
  
}
