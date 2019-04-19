import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { TermsService } from '../terms.service';
import { Term } from '../term.model';

import { AddserviceService } from '../../../service/addservice.service';

@Component({
  selector: 'app-search-term',
  templateUrl: './search-term.component.html',
  styleUrls: ['./search-term.component.css']
})
export class SearchTermComponent implements OnInit {
  termsd=[];
terms:Term[];
termss: Term;
termsds=[];
subscription: Subscription;
id:number;

isDisable=false;
  constructor( private termServicess:TermsService) { }

  ngOnInit() {

    this.termServicess.getTermss()
   
   this.subscription = this.termServicess.termsChanged
      .subscribe(
        (terms: Term[]) => {
          this.termsds = terms;
        }
      );
    this.terms = this.termServicess.getTerms();

  }

  
  onSubmit(form:NgForm){
    const value=form.value

    const name=value.termName
    const startDates=value.startDate;

    console.log("The Start Date is"+startDates);

    // const termsd = this.termServicess.getTermName(name);
    // this.termServicess.getTermName(name)

    // this.subscription = this.termServicess.termsChanged
    // .subscribe(
    //   (terms: Term[]) => {
    //     this.termsd = terms;
    //   }
    // );getTermsname

    if(startDates==""){
      console.log("The Date is empty");
      this.termServicess.getTermsnameData(name)
   .subscribe(
     (data)=>{
       if(data==""){
         this.isDisable=false;
         alert("No Record Found")
       }
       else
       {
        this.onDisable();
this.termsd=data
       }
     }
   );
    }
    else{
      console.log("The Entered Data is "+ startDates)
      this.termServicess.getTermsData(name,startDates)
   .subscribe(
     (data)=>{
       if(data==""){
         this.isDisable=false;
         alert("No Record Found")
       }
       else
       {
        this.onDisable();
this.termsd=data
       }
     }
   );
    }
   

    }
    onDisable(){
      this.isDisable=true;
    }
  }

 

