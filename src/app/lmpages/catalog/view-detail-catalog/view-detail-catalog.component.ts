import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { MultiDataCont } from '../../../Shared/multiDataCont';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { CatalogService } from '../catalog.service'
import { NgForm } from '@angular/forms';
import { AddserviceService } from '../../../service/addservice.service';

import { Course } from '../../courses/course.model';
import { DataOrg } from '../../../Shared/dataOrg'

@Component({
  selector: 'app-view-detail-catalog',
  templateUrl: './view-detail-catalog.component.html',
  styleUrls: ['./view-detail-catalog.component.css']
})
export class ViewDetailCatalogComponent implements OnInit {

 
  contentss=[
    {

    }
  ]
organizationd=[]
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
            private CoursesServicesS:CatalogService,
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



}


