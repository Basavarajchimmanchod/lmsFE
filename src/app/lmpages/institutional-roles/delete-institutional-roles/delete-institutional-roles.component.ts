import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { AddserviceService } from '../../../service/addservice.service'
import { InstitutionalRolesService } from '../institutional-roles.service';
@Component({
  selector: 'app-delete-institutional-roles',
  templateUrl: './delete-institutional-roles.component.html',
  styleUrls: ['./delete-institutional-roles.component.css']
})
export class DeleteInstitutionalRolesComponent implements OnInit {

  id:number;
idsd:number;
  editMode = false;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private institutionalRolesAdd:InstitutionalRolesService) { }


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
    this.onDeleteInstitutionalRoles();
  }
public onDeleteInstitutionalRoles() {

  if(confirm("Are You sure You want You Delete?")== true)
  {
    // alert("Record Deleted");
    // this.router.navigate(['/view-Institutional-Roles']);

  console.log("deleteid",this.id)
    this.institutionalRolesAdd.deleteInstitutionalRole(this.id)
    .subscribe(res => {
      alert("Record Deleted Successfully");
    }
    );
                        this.router.navigate(['/view-Institutional-Roles']);
  }
else

{
                    this.router.navigate(['/view-Institutional-Roles']);

}
}
}
