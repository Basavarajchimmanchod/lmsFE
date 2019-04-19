import { Component, OnInit } from '@angular/core';
import { AddserviceService } from '../../../service/addservice.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Content } from '../content.model';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.css']
})
export class ViewContentComponent implements OnInit {

Contentsd=[
  {
  }
  ];

  contents:Content[];
  contentss:Content;

  subscription: Subscription;
  id:number;

  constructor(private courseServices: AddserviceService,
              private route: ActivatedRoute,
              private router: Router,
              private contentServicess:ContentService) { }

  ngOnInit() {
    this.contentServicess.getContentss()
    this.subscription = this.contentServicess.contentChanged
      .subscribe(
        (contents: Content[]) => {
          this.Contentsd = contents;
        }
      );
    this.contents = this.contentServicess.getContents();

   }

 ngOnDestroy() {
    this.subscription.unsubscribe();
  }

onDeleteCategorie(id:number) {
  console.log("deleteid",id)
    // this.courseServices.deletecategories(id).subscribe(res => {
    //   console.log('Deleted');
    // });
}
}

