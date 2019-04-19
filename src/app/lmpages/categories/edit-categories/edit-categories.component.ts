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
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit, AfterViewInit {
  
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
  // this.categoriesForm = new FormGroup({
  //     'language':new FormControl(categoriesLanguage),
  //     'name': new FormControl(categoriesName),
  //     'description': new FormControl(categoriesDescription),
  //     'startDate':new FormControl(categoriesStartDate),
  //     'endDate': new FormControl(categoriesEndDate),
  //     'lms': new FormControl(categoriesLms),
  //     'isCategorySearchable':new FormControl(categoriesIsCategorySearchable),
  //     'status':new FormControl(categoriesStatus),
  //     'content':categoriesContent

  //   });
  }
  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/form-plugins.js');
  }


  onSubmit(forname:NgForm,ids:number){
  
    const value=forname.value;
     const userModel = new Categorie(value.name,
                                value.description,
                                value.language, 
                                value.startDate,
                                value.endDate,
                                value.lms,
                                value.isCategorySearchable,
                                value.status,
                                this.contacts,
                                'value.createBy',
                                'value.createDate',
                                'value.modifiedBy',
                                'value.modifiedDate',
                                'value.deletedBy',
                                'value.deletedDate');

    
        if(confirm("Do you want to save changes?")== true)
        {
this.categoriesservice.editcategories(userModel,this.id)
    .subscribe(
      (response)=>alert("Successfully Updated"),
      (error)=>console.log(error)
    );

console.log("Content data " , this.contacts )
            this.router.navigate(['/view-Categories']);

    }
    }


onAdd(name)
  {
   let contact=new MultiDataCont(name);
    this.contacts.push(contact);

  }
  onAddContent(name:string) {
    let contact=new MultiDataCont(name);
    this.contacts.push(contact);
  }

  onadd2(name)
  {
    let contact=new MultiDataCont(name);
    this.contacts.push(contact);

  }
  onadd3(name)
  {
   let contact=new MultiDataCont(name);
    this.contacts.push(contact);
  }
  addContact(Contact)
  {
    let contact=new Contact(name);
    this.contacts.push(contact);

  }
  removeContent(contact)
  {
    
    let index=this.contacts.indexOf(contact);
    this.contacts.splice(index,1);
  }

 
public refresh(){
  window.location.reload();
}
}
