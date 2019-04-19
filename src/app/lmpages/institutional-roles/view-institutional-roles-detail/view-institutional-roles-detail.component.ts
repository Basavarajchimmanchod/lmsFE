import { Component, OnInit } from '@angular/core';
import { DataOrg } from '../../../Shared/dataOrg';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { InstitutionalRolesService } from '../institutional-roles.service';

@Component({
  selector: 'app-view-institutional-roles-detail',
  templateUrl: './view-institutional-roles-detail.component.html',
  styleUrls: ['./view-institutional-roles-detail.component.css']
})
export class ViewInstitutionalRolesDetailComponent implements OnInit {

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

}

