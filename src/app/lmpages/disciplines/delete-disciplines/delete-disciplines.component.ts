import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { AddserviceService } from '../../../service/addservice.service'

import { DisciplinesService } from '../disciplines.service';
@Component({
  selector: 'app-delete-disciplines',
  templateUrl: './delete-disciplines.component.html',
  styleUrls: ['./delete-disciplines.component.css']
})
export class DeleteDisciplinesComponent implements OnInit {

  id:number;
  idsd:number;
  editMode=false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private disciplineAddServicess:DisciplinesService) { }

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
    this.onDeleteDisciplines();
  }
public onDeleteDisciplines() {

  if(confirm("Are You sure You want You Delete?")== true)
  {
    // alert("Record Deleted");
    

  console.log("deleteid",this.id)
    this.disciplineAddServicess.deletediscipline(this.id).subscribe(res => {
alert("Record Deleted Successfully") 
   }
    );
    this.router.navigate(['/view-Discipline']);  }
else

{
                    this.router.navigate(['/view-Discipline']);

}
}
  
}