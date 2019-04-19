import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { Organizations } from '../../Organizations/organizations.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {


  organizationd=[];
  institutionalRolesd=[];
  systemRoled=[];
usersd=[];
  isDisable=false;

  constructor(private userSer:UsersService) { }

  ngOnInit() {


    this.userSer.getOrganizations()
    .subscribe(
      (data)=>this.organizationd=data,
      (error)=>console.log(error)
    )

    this.userSer.getInstitutionalRoles()
    .subscribe(
      (data)=>this.institutionalRolesd=data,
      (error)=>console.log(error)
    )


    this.userSer.getSystemRoles()
    .subscribe(
      (data)=>this.systemRoled=data,
      (error)=>console.log(error)
    )


  }

onSubmit(userform:NgForm){

  const value=userform.value;

  const userNames=value.keywords;

  const firstNames=value.firstName;
  const lastNames=value.lastName;
  let institutionalRoless=value.institutionalRoles;
  let systemRoless=value.systemRole;


  

    if(institutionalRoless=="All"){
      institutionalRoless=""
    }


    if(systemRoless=="All"){
      systemRoless=""
    }

console.log(userNames);
console.log(firstNames);
console.log(lastNames);
console.log(institutionalRoless);
console.log(systemRoless);






    
if((userNames=="") && (firstNames=="") && (lastNames=="")&& (institutionalRoless=="")&& (systemRoless=="") ){
  alert("Enter The Requried fileds and Search")
}
  else if((firstNames=="") && (lastNames=="")&& (institutionalRoless=="")&& (systemRoless=="")){

  this.userSer.getUserName(userNames)
.subscribe(
 (data)=>{
   if(data==""){
     this.isDisable=false;
     console.log("me 1")
     alert("No Record Found")
   }
   else
   {
    this.onDisable();
this.usersd=data
   }
 }
);
}
else if((userNames=="")){
  this.userSer.getUserFilters(firstNames,lastNames,institutionalRoless,systemRoless)
  .subscribe(
   (data)=>{
     if(data==""){
       this.isDisable=false;
       console.log("me 1dddd")

       alert("No Record Found")
     }
     else
     {
      this.onDisable();
  this.usersd=data
     }
   }
  );
}
else{
  this.userSer.getUserall(userNames,firstNames,lastNames,institutionalRoless,systemRoless)
.subscribe(
 (data)=>{
   if(data==""){
     this.isDisable=false;
     console.log("me sdsds1"+data)

     alert("No Record Found")
   }
   else
   {
    this.onDisable();
    console.log("The Entered Data is "+ data)

this.usersd=data
   }
 }
);
}

}
onDisable(){
  this.isDisable=true;
}



}
