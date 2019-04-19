import { Component, OnInit } from '@angular/core';
import { AddserviceService } from '../../../service/addservice.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { OrganizationService } from '../organization.service';
import { Organizations } from '../organizations.model';


@Component({
  selector: 'app-view-organizations',
  templateUrl: './view-organizations.component.html',
  styleUrls: ['./view-organizations.component.css']
})
export class ViewOrganizationsComponent implements OnInit {

  organizationsd=[{}];

  organizations:Organizations[];
  organizationss:Organizations;

  subscription:Subscription;
  id:number;

  constructor( private route: ActivatedRoute,
              private router: Router,
              private organizationServicess:OrganizationService) { }


  ngOnInit() {
    
  this.organizationServicess.getOrgss()
  this.subscription = this.organizationServicess.orgChanged
    .subscribe(
      (disciplines: Organizations[]) => {
        this.organizationsd = disciplines;

      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
