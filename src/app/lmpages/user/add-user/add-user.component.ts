import { Component, OnInit } from '@angular/core';
import { DataOrg } from '../../../Shared/dataOrg';
import { NgForm } from '@angular/forms';

import { UsersService } from '../users.service';
import { User } from '../user.model';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  organizationsd=[];
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

  constructor(private userSer:UsersService) {
    this.organizations=[];
   }

  ngOnInit() { 
    
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
onSubmit(formData:NgForm){
  const value=formData.value

const userModels=new User(value.userName,
                          value.firstName,
                          value.lastName,
                          value.email,
                          value.language,
                          this.organizations,
                          this.institutionaldata,
                          this.systemdata,
                          value.password,
                          value.startDate,
                          value.endDate,
                          value.voice,
                          value.mobile,
                          value.fax,
                          value.affiliation,
                          value.street,
                          value.city,
                          value.country,
                          value.state,
                          value.postalCode,
                          'value.createBy',
                          'value.createDate',
                          'value.modifiedBy',
                          'value.modifiedDate',
                          'value.deletedBy',
                          'value.deletedDate')

    console.log("The Value Of System Forms Data is",userModels)


 this.userSer.addUsers(userModels)
 .subscribe(
   (error)=>{
     alert("Record Saved Successfully");

   },
   (error)=>alert(error)
 )
 formData.reset();
 this.organizations=[];
 this.institutionaldata="";
 this.systemdata="";
}
}
