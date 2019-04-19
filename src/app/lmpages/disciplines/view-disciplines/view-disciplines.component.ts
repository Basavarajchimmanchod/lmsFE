import { Component, OnInit } from '@angular/core';
import { AddserviceService } from '../../../service/addservice.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Discipline } from '../discipliness.model';
import { DisciplinesService } from '../disciplines.service';

@Component({
  selector: 'app-view-disciplines',
  templateUrl: './view-disciplines.component.html',
  styleUrls: ['./view-disciplines.component.css']
})
export class ViewDisciplinesComponent implements OnInit {

  disciplinesd=[
  {
  }
  ];

  disciplines:Discipline[];
  discipliness:Discipline;

  subscription: Subscription;
  id:number;

  constructor(private disciplineServices: AddserviceService,
              private route: ActivatedRoute,
              private router: Router,
              private disciplineServicess:DisciplinesService) { }

  ngOnInit() {
  
  this.disciplineServicess.getDiscipliness()
    this.subscription = this.disciplineServicess.disciplinesChanged
      .subscribe(
        (disciplines: Discipline[]) => {
          this.disciplinesd = disciplines;

        }
      );
    // this.discipliness = this.disciplineServicess.getDisciplines();
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
