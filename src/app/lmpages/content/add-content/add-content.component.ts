import { Component, OnInit, OnDestroy, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { Response } from '@angular/http';
import { MultiDataCont } from '../../../Shared/multiDataCont';

import { Content } from '../content.model'
import { HttpErrorResponse } from '@angular/common/http';
import { AddserviceService } from '../../../service/addservice.service'
import { HttpClient } from '@angular/common/http';

import {ContentService} from '../content.service'
import { Observable, Subscription } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { DataOrg } from '../../../Shared/dataOrg';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddResourcesComponent implements OnInit, AfterViewInit {
  
  unamePattern = "^[a-zA-Z]{1,15}$";
  reg = "/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;"

  contentValid=new Content('',[new DataOrg('')],'','','','','','',new Blob,'',0,'','','','','','');
  isValidFormSubmitted = false;

  numbersObsSub:Subscription;
  customObsSub:Subscription;

  Languages=['English',
             'Chinese - China',
             'English - Australia',
             'English - United Kingdom',
             'Francais - Canada',
             'German - Germany',
             'Italian - Italy',
             'Portuguese - Brazil',
             'Espariol - Mexico'
];

types=['File',
      'Link',
      'pages'
];
  
  status=['Active','Inactive'];
  organizationd=[]
  organizations:Array<DataOrg>;
 // contentModel = new Contentdata('', '','','','','','','','','');
  errorMsg = '';
  organizationsd=[];
  public isCollapsed=true;
  constructor(private _script: ScriptLoaderService,
    private _courseServices: AddserviceService,
    private httpService: HttpClient,
    private contentService:ContentService) {
      this.organizations=[];
  }

  ngOnInit() {
    this.contentService.getOrganizations()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.organizationsd=data

      },
     (error)=> console.log(error)
    );

  }
  

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/form-plugins.js');
  }

  onSubmit(form: NgForm){
   

   const value=form.value;
    const contentModel = new Content(value.language, 
                                          this.organizations,
                                          value.name,
                                          value.type,
                                          value.discription,
                                          value.startDate,
                                          value.endDate,
                                          value.status,
                                          value.pic,
                                          value.contactName,
                                          value.contactNumber,
                                          'value.createBy',
                                          'value.createDate',
                                          'value.modifiedBy',
                                          'value.modifiedDate',
                                          'value.deletedBy',
                                          'value.deletedDate'
                                          );
     this.contentService.addContents(contentModel)
     .subscribe(
       (response)=>{
         alert("Record Saved Successfully")
         this.organizations=[]
       },
       (error)=>alert(error)
     );
    form.reset();
  }

  onadd2(name)
  {
    let organization=new DataOrg(name);
    this.organizations.push(organization);
    console.log("Organization Data", this.organizations)

  }
  onadd3(name)
  {
    let organizationss=new MultiDataCont(name);
    this.organizationd.push(organizationss);
  }
  removeOrganization(organization)
  {
    let index=this.organizations.indexOf(organization);
    this.organizations.splice(index,1);
  }
}
