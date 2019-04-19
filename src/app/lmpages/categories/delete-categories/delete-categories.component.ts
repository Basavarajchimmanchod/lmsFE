import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { AddserviceService } from '../../../service/addservice.service'
import { CategoriesService } from '../categories.service';
@Component({
  selector: 'app-delete-categories',
  templateUrl: './delete-categories.component.html',
  styleUrls: ['./delete-categories.component.css']
})
export class DeleteCategoriesComponent implements OnInit {

id:number;
idsd:number;
  editMode = false;

  constructor( private router: Router,
              private route: ActivatedRoute,
              private delcateg:CategoriesService,
                            private courseServices:AddserviceService
) { }

  ngOnInit() {
     this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
        }
      );

      console.log("init-id",this.id++)
       this.idsd=this.id
            console.log("init-ids----",this.idsd)
    this.onDeleteCategorie();
  }
public onDeleteCategorie() {

  if(confirm("Are You sure You want You Delete?")== true)
  {
  console.log("deleteid",this.id)
    this.delcateg.deletecategorie(this.id)
    .subscribe(res => {
      alert('Record Deleted Successfully');
    }
    );
                        this.router.navigate(['/view-Categories']);
  }
else

{
                    this.router.navigate(['/view-Categories']);

}
}
  
}
