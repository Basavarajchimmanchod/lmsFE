import { Component, OnInit, OnDestroy, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder,FormControl, FormArray, Validators } from '@angular/forms';

import { ContentService } from '../content.service';
import { NgForm } from '@angular/forms';
import { AddserviceService } from '../../../service/addservice.service'
import { MultiDataCont } from '../../../Shared/multiDataCont';

import { Content } from '../content.model';
import { DataOrg } from '../../../Shared/dataOrg';


@Component({
  selector: 'app-view-content-detail',
  templateUrl: './view-content-detail.component.html',
  styleUrls: ['./view-content-detail.component.css']
})
export class ViewContentDetailComponent implements OnInit {

  
  id: number;
  ids:number;
  editMode = false;
  contentForm: FormGroup;
  organizationd=[]
  organizations:Array<DataOrg>;

public  idsd:number=0;


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

types=['File',
      'Link',
      'pages'
];

status=['Active','Inactive'];

 public isCollapsed=true;
 constructor(private route: ActivatedRoute,
              private contentService: AddserviceService,
              private router: Router,
              private contentServicesEdit:ContentService)
              {
                this.organizations=[];
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
      console.log("init-id",this.id++)
       this.idsd=this.id
            console.log("init-ids----",this.idsd)

            
            this.contentServicesEdit.getOrganizations()
            .subscribe(
              (data: any[])=>{
                //console.log(data); 
                this.organizationd=data
        
              },
             (error)=> console.log(error)
            )
  }

    private initForm(){

      let contentLanguage = '' ;
      let contentOrganization =new FormArray([]);
      let contentName ='';
      let contentTypes = '';
      let contentDescription = '';
      let contentStartdate='';
      let contentEnddate='';
      let contentStatus="";
      let contentFilepath=new Blob;
     let contentContactname='';
      let contentContactnumber;

   
    if (this.editMode) {
       const contentds = this.contentServicesEdit.getContent(this.id);
      console.log(" Edit form ",contentds)
      contentLanguage=contentds.language;

      if(contentds['ownerOrganizations']){
        for(let contentOrg of contentds.ownerOrganizations){
         console.log("courses Organizations",contentOrg.orgName)
 this.organizations.push(contentOrg);
 contentOrganization.push(
           new FormGroup({
             'ownerOrganizations':new FormControl(contentOrg.orgName)
           })
         )
        }
      }


      contentName = contentds.name;
      contentTypes=contentds.type;
      contentDescription=contentds.discription;
      contentStartdate=contentds.startDate;
      contentEnddate=contentds.endDate;
      contentStatus=contentds.status;
     contentFilepath=contentds.pic;
      contentContactname=contentds.contactName;
     contentContactnumber=contentds.contactNumber;
    
     // categoriesisCategorySearchable.isCategorySearchable;
     console.log("contentLanguage",contentLanguage)
          console.log("contentName",contentName)
          console.log("contenttypes",contentTypes)
          console.log("contentDescription",contentDescription)
          console.log("contentstartdate",contentStartdate)
          console.log("contentenddate",contentEnddate)
          console.log("contentstatus",contentStatus)
          console.log("contentfilepath",contentFilepath)
          console.log("contentcontactname",contentContactname)
          console.log("contentcontactnumber",contentContactnumber)



  }
  this.contentForm = new FormGroup({
      'language':new FormControl(contentLanguage),
      'ownerOrganizations':contentOrganization,

      'name': new FormControl(contentName),
      'type':new FormControl(contentTypes),
      'discription': new FormControl(contentDescription),
      'startDate':new FormControl(contentStartdate),
      'endDate': new FormControl(contentEnddate),
      'status':new FormControl(contentStatus),
      'pic':new FormControl(""),
      // 'pic':new FormControl(contentfilepath)
      'contactName': new FormControl(contentContactname),
      'contactNumber':new FormControl(contentContactnumber)


    });
  }
  ngAfterViewInit() {
  }

  onadd2(name)
  {
    let organizationss=new DataOrg(name);
    this.organizationd.push(organizationss);

  }
  onadd3(name)
  {
    let organizationss=new DataOrg(name);
    this.organizationd.push(organizationss);
  }

  
removeOrganization(index:number)
{

  console.log("index----",index);
  (<FormArray>this.contentForm.get('ownerOrganizations')).removeAt(index);
  this.organizations.splice(index,1);
  console.log("Form Remove index",index)
  console.log("Form Remove control",this.organizations)
  // let index=this.contacts.indexOf(contact);
  // this.contacts.splice(index,1);
}


onAddOrganization(orgName:string) {
  (<FormArray>this.contentForm.get('ownerOrganizations')).push(
    new FormGroup({
      'ownerOrganizations':new FormControl(orgName)
      // 'amount': new FormControl(null, [
      //   Validators.required,
      //   Validators.pattern(/^[1-9]+[0-9]*$/)
      // ])
    })
  );
  let organization=new DataOrg(orgName);
  this.organizations.push(organization)
}


 
  onDeleteCategorie(){
      this.route.params
      .subscribe(
        (params: Params) => {
          this.ids = params['id'];
          this.editMode = params['id'] != null;
      // this.courseServices.deletecategories(this.ids)
  }
      );
      console.log("Delete function id",this.ids)
}
public counter : number = 0;
    
    increment(){
      this.counter += this.id;
      console.log("Counter",this.idsd )
    }

}
