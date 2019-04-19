import { Component, OnInit } from '@angular/core';
import { DataOrg } from '../../../Shared/dataOrg';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';

import { SystemRolesService } from '../system-roles.service';
import { SystemRoles } from '../systemRoles.model';


@Component({
  selector: 'app-edit-system-roles',
  templateUrl: './edit-system-roles.component.html',
  styleUrls: ['./edit-system-roles.component.css']
})
export class EditSystemRolesComponent implements OnInit {

  id: number;
  ids:number;
  editMode = false;


  systemRolesForm = new FormGroup({
    'language':new FormControl(''),
    // 'organization': '',
    'roleId':new FormControl(''),
    'roleName':new FormControl(''),
    'effectiveDate': new FormControl(''),
    'endDate': new FormControl(''),


  });

  language=['English',
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private systemRolesS:SystemRolesService
  ) {
    this.organizations=[];
   }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
        }
      );
      this.initForm();

            
            this.systemRolesS.getOrganizations()
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
  this.organizationd.push(organizationss);

}
onadd3(name)
{
  let organizationss=new DataOrg(name);
  this.organizationd.push(organizationss);
}



private initForm() {
  

  if (this.editMode) {

    this.systemRolesS.getSystemid(this.id)
    .subscribe((data)=>{
      this.organizations=data.organization
    this.systemRolesForm.setValue({
      language:data.language,
      // lms:data.lms,
      roleId:data.roleId,
      roleName:data.roleName,
      effectiveDate:data.effectiveDate,
      endDate:data.endDate
    })
     
    })
}

}

removeOrganization(organization)
{
  let index=this.organizations.indexOf(organization);
  this.organizations.splice(index,1);
}


onAddOrganization(orgName:string) {
  let organizationss=new DataOrg(orgName);
  this.organizations.push(organizationss);
} 



onSubmit(formName:NgForm,ids:Number){
  if(this.editMode){
    const value=formName.value;
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

   console.log("Edited Data",systemRolesModel);
   console.log("id fro submit",this.id);
   
       if(confirm("Do you want to save changes?")== true)
       {
this.systemRolesS.editSystemRoles(systemRolesModel,this.id)
   .subscribe(
     (response)=>alert("Successfully Updated"),
     (error)=>console.log(error)
   );
           this.router.navigate(['/view-System-Roles']);

   }
   }
  }
}
