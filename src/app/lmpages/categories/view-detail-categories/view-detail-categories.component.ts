import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { MultiDataCont } from '../../../Shared/multiDataCont';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { CategoriesService } from '../categories.service';
import { NgForm } from '@angular/forms';
import { AddserviceService } from '../../../service/addservice.service';

import { Categorie } from '../categories.model';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-view-detail-categories',
  templateUrl: './view-detail-categories.component.html',
  styleUrls: ['./view-detail-categories.component.css']
})
export class ViewDetailCategoriesComponent implements OnInit {

  
  id: number;
  ids:number;
  editMode = false;
  categoriesForm = new FormGroup({
    'language':new FormControl(''),
    'name': new FormControl(''),
    'description': new FormControl(''),
    'startDate':new FormControl(''),
    'endDate': new FormControl(''),
    'lms': new FormControl(''),
    'isCategorySearchable':new FormControl(''),
    'status':new FormControl(''),
    // 'content':categoriesContent

  });  
  name:string;
  contacts:Array<MultiDataCont>;
  
  languages=['English',
            'Chinese - China',
            'English - Australia',
            'English - United Kingdom',
            'Francais - Canada',
            'German - Germany',
            'Italian - Italy',
            'Portuguese - Brazil',
            'Espariol - Mexico'
          ];

  isCategorySearchable=['Yes','No'];
  status=['Active','Inactive'];


  contentss=[
    {

    }
  ]

  public isCollapsed=true;
  constructor(private _script: ScriptLoaderService,
              private router: Router,
              private route: ActivatedRoute,
              private categoriesservice:CategoriesService,
              private courseServices:AddserviceService
              ) {
    this.contacts=[];

   }
  ngOnInit() {
   this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;

    this.initForm();
        }
      );
      this.categoriesservice.getContent()
      .subscribe(
        (data: any[])=>{
          //console.log(data); 
          this.contentss=data
  
        },
       (error)=> console.log(error)
      );

  }
  private initForm() {
   
    if (this.editMode) {
      const categoriesds = this.categoriesservice.getCategorieid(this.id).
      subscribe(
        (data)=>{
          this.contacts=data.content
          this.categoriesForm.setValue({
            language:data.language,
            name:data.name,
            description:data.description,
            startDate:data.startDate,
            endDate:data.endDate,
            lms:data.lms,
            isCategorySearchable:data.isCategorySearchable,
            status:data.status
          })
        })

    



  }
}
}
