import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { AddserviceService } from '../../../service/addservice.service'

import { SystemRolesService } from '../system-roles.service';
@Component({
  selector: 'app-delete-system-roles',
  templateUrl: './delete-system-roles.component.html',
  styleUrls: ['./delete-system-roles.component.css']
})
export class DeleteSystemRolesComponent implements OnInit {

  
  id:number;
idsd:number;
  editMode = false;

 constructor(private router: Router,
  private route: ActivatedRoute,
            private SystemRoleS:SystemRolesService) { }

            
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
    this.onDeleteSystemRoles();
  }
public onDeleteSystemRoles() {

  if(confirm("Are You sure You want You Delete?")== true)
  {
    console.log("deleteid",this.id)
    this.SystemRoleS.deleteSystemRole(this.id)
    .subscribe(res => {
      alert("Record Deleted Successfully");
    }
    );

    this.router.navigate(['/view-System-Roles']);

  // console.log("deleteid",this.id)
    // this.TermServices.deleteterm(this.id).subscribe(res => {
    //   console.log('Deleted');
    // }
    // );
    //                     this.router.navigate(['/view-Term']);
  }
else

{
                    this.router.navigate(['/view-System-Roles']);

}
}
}
