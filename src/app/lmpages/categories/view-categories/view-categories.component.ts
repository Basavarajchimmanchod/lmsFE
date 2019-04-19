import { Component, OnInit } from '@angular/core';
import { AddserviceService } from '../../../service/addservice.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Categorie } from '../categories.model';
import { CategoriesService} from '../categories.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
Categoriesd = [
    {
    }
  ];

categories: Categorie[];
categoriess: Categorie;

  subscription: Subscription;
  id:number;
  constructor(private courseServices: AddserviceService,
  private categoriesServices:CategoriesService,
   private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    
    this.categoriesServices.getCategoriesss()
   
   this.subscription = this.categoriesServices.categoriesChanged
      .subscribe(
        (categories: Categorie[]) => {
          this.Categoriesd = categories;
        }
      );
    this.categories = this.categoriesServices.getCategories();
   // console.log("Object Values ", this.categories)


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
