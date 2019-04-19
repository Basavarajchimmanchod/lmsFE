import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Subscription } from 'rxjs/Subscription';

import { Discipline } from '../discipliness.model';
import { DisciplinesService  } from '../disciplines.service';


@Component({
  selector: 'app-search-disciplines',
  templateUrl: './search-disciplines.component.html',
  styleUrls: ['./search-disciplines.component.css']
})
export class SearchDisciplinesComponent implements OnInit {
  disciplined=[];
  disciplines:Discipline[];
  discipliness: Discipline;
  disciplineds=[];
  subscription: Subscription;
  id:number;
  
  status=['Active','Inactive'];

  
isDisable=false;
constructor( private disciplinesSer:DisciplinesService) { }

  ngOnInit() {
    this.disciplinesSer.getDiscipliness()
   
    this.subscription = this.disciplinesSer.disciplinesChanged
       .subscribe(
         (terms: Discipline[]) => {
           this.disciplineds = terms;
         }
       );
     this.disciplines = this.disciplinesSer.getDisciplines();
 
   }
 
   
   onSubmit(form:NgForm){
     const value=form.value
 
     const names=value.name
     const statuss=value.status;
 
     console.log("The Start Date is"+statuss);
     console.log("The Start "+names);

 
     if((names=="") && (statuss=="") ){
       console.log("The Date is empty");
       alert("Enter The Discipline Name and Select The status Type")
     }
       else if(statuss==""){

       this.disciplinesSer.getDisciplinenameData(names)
    .subscribe(
      (data)=>{
        if(data==""){
          this.isDisable=false;
          alert("No Record Found")
        }
        else
        {
         this.onDisable();
 this.disciplined=data
        }
      }
    );
     }
     else{
       console.log("The Entered Data is "+ statuss)
       this.disciplinesSer.getDisciplineData(names,statuss)
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

 this.disciplined=data
        }
      }
    );
     }
    
 
     }
     onDisable(){
       this.isDisable=true;
     }
   }