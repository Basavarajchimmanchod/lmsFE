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
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css']
})
export class EditContentComponent implements OnInit, AfterViewInit {

  id: number;
  ids:number;
  editMode = false;

  contentForm = new FormGroup({
    'language':new FormControl(''),
    // 'ownerOrganizations':contentOrganization,
    'name': new FormControl(''),
    'type':new FormControl(''),
    'discription': new FormControl(''),
    'startDate':new FormControl(''),
    'endDate': new FormControl(''),
    'status':new FormControl(''),
    // 'pic':new FormControl(""),
    // 'pic':new FormControl(contentfilepath)
    'contactName': new FormControl(''),
    'contactNumber':new FormControl('')


  });
    
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

        
    if (this.editMode) {
      
      this.contentServicesEdit.getContentid(this.id)
      .subscribe(
        (data)=>{ 
console.log("--",data)
          this.organizations=data.ownerOrganizations
          
          this.contentForm.setValue({
            language:data.language,
            name:data.name,
            type:data.type,
            discription:data.discription,
            startDate:data.startDate,
            endDate:data.endDate,
            status:data.status,
            contactName:data.contactName,
            contactNumber:data.contactNumber,
            // pic:data.pic
          })
                }
      )
    }
  }
  ngAfterViewInit() {
  }

  onadd2(name)
  {
    let organizationss=new DataOrg(name);
    this.organizations.push(organizationss);

  }
  onadd3(name)
  {
    let organizationss=new DataOrg(name);
    this.organizations.push(organizationss);
  }

  
removeOrganization(contact)
{

  let index=this.organizationd.indexOf(contact);
  this.organizations.splice(index,1);
}


onAddOrganization(orgName:string) {
  let organization=new DataOrg(orgName);
  this.organizations.push(organization)
}


  onSubmit(forname:NgForm,ids:number){
    if(this.editMode){
    

   const value=forname.value;
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
    
    forname.reset();
    console.log("Edited Data",contentModel);
    console.log("id fro submit",this.id);
    
        if(confirm("Do you want to save changes?")== true)
        {
    this.contentServicesEdit.editcontents(contentModel,this.id)
     .subscribe(
       (response)=>alert("Record Updated Successfully"),
       (error)=>console.log(error)
     );
    //  this.refresh();
            this.router.navigate(['/adminindex']);

    }
    }

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

    public refresh(){
      window.location.reload();
    }
}