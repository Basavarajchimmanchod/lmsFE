import { Component, OnInit } from '@angular/core';
import { MultiDataCont } from '../../../Shared/multiDataCont';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';

import { UsersService } from '../users.service';
import { User } from '../user.model';
import { DataOrg } from '../../../Shared/dataOrg';

@Component({
  selector: 'app-view-user-detail',
  templateUrl: './view-user-detail.component.html',
  styleUrls: ['./view-user-detail.component.css']
})
export class ViewUserDetailComponent implements OnInit {

  id: number;
  ids:number;
  editMode = false;


  userForm = new FormGroup({
    'userName':new FormControl(''),
    'firstName':new FormControl(''),
    'lastName':new FormControl(''),
    'email':new FormControl(''),
    'language':new FormControl(''),
    // 'organization':new FormControl(''),
    // 'institutionalRoles':new FormControl(''),
    // 'systemRoles':new FormControl(''),
    'password':new FormControl(''),
    'startDate':new FormControl(''),
    'endDate':new FormControl(''),
    'voice':new FormControl(''),
    'mobile':new FormControl(''),
    'fax':new FormControl(''),
    'affiliation':new FormControl(''),
    'street':new FormControl(''),
    'city':new FormControl(''),
    'country':new FormControl(''),
    'state':new FormControl(''),
    'postalCode':new FormControl('')



  });

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
          
          country=['india',
                    // 'China',
                    // 'Australia',
                    // 'United Kingdom',
                    // 'Canada',
                    // 'Germany',
                    // 'Italy',
                    // 'Brazil'
          ]
          states=['Andaman-Nicobar',
          'Andra-Pradesh',
          'Arunachal-Pradesh',
          'Assam',
          'Bihar',
          'Chandigarh',
          'Daman-Dio',
          'Dehli',
          'Goa',
          'Gujhrath',
          'Himachal-Pradesh',
          'Hariyana',
          'Jharkand',
          'Jammu& Kashmir',
          'Karnataka',
          'Kerala',
          'Lashadeep',
          'Maharastra',
          'Meghalaya',
          'Manipur',
          'Madhya-Pradesh',
          'Mizorn',
          'Nagaland',
          'Oddisha',
          'Punjab',
          'Pondicherry',
          'Sikkim',
          'Rajastan',
          'Teleganna',
          'Tamil-Nadu',
          'Tripura',
          'Uttranchal',
          'Uttar-Pradesh',
          'West-Bengal'
 ]

 organizationd=[]
 organizations:Array<DataOrg>;
 institutionalRolesd=[];
 institutionaldata:string ;
 SystemRolesd=[];
 systemdata:string;
 organizationsd=[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userSer:UsersService
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

     
    this.userSer.getOrganizations()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.organizationsd=data

      },
     (error)=> console.log(error)
    );

    this.userSer.getInstitutionalRoles()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.institutionalRolesd=data
      },
     (error)=> console.log(error)
    );


    this.userSer.getSystemRoles()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.SystemRolesd=data

      },
     (error)=> console.log(error)
    );

      this.initForm();
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
  addInstitutionalRoles(name)
  {
    this.institutionaldata=name;
  }
  addSystemRoles(names){
  
  this.systemdata=names;
  }
  removeOrganization(organizationd)
  {
    let index=this.organizationd.indexOf(organizationd);
    this.organizations.splice(index,1);
  }
  
  removeInstitutionalRoles(names)
  {
    // let index=this.institutionaldata.indexOf(names);
    // this.institutionaldata.splice(index,1);
  }


  private initForm() {
  

    if (this.editMode) {
  
      this.userSer.getUserid(this.id)
      .subscribe((data)=>{

        this.organizations=data.organization
       this.systemdata=data.systemRoles
       this.institutionaldata=data.institutionalRoles

      this.userForm.setValue({
        userName:data.userName,
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        language:data.language,
        // organization:data.organization,
        // institutionalRoles:data.institutionalRoles,
        // systemRoles:data.systemRoles,
        password:data.password,
        startDate:data.startDate,
        endDate:data.endDate,
        voice:data.voice,
        mobile:data.mobile,
        fax:data.fax,
        affiliation:data.affiliation,
        street:data.street,
        city:data.city,
        country:data.country,
        state:data.state,
        postalCode:data.postalCode,


      })
       
      })
  }
  
}


}
