import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  
  id:number;
  idsd:number;
    editMode = false;
  
   constructor(private router: Router,
                private userSer:UsersService,
                private route:ActivatedRoute
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


    this.onDeleteDisciplines();
  }
public onDeleteDisciplines() {

  if(confirm("Are You sure You want You Delete?")== true)
  {
    console.log("deleteid",this.id)
    this.userSer.deleteUsers(this.id)
    .subscribe(res => {
      alert("Record Deleted Successfully");
    }
    );

    this.router.navigate(['/view-User']);

  // console.log("deleteid",this.id)
    // this.TermServices.deleteterm(this.id).subscribe(res => {
    //   console.log('Deleted');
    // }
    // );
    //                     this.router.navigate(['/view-Term']);
  }
else

{
                    this.router.navigate(['/view-User']);

}
}
}
