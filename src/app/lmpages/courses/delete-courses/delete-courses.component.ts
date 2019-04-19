import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { AddserviceService } from '../../../service/addservice.service'

import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-delete-courses',
  templateUrl: './delete-courses.component.html',
  styleUrls: ['./delete-courses.component.css']
})
export class DeleteCoursesComponent implements OnInit {

 id:number;
idsd:number;
  editMode = false;

  constructor( private router: Router,
              private route: ActivatedRoute,
              private courseServices:AddserviceService,
              private courseServicess:CoursesService
) { }

  ngOnInit() {
     this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
        }
      );

      console.log("init-id",this.id)
       this.idsd=this.id
            console.log("init-ids----",this.idsd)
    this.onDeleteCategorie();
  }
public onDeleteCategorie() {

  if(confirm("Are You sure You want You Delete?")== true)
  {
  console.log("deleteid",this.id)
    this.courseServicess.deleteCourse(this.id).subscribe(res => {
    alert("Record Successfully Deleted")
        }
    );
                        this.router.navigate(['/view-courses']);
  }
else

{
                    this.router.navigate(['/view-courses']);

}
}
  
}
