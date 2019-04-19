import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { MultiDataCont } from '../../../Shared/multiDataCont';
import { DataOrg } from '../../../Shared/dataOrg';



import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { CoursesService } from '../courses.service'
import { NgForm } from '@angular/forms';
import { AddserviceService } from '../../../service/addservice.service';

import { Course } from '../course.model';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit, AfterViewInit {

 
 
  contentss=[
    {

    }
  ]
organizationd=[]
contactsd=[];
  disciplinesd=[
    {

    }
  ]

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
                      ];

subscriptions=['SUB01',
                'SUB02'
                ];
errorMsg = '';
status=['Active','Inactive'];

 id: number;
ids:number;
editMode = false;

coursesForm = new FormGroup({
  // 'organizations':courseOrganizations,
  'code':new FormControl(''),
  'name':new FormControl(''),
  'tuition':new FormControl(''),
  'description':new FormControl(''),
  'targetedLearners':new FormControl(''),
  'duration':new FormControl(''),
  'major':new FormControl(''),
  'deliveryMethod':new FormControl(''),
  'approvalRequired':new FormControl(''),
  'canRelaunch':new FormControl(''),
  'contentType':new FormControl(''),
  'selfCertifiedCompletion':new FormControl(''),
  'courseCompletionCertificate':new FormControl(''),
  'status':new FormControl(''),
  // 'content':courseContent,
  'language':new FormControl(''),
  'notes':new FormControl(''),
  'courseDisplayDate':new FormControl(''),
  'enrollmentOpenDate':new FormControl(''),
  'enrollmentCloseDate':new FormControl(''),
  'courseHideDate':new FormControl(''),
  'certificationCalculationDate':new FormControl(''),
  'daysStdToCompl':new FormControl(''),
  
  'daysBeforeStdToCompl':new FormControl(''),
  'expireDays':new FormControl(''),
  'remindStudent':new FormControl(''),
  'enrollmentRestriction':new FormControl(''),
  // 'enrollmentDays':new FormControl(''),
  'accumulateCredit':new FormControl(''),
  'credit':new FormControl(''),
  
  'allowUseOfInterestLists':new FormControl(''),
  'version':new FormControl(''),

  'instructionalLanguages':new FormControl(''),
});

public  idsd:number=0;
name:string;
contacts:Array<MultiDataCont>;
organizations:Array<DataOrg>;

public isCollapsed=true;
constructor(private _script: ScriptLoaderService,
            private router: Router,
            private route: ActivatedRoute,
            private CoursesServicesS:CoursesService,
           ) {
  this.contacts=[];
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

    this.CoursesServicesS.getOrganizations()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.organizationd=data

      },
     (error)=> console.log(error)
    );

    this.CoursesServicesS.getContent()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.contactsd=data

      },
     (error)=> console.log(error)
    );

    this.CoursesServicesS.getDiscipline()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.contactsd=data

      },
     (error)=> console.log(error)
    );
    
}

private initForm() {


  if (this.editMode) {
this.CoursesServicesS.getCourseid(this.id)
.subscribe(
  (data)=>{
    this.organizations=data.organizations;
    this.contacts=data.content
this.coursesForm.setValue({
  code:data.code,
  name:data.name,
  tuition:data.tuition,
  description:data.description,
  targetedLearners:data.targetedLearners,
  duration:data.duration,
  major:data.major,
  deliveryMethod:data.deliveryMethod,
  approvalRequired:data.approvalRequired,
  canRelaunch:data.canRelaunch,
  contentType:data.contentType,
  selfCertifiedCompletion:data.selfCertifiedCompletion,
  courseCompletionCertificate:data.courseCompletionCertificate,
  status:data.status,
  language:data.language,
  notes:data.notes,
  courseDisplayDate:data.courseDisplayDate,
  enrollmentOpenDate:data.enrollmentOpenDate,
  enrollmentCloseDate:data.enrollmentCloseDate,
  courseHideDate:data.courseHideDate,
  certificationCalculationDate:data.certificationCalculationDate,
  daysStdToCompl:data.daysStdToCompl,
  daysBeforeStdToCompl:data.daysBeforeStdToCompl,
  expireDays:data.expireDays,
  remindStudent:data.remindStudent,
  enrollmentRestriction:data.enrollmentRestriction,
  credit:data.credit,
  accumulateCredit:data.accumulateCredit,
  instructionalLanguages:data.instructionalLanguages,
  allowUseOfInterestLists:data.allowUseOfInterestLists,
  version:data.version,
  
})
  }
)
  }

}

ngAfterViewInit() {
  this._script.load('./assets/js/scripts/form-plugins.js');
}

onAdd(name)
  {
   let contact=new MultiDataCont(name);
    this.contacts.push(contact);

  }

onadd2(name)
  {
    let organization=new DataOrg(name);
    this.organizations.push(organization);
  }

removeOrganization(organization)
  {
    let index=this.organizations.indexOf(organization);
    this.organizations.splice(index,1);
  }

  removeContact(contact)
  {
    let index=this.contacts.indexOf(contact);
    this.contacts.splice(index,1);
  }
  
  onSubmit(form: NgForm) {
        if(this.editMode){
    const value=form.value
  const CourseModel=new Course(this.organizations,
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
                                // value.enrollmentdays,
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
console.log("Edited Data",CourseModel);
    console.log("id fro submit",this.id);

      if(confirm("Do you want to save changes?")== true)
        {
    this.CoursesServicesS.editCourse(CourseModel,this.id)
    .subscribe(
      (response)=>alert("Successfully Updated"),
      (error)=>alert(error)
    );
    // this.refresh();
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

public refresh(){
  window.location.reload();
}
}
