import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { DisciplinesService } from '../disciplines.service'
import { NgForm } from '@angular/forms';
import { Discipline } from '../discipliness.model';
import { DataOrg } from '../../../Shared/dataOrg'

@Component({
  selector: 'app-edit-disciplines',
  templateUrl: './edit-disciplines.component.html',
  styleUrls: ['./edit-disciplines.component.css']
})
export class EditDisciplinesComponent implements OnInit {
  
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


onSubmit(forname:NgForm,ids:number){
  if(this.editMode){
  const value=forname.value;
   const disciplineModel = new Discipline(this.organizations,
                                            value.code,
                                            value.language,
                                            value.name,
                                            value.description,
                                            value.ordinal,
                                            value.status,
                                            'value.createBy',
                                            'value.createDate',
                                            'value.modifiedBy',
                                            'value.modifiedDate',
                                            'value.deletedBy',
                                            'value.deletedDate');

  console.log("Edited Data",disciplineModel);
  console.log("id fro submit",this.id);
  
      if(confirm("Do you want to save changes?")== true)
      {
this.disciplineService.editdiscipline(disciplineModel,this.id)
  .subscribe(
    (response)=>alert("Successfully Updated"),
    (error)=>console.log(error)
  );
          this.router.navigate(['/adminindex']);
  }
  }
  // this.refresh();

}

onadd3(name)
{
  let organizationss=new DataOrg(name);
  this.organizations.push(organizationss);

}

removeOrganization(organizationd)
{
  let index=this.organizations.indexOf(organizationd);
  this.organizations.splice(index,1);
}


public refresh(){
  window.location.reload();
}
}
