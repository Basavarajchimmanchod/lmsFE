import { Component, OnInit } from '@angular/core';
import { AddserviceService } from '../../../service/addservice.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  Coursesd=[
  {
  }
  ];

  coursess:Course[];
  coursesss:Course;

  subscription: Subscription;
  id:number;

  constructor(private courseServices: AddserviceService,
              private route: ActivatedRoute,
              private router: Router,
              private coursesServicess:CoursesService) { }

  ngOnInit() {
    this.coursesServicess.getCoursess()
    this.subscription = this.coursesServicess.coursesChanged
      .subscribe(
        (coursess: Course[]) => {
          this.Coursesd = coursess;
        }
      );
    this.coursess = this.coursesServicess.getCourses();

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



//   constructor(private courseServices: AddserviceService) { }

//   ngOnInit() {
//      this.courseServices.getCourse()
//     .subscribe(
//       (data: any[])=>{
//         //console.log(data); 
//         this.courses=data

//       },
//      (error)=> console.log(error)
//     );
//   }

// }
