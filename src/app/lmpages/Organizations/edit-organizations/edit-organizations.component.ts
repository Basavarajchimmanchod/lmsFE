import { Component, OnInit, OnDestroy, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder,FormControl, FormArray, Validators } from '@angular/forms';

import { OrganizationService } from '../organization.service';
import { NgForm } from '@angular/forms';

import { Organizations } from '../organizations.model';

@Component({
  selector: 'app-edit-organizations',
  templateUrl: './edit-organizations.component.html',
  styleUrls: ['./edit-organizations.component.css']
})
export class EditOrganizationsComponent implements OnInit {

  id: number;
  ids:number;
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
          
          country=['india',
                    // 'China',
                    // 'Australia',
                    // 'United Kingdom',
                    // 'Canada',
                    // 'Germany',
                    // 'Italy',
                    // 'Brazil'
          ]
          states=['Andaman-Nicobar',
                  'Andra-Pradesh',
                  'Arunachal-Pradesh',
                  'Assam',
                  'Bihar',
                  'Chandigarh',
                  'Daman-Dio',
                  'Dehli',
                  'Goa',
                  'Gujhrath',
                  'Himachal-Pradesh',
                  'Hariyana',
                  'Jharkand',
                  'Jammu& Kashmir',
                  'Karnataka',
                  'Kerala',
                  'Lashadeep',
                  'Maharastra',
                  'Meghalaya',
                  'Manipur',
                  'Madhya-Pradesh',
                  'Mizorn',
                  'Nagaland',
                  'Oddisha',
                  'Punjab',
                  'Pondicherry',
                  'Sikkim',
                  'Rajastan',
                  'Teleganna',
                  'Tamil-Nadu',
                  'Tripura',
                  'Uttranchal',
                  'Uttar-Pradesh',
                  'West-Bengal'
         ]
          type=['Bussiness Unit',
                'Division',
                'Locale',
                'Location'

          ]
  editMode = false;

  organizationForm=new FormGroup({
    'language':new FormControl(''),
    'orgCode':new FormControl(''),
    'orgName':new FormControl(''),
    'startDate':new FormControl(''),
    'endDate':new FormControl(''),
    'type':new FormControl(''),
    'street':new FormControl(''),
    'city':new FormControl(''),
    'country':new FormControl(''),
    'state':new FormControl(''),
    'postalCode':new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private router: Router,
              private organizationSer:OrganizationService

              ) { }

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
  private initForm(){

        
    if (this.editMode) {
      
      this.organizationSer.getOrgid(this.id)
      .subscribe(
        (data)=>{ 
          
          this.organizationForm.setValue({
            language:data.language,
            orgCode:data.orgCode,
            orgName:data.orgName,
            startDate:data.startDate,
            endDate:data.endDate,
            type:data.type,
            street:data.street,
            city:data.city,
            country:data.country,
            state:data.state,
            postalCode:data.postalCode,

            // pic:data.pic
          })
                }
      )
    }
  }

  onSubmit(form: NgForm) {
    const value=form.value

  const orgModel=new Organizations(value.language,
                                value.orgCode,
                                value.orgName,
                                value.startDate,
                                value.endDate,
                                value.type,
                                // this.contact,
                                value.street,
                                value.city,
                                value.country,
                                value.state,
                                value.postalCode,
                                'value.createBy',
                                'value.createDate',
                                'value.modifiedBy',
                                'value.modifiedDate',
                                'value.deletedBy',
                                'value.deletedDate'
                                )

    if(confirm("Do you want to save changes?")== true)
    {                   
    this.organizationSer.editOrg(orgModel,this.id)
    .subscribe(
      (response)=>alert("Record Saved Sucessfully"),
      (error)=>alert(error)
    );
    this.router.navigate(['/view-Organizations']);

    }
    }

}
