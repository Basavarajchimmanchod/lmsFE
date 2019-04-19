import { Component, OnInit } from '@angular/core';
import { DataOrg } from '../../../Shared/dataOrg';

import { NgForm } from '@angular/forms';
import { SystemRolesService } from '../system-roles.service';
@Component({
  selector: 'app-search-system-roles',
  templateUrl: './search-system-roles.component.html',
  styleUrls: ['./search-system-roles.component.css']
})
export class SearchSystemRolesComponent implements OnInit {

  organizationd=[]
  Systemrolesd=[]
  
  organizations:Array<DataOrg>;

  isDisable=false;

constructor(private systemAddServices:SystemRolesService) {
    this.organizations=[];
   }

  ngOnInit() {

    
    this.systemAddServices.getOrganizations()
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
  alert("Enter The System Role Name and Select The status Type")
}
  else if((codes=="")){

  this.systemAddServices.getsystemName(names)
.subscribe(
 (data)=>{
   if(data==""){
     this.isDisable=false;
     alert("No Record Found")
   }
   else
   {
    this.onDisable();
this.Systemrolesd=data
   }
 }
);
}
else if((names=="")){
  this.systemAddServices.getsystemCode(codes)
  .subscribe(
   (data)=>{
     if(data==""){
       this.isDisable=false;
       alert("No Record Found")
     }
     else
     {
      this.onDisable();
  this.Systemrolesd=data
     }
   }
  );
}
else{
  this.systemAddServices.getsystemData(names,codes)
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

this.Systemrolesd=data
   }
 }
);
}

}
onDisable(){
  this.isDisable=true;
}

}
