import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TermsService } from '../terms.service'
import { NgForm } from '@angular/forms';
import { AddserviceService } from '../../../service/addservice.service'

import { Term } from '../term.model';

@Component({
  selector: 'app-edit-term',
  templateUrl: './edit-term.component.html',
  styleUrls: ['./edit-term.component.css']
})
export class EditTermComponent implements OnInit {

  id: number;
  ids:number=0;
  editMode = false;
  // termForm: FormGroup;
  termsdata=[];

   termForm = new FormGroup({
      'termName':new FormControl('',Validators.required),
      'termDescription': new FormControl(''),
      'startDate':new FormControl(''),
      'endDate': new FormControl(''),
      

    });

  public  idsd:number=0;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private termServicess:TermsService,
              private TermAddService:AddserviceService
              ) {
                
               }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;

          this.termServicess.searchterm(this.id)
          .subscribe((termsd:Term[])=>{
            this.termsdata=termsd
            console.log("load data for edit page",this.termsdata)
            this.termServicess.setTermsById(termsd);
          
          });
    

        }
      );
      
this.initForm();
      console.log("init-id",this.id)
       this.idsd=this.id
            console.log("init-ids----",this.idsd)
  }
  private initForm() {
    // let termTermName = '';
    // let termTermDescription  = '';
    // let termStartDate ;
    // let termendDate ;
    
    
    

    if (this.editMode) {

      this.termServicess.getTermsidData(this.id)
      .subscribe((data)=>{
        console.log(data);
      //this.termsdata=data;
      for(let c of data){
      console.log(" Edit form  editMode ",c)
    } 
      // termTermName=c.termName;
      // termTermDescription = c.termDescription;
      // termStartDate=c.startDate;
      // termendDate=c.endDate;
      // console.log("Term Name in",termTermName)
      // console.log("Term Description in",termTermDescription)
      // console.log("Term StartDate in",termStartDate)
      // console.log("Term EndDate in ",termendDate)

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
// Ongeterm(){
//   this.termServicess.searchterm(this.id)
//   .subscribe((data)=>{
//     console.log("Search Results--------",data);

//   },
//   (error)=>{
//     console.log("Something error")
//   }
//   )
// }

  onSubmit(forname:NgForm,ids:number){
    if(this.editMode){
    const value=forname.value;
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

    console.log("Edited Data",termModel);
    console.log("id fro submit",this.id);
    
        if(confirm("Do you want to save changes?")== true)
        {
this.termServicess.editterm(termModel,this.id)
    .subscribe(
      (response)=>alert("Successfully Updated"),
      (error)=>console.log(error)
    );
            this.router.navigate(['/view-Term']);


    }
    }

  }
  public refresh(){
    window.location.reload();
  }
}
