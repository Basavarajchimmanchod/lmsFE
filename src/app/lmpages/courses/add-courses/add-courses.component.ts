import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { MultiDataCont } from '../../../Shared/multiDataCont';
import { DataOrg } from '../../../Shared/dataOrg';

import { AddserviceService } from '../../../service/addservice.service';
import { Course } from '../course.model'
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit, AfterViewInit {

contentss=[
      {

      }
    ]
organizationd=[]
    disciplinesd=[
      {

      }
    ]
    organizationsd=[
      {

      }
    ]
  name:string;
  contacts:Array<MultiDataCont>;
  organizations:Array<DataOrg>;

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

  
  major=['NXT Shared Major',
            'Programming'
          ];

  deliveryMethod=['Assessment',
          'Classroom',
          'Course Group',
          'eLearning',
          'Self-Study'
        ];

  Content_type=['Resource',
        'link'
      ];


  approval=['Yes','no'];
  relaunch=['Yes','no'];

  
  resource=['None',
            'CSE Content(Inactive)'
      ];


  Certified=['Yes','No'];
  Completion=['Yes','No'];

  Enrollment=['Once only',
              'Unlimited',
              'Restrict by number of days',
              'Restrict by number of enrollments'
            ];

  accumulate=['Yes','No'];

  non_subscribers=['Yes','No'];
  allowUseOfInterestLists=['Yes','No'];
  instructionallanguages=['Chinese - China',
                          'Français - Canada',
                          'German - Germany',
                          'Japanese - Japan',
                          'Español - México',
                          'Dutch - The Netherlands',
                          'Portuguese - Brazil ',
                          'English',
                          'Français - France',
                          'Italian - Italy',
                          'Korean - Korea',
                          'Spanish - Spain',
                          'Polish - Poland',
                          'Russian - Russia',
                          'English',
                          'Français - France',
                          'Italian - Italy',
                          'Korean - Korea',
                          'Spanish - Spain',
                          'Polish - Poland',
                          'Russian - Russia'
                        ];
  
  
  errorMsg = '';
status=['Active','Inactive'];

//  disciplinesd=[
//   {
//   }
//   ];

//   disciplines:Disciplines[];
//   discipliness:Disciplines;

//   subscription: Subscription;
//   id:number;

  public isCollapsed=true;
  constructor(private _script: ScriptLoaderService,
              
              private httpService: HttpClient,
              private coursesServiceS:CoursesService) {
    this.contacts=[];
    this.organizations=[];
   }

  ngOnInit() {
 this.coursesServiceS.getContent()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.contentss=data

      },
     (error)=> console.log(error)
    );
    
     this.coursesServiceS.getOrganizations()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.organizationsd=data

      },
     (error)=> console.log(error)
    );


    this.coursesServiceS.getDiscipline()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.disciplinesd=data

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
    console.log("Contents Data", this.contacts)

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
  addContact(Contact)
  {
    let contact=new Contact(name);
    this.contacts.push(contact);

  }
  removeContact(contact)
  {
    let index=this.contacts.indexOf(contact);
    this.contacts.splice(index,1);
  }
  removeOrganization(organization)
  {
    let index=this.organizations.indexOf(organization);
    this.organizations.splice(index,1);
  }
  onSubmit(form: NgForm) {
    const value=form.value
  const courseModel=new Course(this.organizations,
                                value.code,
                                value.name,
                                value.tuition,
                                value.description,
                                value.targetedLearners,
                                value.duration,
                                value.major,
                                value.deliveryMethod,
                                value.approvalRequired,
                                value.canRelaunch,
                                value.contentType,
                                // value.resourceContent,
                                value.selfCertifiedCompletion,
                                value.courseCompletionCertificate,
                                value.status,
                                this.contacts,
                                value.language,
                                value.notes,
                                value.courseDisplayDate,
                                value.enrollmentOpenDate,
                                value.enrollmentCloseDate,
                                value.courseHideDate,
                                value.certificationCalculationDate,
                                value.daysStdToCompl,
                                value.daysBeforeStdToCompl,
                                value.expireDays,
                                value.remindStudent,
                                value.enrollmentRestriction,
                                // value.enrollmentDays,
                                value.accumulateCredit,
                                value.credit,
                                // value.subscriptionProgram,
                                // value.nonSubscriptionCanEnroll,
                                value.instructionalLanguages,
                                value.version,
                                value.allowUseOfInterestLists,
                                'value.createBy',
                                'value.createDate',
                                'value.modifiedBy',
                                'value.modifiedDate',
                                'value.deletedBy',
                                'value.deletedDate'
                                )

    this.coursesServiceS.addcourses(courseModel)
    .subscribe(
      (response)=>{
        alert("Record Saved Sucessfully")
        this.contacts=[]
        this.organizations=[]
      },
      (error)=>alert(error)
    );
  form.reset();
    }
  
}
