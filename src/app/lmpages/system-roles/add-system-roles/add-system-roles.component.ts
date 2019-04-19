import { Component, OnInit } from '@angular/core';
import { DataOrg } from '../../../Shared/dataOrg';
import { SystemRolesService } from '../system-roles.service'
import { NgForm } from '@angular/forms';

import { SystemRoles } from '../systemRoles.model';
@Component({
  selector: 'app-add-system-roles',
  templateUrl: './add-system-roles.component.html',
  styleUrls: ['./add-system-roles.component.css']
})
export class AddSystemRolesComponent implements OnInit {

  unamePattern = "^[a-zA-Z]{1,15}$";
  systemValid=new SystemRoles('',[new DataOrg('')],'','','','','','','','','','');
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

  constructor(private SystemRolesServiceSAdd: SystemRolesService)
   { 
     this.organizations=[];
   }

  ngOnInit() {
    this.SystemRolesServiceSAdd.getOrganizations()
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
const systemRolesModel=new SystemRoles(value.language,
                                        this.organizations,
                                        value.roleId,
                                        value.roleName,
                                        value.effectiveDate,
                                        value.endDate,
                                        'value.createBy',
                                        'value.createDate',
                                        'value.modifiedBy',
                                        'value.modifiedDate',
                                        'value.deletedBy',
                                        'value.deletedDate'
                                        )
    this.SystemRolesServiceSAdd.addSystemRoles(systemRolesModel)
    .subscribe(
      (response)=>{
        alert("Record Saved Successfully")
        this.organizations=[]
      },
      (error)=>alert("Somthing went Worng")
    );
    form.reset();
    // this.SystemRolesServiceSAdd.addSystemRoles(form.value)
    // .subscribe(
    //   (Response)=>alert("Record Saved Successfully"),
    //   (error)=>alert("Somthing went worng")
    // );
    // form.reset();

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
