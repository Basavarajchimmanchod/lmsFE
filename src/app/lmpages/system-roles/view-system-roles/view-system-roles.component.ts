import { Component, OnInit } from '@angular/core';
import { AddserviceService } from '../../../service/addservice.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { SystemRolesService } from '../system-roles.service';
import { SystemRoles } from '../systemRoles.model';

@Component({
  selector: 'app-view-system-roles',
  templateUrl: './view-system-roles.component.html',
  styleUrls: ['./view-system-roles.component.css']
})
export class ViewSystemRolesComponent implements OnInit {

  Systemrolesd=[
    {

    }
  ]
  systemRoles:SystemRoles[];
  systemRoless:SystemRoles;

  subscription: Subscription;
  id:number;

  constructor(private systemrolesadd:SystemRolesService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
    
    this.systemrolesadd.getSystemRoless()
   
    this.subscription = this.systemrolesadd.systemRolesChanged
       .subscribe(
         (systemRolesdata: SystemRoles[]) => {
           this.Systemrolesd = systemRolesdata;
         }
       );
     this.systemRoles = this.systemrolesadd.getSystemRoles();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
