import { Component, OnInit } from '@angular/core';
import { AddserviceService } from '../../../service/addservice.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Catalog } from '../catalog.model';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-view-catalog',
  templateUrl: './view-catalog.component.html',
  styleUrls: ['./view-catalog.component.css']
})
export class ViewCatalogComponent implements OnInit {

  Coursesd=[
    {
    }
    ];
  
    coursess:Catalog[];
    coursesss:Catalog;
  
    subscription: Subscription;
    id:number;
  
    constructor(private courseServices: AddserviceService,
                private route: ActivatedRoute,
                private router: Router,
                private coursesServicess:CatalogService) { }
  
    ngOnInit() {
      this.coursesServicess.getCoursess()
      this.subscription = this.coursesServicess.coursesChanged
        .subscribe(
          (coursess: Catalog[]) => {
            this.Coursesd = coursess;
          }
        );
      this.coursess = this.coursesServicess.getCourses();
  
     }
  
   ngOnDestroy() {
      this.subscription.unsubscribe();
    }

  }
  