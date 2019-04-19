import { Component, OnInit } from '@angular/core';

import { OrganizationService } from '../organization.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-search-organizations',
  templateUrl: './search-organizations.component.html',
  styleUrls: ['./search-organizations.component.css']
})
export class SearchOrganizationsComponent implements OnInit {
 
 
  type=['Bussiness Unit',
                'Division',
                'Locale',
                'Location'

          ]
         
  isDisable=false;
  organizationd=[];

  constructor(private organizationSer:OrganizationService) { }

  ngOnInit() {

  }

  onSubmit(ngforms:NgForm){
    const value=ngforms.value

    const names=value.orgName;
    const statuss=value.orgCode;
    let types=value.type;

    if(types=="All"){
      types=""

    }

  if((names=="") && (statuss=="") && (types=="") ){
    alert("Enter The Content Name and Select The status Type")
  }
    else if((statuss=="") && (types=="") ){
  
    this.organizationSer.getOrgName(names)
  .subscribe(
   (data)=>{
     if(data==""){
       this.isDisable=false;
       alert("No Record Found")
     }
     else
     {
      this.onDisable();
  this.organizationd=data
     }
   }
  );
  }
  else if((names=="") && (types=="")){
    this.organizationSer.getOrgStatus(statuss)
    .subscribe(
     (data)=>{
       if(data==""){
         this.isDisable=false;
         alert("No Record Found")
       }
       else
       {
        this.onDisable();
    this.organizationd=data
       }
     }
    );
  }
  else if((names=="") && (statuss=="")){
    this.organizationSer.getOrgTypes(types)
    .subscribe(
     (data)=>{
       if(data==""){
         this.isDisable=false;
         alert("No Record Found")
       }
       else
       {
        this.onDisable();
    this.organizationd=data
       }
     }
    );
  }
  else if((names=="")){
    this.organizationSer.getOrgStatuss(statuss,types)
    .subscribe(
     (data)=>{
       if(data==""){
         this.isDisable=false;
         alert("No Record Found")
       }
       else
       {
        this.onDisable();
    this.organizationd=data
       }
     }
    );
  }
  else if((types=="")){
    this.organizationSer.getOrgnames(names,statuss)
    .subscribe(
     (data)=>{
       if(data==""){
         this.isDisable=false;
         alert("No Record Found")
       }
       else
       {
        this.onDisable();
    this.organizationd=data
       }
     }
    );
  }
  else{
    this.organizationSer.getOrgData(names,statuss,types)
  .subscribe(
   (data)=>{
     if(data==""){
       this.isDisable=false;
       alert("No Record Found")
     }
     else
     {
      this.onDisable(); 
  this.organizationd=data
     }
   }
  );
  }
  
  }
  onDisable(){
    this.isDisable=true;
  }
}
