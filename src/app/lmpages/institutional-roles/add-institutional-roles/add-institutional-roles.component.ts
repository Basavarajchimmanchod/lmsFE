import { Component, OnInit } from '@angular/core';
import { DataOrg } from '../../../Shared/dataOrg';

import { AddserviceService } from '../../../service/addservice.service'
import { NgForm } from '@angular/forms';
import { InstitutionalRolesService  } from '../institutional-roles.service';
import { InstitutionalRoles } from '../institutionalRoles.model';

@Component({
  selector: 'app-add-institutional-roles',
  templateUrl: './add-institutional-roles.component.html',
  styleUrls: ['./add-institutional-roles.component.css']
})
export class AddInstitutionalRolesComponent implements OnInit {
  unamePattern = "^[a-zA-Z]{1,15}$";
  institutionalValid=new InstitutionalRoles('',[new DataOrg('')],'','','','','','','','','','');
  isValidFormSubmitted = false;
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

          
          organizationd=[]
  organizations:Array<DataOrg>;

  constructor(private institutionalAddServices:InstitutionalRolesService) {
    this.organizations=[];
   }

  ngOnInit() {

    this.institutionalAddServices.getOrganizations()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.organizationd=data

      },
     (error)=> console.log(error)
    );

  }

  onSubmit(form: NgForm){
    const value=form.value;
    const institutionalrolesModel=new InstitutionalRoles(value.language,
                                                          this.organizations,
                                                          value.code,
                                                          value.name,
                                                          value.effectiveDate,
                                                          value.endDate,
                                                          'value.createBy',
                                                          'value.createDate',
                                                          'value.modifiedBy',
                                                          'value.modifiedDate',
                                                          'value.deletedBy',
                                                          'value.deletedDate'
                                                          )
    this.institutionalAddServices.addInstitutionalRoles(institutionalrolesModel)
    .subscribe(
      (Response)=>{
        alert("Record Saved Successfully")
        this.organizations=[]
      },
      (error)=>alert("Somthing went worng")
    );
    form.reset();

  }
  onadd2(name)
  {
    let organization=new DataOrg(name);
    this.organizations.push(organization);
    console.log("Organization Data", this.organizations)

  }
onadd3(name)
{
  let organizationss=new DataOrg(name);
  this.organizationd.push(organizationss);
}

removeOrganization(organization)
  {
    let index=this.organizations.indexOf(organization);
    this.organizations.splice(index,1);
  }
}
