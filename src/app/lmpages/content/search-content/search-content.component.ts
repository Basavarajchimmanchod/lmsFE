import { Component, OnInit } from '@angular/core';

import { ContentService } from '../content.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.css']
})
export class SearchResourcesComponent implements OnInit {

  types=['All',
    'File',
      'Link',
      'pages'
];
  
  status=['Active','Inactive'];

  categoriesd=[];
  Contentsd=[];
  isDisable=false;
  constructor(private contentSer:ContentService) { }

  ngOnInit() {
    this.contentSer.getCategories()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.categoriesd=data

      },
     (error)=> console.log(error)
    );
  }

  onSubmit(ngforms:NgForm){
    const value=ngforms.value

    const names=value.contentName;
    const statuss=value.status;
    let types=value.type;

    if(types=="All"){
      types=""
     
    }

  if((names=="") && (statuss=="") && (types=="") ){
    alert("Enter The Content Name and Select The status Type")
  }
    else if((statuss=="") && (types=="") ){
  
    this.contentSer.getContentName(names)
  .subscribe(
   (data)=>{
     if(data==""){
       this.isDisable=false;
       alert("No Record Found")
     }
     else
     {
      this.onDisable();
  this.Contentsd=data
     }
   }
  );
  }
  else if((names=="") && (types=="")){
    this.contentSer.getContentStatus(statuss)
    .subscribe(
     (data)=>{
       if(data==""){
         this.isDisable=false;
         alert("No Record Found")
       }
       else
       {
        this.onDisable();
    this.Contentsd=data
       }
     }
    );
  }
  else if((names=="") && (statuss=="")){
    this.contentSer.getContentTypes(types)
    .subscribe(
     (data)=>{
       if(data==""){
         this.isDisable=false;
         alert("No Record Found")
       }
       else
       {
        this.onDisable();
    this.Contentsd=data
       }
     }
    );
  }
  else if((names=="")){
    this.contentSer.getContentStatuss(statuss,types)
    .subscribe(
     (data)=>{
       if(data==""){
         this.isDisable=false;
         alert("No Record Found")
       }
       else
       {
        this.onDisable();
    this.Contentsd=data
       }
     }
    );
  }
  else if((types=="")){
    this.contentSer.getContentnames(names,statuss)
    .subscribe(
     (data)=>{
       if(data==""){
         this.isDisable=false;
         alert("No Record Found")
       }
       else
       {
        this.onDisable();
    this.Contentsd=data
       }
     }
    );
  }
  else{
    this.contentSer.getContentData(names,statuss,types)
  .subscribe(
   (data)=>{
     if(data==""){
       this.isDisable=false;
       alert("No Record Found")
     }
     else
     {
      this.onDisable(); 
  this.Contentsd=data
     }
   }
  );
  }
  
  }
  onDisable(){
    this.isDisable=true;
  }

}
