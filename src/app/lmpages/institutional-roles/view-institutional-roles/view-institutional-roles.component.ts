import { Component, OnInit } from '@angular/core';
import { AddserviceService } from '../../../service/addservice.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { InstitutionalRoles } from '../institutionalRoles.model';
import { InstitutionalRolesService} from '../institutional-roles.service';
@Component({
  selector: 'app-view-institutional-roles',
  templateUrl: './view-institutional-roles.component.html',
  styleUrls: ['./view-institutional-roles.component.css']
})
export class ViewInstitutionalRolesComponent implements OnInit {

  institutionalroled=[
    {
    }
  ]

  institutionalrole:InstitutionalRoles[];
  institutionalroless:InstitutionalRoles;

  
  subscription: Subscription;
  id:number;

  constructor(private route: ActivatedRoute,
              private institutionalrolesAdd:AddserviceService,
              private router: Router,
              private institutionalSer:InstitutionalRolesService
              ) { }

  ngOnInit() {
    this.institutionalSer.getInstitutionalRoless()
   
    this.subscription = this.institutionalSer.institutionalRolesChanged
       .subscribe(
         (terms: InstitutionalRoles[]) => {
           this.institutionalroled = terms;
         }
       );
     this.institutionalrole = this.institutionalSer.getInstitutionalRoles();
  }


 ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
