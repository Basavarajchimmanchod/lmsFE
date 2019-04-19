import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { DisciplinesService } from '../disciplines.service'
import { NgForm } from '@angular/forms';
import { AddserviceService } from '../../../service/addservice.service';
import { Discipline } from '../discipliness.model';
import { DataOrg } from '../../../Shared/dataOrg';


@Component({
  selector: 'app-view-detail-disciplines',
  templateUrl: './view-detail-disciplines.component.html',
  styleUrls: ['./view-detail-disciplines.component.css']
})
export class ViewDetailDisciplinesComponent implements OnInit {
 
  id: number;
  ids:number;
  editMode = false;
  dispciplined=[];
  organizationd=[]
  organizations:Array<DataOrg>;


  disciplineOwnerOrganization;

  disciplineForm = new FormGroup({
    'code':new FormControl(''),
    'language': new FormControl(''),
    'name':new FormControl(''),
    'description': new FormControl(''),
    'ordinal': new FormControl(''),
    'status':new FormControl('')
    

  });

public  idsd:number=0;

languages=['English',
            'Chinese - China',
            'English - Australia',
            'English - United Kingdom',
            'Francais - Canada',
            'German - Germany',
            'Italian - Italy',
            'Portuguese - Brazil',
            'Espariol - Mexico'
          ];
status=['Active','Inactive'];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private disciplineService:DisciplinesService,
    )
     {
       this.organizations=[];
      }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
  this.initForm();
      }
    );
            
          this.disciplineService.getOrganizations()
          .subscribe(
            (data: any[])=>{
              this.organizationd=data
      
            },
           (error)=> console.log(error)
          );



}


private initForm() {
    
if (this.editMode) {

  this.disciplineService.getDisciplineidData(this.id)
  .subscribe((data)=>{
  this.dispciplined=data;
  console.log("The data recived is",data)
  for(let c of data){}
      this.organizations=data.ownerOrganization
 this.disciplineForm.setValue({
    code:data.code,
    language:data.language,
    name:data.name,
    description:data.description,
    ordinal:data.ordinal,
    status:data.status
  })
  }  

  )
}
}
ngAfterViewInit() {
}




}
