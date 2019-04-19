import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { MultiDataCont } from '../../../Shared/multiDataCont';
import { AddserviceService } from '../../../service/addservice.service';
import { Organizations } from '../organizations.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { OrganizationService } from '../organization.service';

@Component({
  selector: 'app-add-organizations',
  templateUrl: './add-organizations.component.html',
  styleUrls: ['./add-organizations.component.css']
})
export class AddOrganizationsComponent implements OnInit {

  organizationVaild=new Organizations('','','','','','','','','','',0,'','','','','','');
  isValidFormSubmitted = false;


  userd=[]

  contact:string;

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
          
  constructor(private organizationSer:OrganizationService) { }

  isDisabled=false;
  ngOnInit() {
    this.organizationSer.getUser()
    .subscribe(
      (data: any[])=>{
        //console.log(data); 
        this.userd=data

      },
     (error)=> console.log(error)
    );
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
    this.organizationSer.addOrgs(orgModel)
    .subscribe(
      (response)=>alert("Record Saved Sucessfully"),
      (error)=>alert(error)
    );

  form.reset();
  this.isDisabled=false;
  this.contact="";

    }


  onAdd(name)
  {
    this.isDisable();
   this.contact=name;
   
  }
  removeContact(){
    this.isDisabled=false;
    this.contact="";

  }
  public isDisable(){
    this.isDisabled=true;
  }
  }
