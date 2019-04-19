import { Component, OnInit } from '@angular/core';
import { DataOrg } from '../../../Shared/dataOrg';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { InstitutionalRolesService } from '../institutional-roles.service';
import { InstitutionalRoles } from '../institutionalRoles.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-institutional-roles',
  templateUrl: './edit-institutional-roles.component.html',
  styleUrls: ['./edit-institutional-roles.component.css']
})
export class EditInstitutionalRolesComponent implements OnInit {

  id: number;
  ids:number;
  editMode = false;

  institutionalRolesForm = new FormGroup({
    'language':new FormControl(''),
    // 'lms': new FormControl(''),
    'code':new FormControl(''),
    'name':new FormControl(''),
    'effectiveDate': new FormControl(''),
    'endDate': new FormControl(''),


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

          organizationd=[]
          organizations:Array<DataOrg>;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private institutionalServ:InstitutionalRolesService
             ) {
          this.organizations=[];

          }
          isValidFormSubmitted = false;

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
        }
      );
      this.initForm();

      this.institutionalServ.getOrganizations()
      .subscribe(
        (data: any[])=>{
          //console.log(data); 
          this.organizationd=data
  
        },
       (error)=> console.log(error)
      );

  }
  private initForm() {
    this.isValidFormSubmitted = true;

    if (this.editMode) {

      this.institutionalServ.getInstitutionalid(this.id)
      .subscribe((data)=>{
        console.log("Data is value",data)
        this.organizations=data.lms
      this.institutionalRolesForm.setValue({
        language:data.language,
        // lms:data.lms,
        code:data.code,
        name:data.name,
        effectiveDate:data.effectiveDate,
        endDate:data.endDate
      })
       
      })
  }
  
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


onSubmit(formName:NgForm,ids:Number){
  if(this.editMode){
    const value=formName.value;
    const institutionalModel = new InstitutionalRoles(value.language,
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
                               'value.deletedDate');

   console.log("Edited Data",institutionalModel);
   console.log("id fro submit",this.id);
   
       if(confirm("Do you want to save changes?")== true)
       {
         console.log("Form Data",formName);
         console.log("ids Values",this.idsd);
this.institutionalServ.editInstitutionalRoles(institutionalModel,this.id)
   .subscribe(
     (response)=>alert("Successfully Updated"),
     (error)=>console.log(error)
   );
  //  this.refresh();
           this.router.navigate(['/adminindex']);

   }
   }
  }

  public refresh(){
    window.location.reload();
  }
}

