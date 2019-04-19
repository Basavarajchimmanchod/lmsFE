import { Component, OnInit } from '@angular/core';

import { AddserviceService } from '../../../service/addservice.service';
import { NgForm } from '@angular/forms';
import { Discipline } from '../discipliness.model'
import { DataOrg } from '../../../Shared/dataOrg';

import { DisciplinesService } from '../disciplines.service';

@Component({
  selector: 'app-add-disciplines',
  templateUrl: './add-disciplines.component.html',
  styleUrls: ['./add-disciplines.component.css']
})
export class AddDisciplinesComponent implements OnInit {

  disciplineVaild=new Discipline([new DataOrg('')],'','','','',0,'','','','','','','');
  isValidFormSubmitted = false;

  organizationd=[]
  organizations:Array<DataOrg>;

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

  constructor(
    private disciplineServices: DisciplinesService)
     {
       this.organizations=[];
      }

onSubmit(form: NgForm) {
    const value=form.value
    this.isValidFormSubmitted = true;

  const DisciplineModel=new Discipline( this.organizations,
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
                                'value.deletedDate'
                                )

    this.disciplineServices.addDisciplines(DisciplineModel)
    .subscribe(
      (response)=>
      {
        alert("Record Saved Sucessfully")
        this.organizations=[];
      },
      (error)=>alert(error)
    );
  form.reset();
    }
  
  ngOnInit() {
    this.disciplineServices.getOrganizations()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.organizationd=data

      },
     (error)=> console.log(error)
    );
  }

  
  onadd2(name)
  {
    let organizationss=new DataOrg(name);
    this.organizations.push(organizationss);

  }
  onadd3(name)
  {
    let organizationss=new DataOrg(name);
    this.organizations.push(organizationss);
  }
  removeOrganization(organizationd)
  {
    let index=this.organizationd.indexOf(organizationd);
    this.organizations.splice(index,1);
  }
  
}
