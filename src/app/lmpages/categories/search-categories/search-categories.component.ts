import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CategoriesService } from '../categories.service';
@Component({
  selector: 'app-search-categories',
  templateUrl: './search-categories.component.html',
  styleUrls: ['./search-categories.component.css']
})
export class SearchCategoriesComponent implements OnInit {

  isCategorySearchable=['Yes','No'];

  status=['Active','Inactive'];
  categoriesd=[]
  constructor(private categoriesSer:CategoriesService) { }

  ngOnInit() {
  }
  isDisable=false
  onSubmit(forms:NgForm){

    const value=forms.value;

    const names=value.name;
    const searchable=value.isCategorySearchable;
    const statuss=value.status

    console.log("The names are",names);
    console.log("The searchable is ", searchable);
    console.log("The status is ",statuss)

    if((names=="") && (searchable=="") && (statuss=="") ){
      alert("Enter The Categories Name and Select The status Type")
    }
      else if((statuss=="") && (searchable=="")){
    
      this.categoriesSer.getCategorieName(names)
    .subscribe(
     (data)=>{
       if(data==""){
         this.isDisable=false;
         alert("No Record Found")
       }
       else
       {
        this.onDisable();
    this.categoriesd=data
       }
     }
    );
    }
    else{
      this.categoriesSer.getCategorieData(names,searchable,statuss)
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
    
    this.categoriesd=data
       }
     }
    );
    }
    
    }
    onDisable(){
      this.isDisable=true;
    }


}
