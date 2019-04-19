import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { MultiDataCont } from '../../../Shared/multiDataCont';
import { Categorie } from '../categories.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AddserviceService } from '../../../service/addservice.service'
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
  
  unamePattern = "^[a-zA-Z]{1,15}$";
  categoriesValid=new Categorie('','','','','','','','',[new MultiDataCont('')],'','','','','','');
  isValidFormSubmitted = false;

    contentss=[
      {

      }
    ]
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

  errorMsg = '';


  public isCollapsed=true;
  constructor(private _script: ScriptLoaderService,
    private courseServices: AddserviceService,
    private httpService: HttpClient,
    private addCategories:CategoriesService) {
    this.contacts=[];

   }

  ngOnInit() {
    this.addCategories.getContent()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.contentss=data

      },
     (error)=> console.log(error)
    );
  }

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/form-plugins.js');
  }
  onAdd(name)
  {
   let contact=new MultiDataCont(name);
    this.contacts.push(contact);

  }
  
  removeContent(contact)
  {
    let index=this.contacts.indexOf(contact);
    this.contacts.splice(index,1);
  }

  onSubmit(form: NgForm) {
    const value=form.value

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


    this.addCategories.addcategories(userModel)
    .subscribe(
      (response)=>{
        alert("Record Saved Successfully")
        this.contacts=[]
      },
      (error)=>alert("Something went worng")
    );
  form.reset();

    }

}
