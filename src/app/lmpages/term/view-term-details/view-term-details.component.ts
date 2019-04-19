import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl,  Validators } from '@angular/forms';

import { TermsService } from '../terms.service';


@Component({
  selector: 'app-view-term-details',
  templateUrl: './view-term-details.component.html',
  styleUrls: ['./view-term-details.component.css']
})
export class ViewTermDetailsComponent implements OnInit {

  
  id: number;
  ids:number=0;
  editMode = false;
  termsdata=[];

   termForm = new FormGroup({
      'termName':new FormControl('',Validators.required),
      'termDescription': new FormControl(''),
      'startDate':new FormControl(''),
      'endDate': new FormControl(''),
      

    });

  public  idsd:number=0;
  constructor(private route: ActivatedRoute,
              private termServicess:TermsService,
              ) {
                
               }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
       }
      );
      
this.initForm();
      
  }
  private initForm() {
     

    if (this.editMode) {

      this.termServicess.getTermsidData(this.id)
      .subscribe((data)=>{
      this.termsdata=data;
      for(let c of data){
      }  

      this.termForm.setValue({
        termName:data.termName,
        termDescription:data.termDescription,
        startDate:data.startDate,
        endDate:data.endDate
      })
      })
            
  }
 }
  ngAfterViewInit() {
  }

}
