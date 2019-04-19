import { Component, OnInit } from '@angular/core';
import { AddserviceService } from '../../../service/addservice.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Term } from '../term.model';
import { TermsService } from '../terms.service';

@Component({
  selector: 'app-view-term',
  templateUrl: './view-term.component.html',
  styleUrls: ['./view-term.component.css']
})
export class ViewTermComponent implements OnInit {
termsd = [
    {
    }
  ];

  terms: Term[];
  termss: Term;

  subscription: Subscription;
  id:number;
  constructor(private termServices: AddserviceService,
  private termservicess:TermsService,
   private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.termservicess.getTermss()
   
   this.subscription = this.termservicess.termsChanged
      .subscribe(
        (terms: Term[]) => {
          this.termsd = terms;
        }
      );
    this.terms = this.termservicess.getTerms();
  }
ngOnDestroy() {
    this.subscription.unsubscribe();
  }
// onDeleteCategories(){
// //   this.categoriesServices.deleteCategories(this.id);
// //   console.log(this.id)
// // console.log("deleted");
// }
onDeleteCategorie(id:number) {
  console.log("deleteid",id)
    // this.courseServices.deletecategories(id).subscribe(res => {
    //   console.log('Deleted');
    // });
}
}

