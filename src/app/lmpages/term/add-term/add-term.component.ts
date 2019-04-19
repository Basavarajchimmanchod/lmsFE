import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { Term } from '../term.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AddserviceService } from '../../../service/addservice.service'
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import  { TermsService } from '../terms.service';
@Component({
  selector: 'app-add-term',
  templateUrl: './add-term.component.html',
  styleUrls: ['./add-term.component.css']
})
export class AddTermComponent implements OnInit {

  unamePattern = "^[a-zA-Z]{1,15}$";
  reg = "/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;"

  term=new Term('','','',new Date(),new Date(),'','','','','','');
  isValidFormSubmitted = false;

  constructor(private termServices: TermsService,
    private httpService: HttpClient) { }

  ngOnInit() {
// const startDatesVal=new Date();
// // alert("The StartDate Value is ");
// const yearDate=startDatesVal.getFullYear();
// alert("The start year is"+yearDate)
    
  }

   onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
   }
   this.isValidFormSubmitted = true;
    const value=form.value

 const termModel = new Term(value.termName,
                                value.termDescription,
                                'value.duration',
                                value.startDate,
                                value.endDate,
                                'value.createBy',
                                'value.createDate',
                                'value.modifiedBy',
                                'value.modifiedDate',
                                'value.deletedBy',
                                'value.deletedDate');

  
    this.termServices.addTerms(termModel)
    .subscribe(
      (response)=>alert("Record Added Successfully"),
      (error)=>console.log(error)
    );
  form.resetForm();
    }



    // private datesvalues(values:Date){
     
    //   const datesvalue=values.getFullYear();
    //   alert("The value Of year"+datesvalue)
    // }
}
