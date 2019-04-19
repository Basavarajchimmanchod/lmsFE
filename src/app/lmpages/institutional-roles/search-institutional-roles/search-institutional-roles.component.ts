import { Component, OnInit } from '@angular/core';
import { DataOrg } from '../../../Shared/dataOrg';

import { NgForm } from '@angular/forms';
import { InstitutionalRolesService  } from '../institutional-roles.service';

@Component({
  selector: 'app-search-institutional-roles',
  templateUrl: './search-institutional-roles.component.html',
  styleUrls: ['./search-institutional-roles.component.css']
})
export class SearchInstitutionalRolesComponent implements OnInit {

  organizationd=[]
  organizationsd=[]
  
  organizations:Array<DataOrg>;

  isDisable=false;

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
onSubmit(formData:NgForm){
  const value=formData.value

const names=value.name;
const codes=value.code;

if((names=="") && (codes=="")  ){
  alert("Enter The Institutional Role Name and Select The status Type")
}
  else if((codes=="")){

  this.institutionalAddServices.getInstitutionalName(names)
.subscribe(
 (data)=>{
   if(data==""){
     this.isDisable=false;
     alert("No Record Found")
   }
   else
   {
    this.onDisable();
this.organizationsd=data
   }
 }
);
}
else if((names=="")){
  this.institutionalAddServices.getInstitutionalCode(codes)
  .subscribe(
   (data)=>{
     if(data==""){
       this.isDisable=false;
       alert("No Record Found")
     }
     else
     {
      this.onDisable();
  this.organizationsd=data
     }
   }
  );
}
else{
  this.institutionalAddServices.getInstitutionalData(names,codes)
.subscribe(
 (data)=>{
   if(data==""){
     this.isDisable=false;
     alert("No Record Found")
   }
   else
   {
    this.onDisable();
    console.log("The Entered Data is "+ data)

this.organizationsd=data
   }
 }
);
}

}
onDisable(){
  this.isDisable=true;
}

}
