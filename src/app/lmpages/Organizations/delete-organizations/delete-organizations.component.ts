import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { AddserviceService } from '../../../service/addservice.service'
import { OrganizationService } from '../organization.service';

@Component({
  selector: 'app-delete-organizations',
  templateUrl: './delete-organizations.component.html',
  styleUrls: ['./delete-organizations.component.css']
})
export class DeleteOrganizationsComponent implements OnInit {

  id:number;
  idsd:number;
  editMode=false;

  constructor(private router: Router,
    private route: ActivatedRoute,
              private OrganizationSer:OrganizationService) { }

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
    this.onDeleteOrganization();
  }
public onDeleteOrganization() {

  if(confirm("Are You sure You want You Delete?")== true)
  {
    alert("Record Deleted");
    this.router.navigate(['/view-Organizations']);

  console.log("deleteid",this.id)
    this.OrganizationSer.deleteOrgs(this.id).subscribe(res => {
      console.log('Deleted');
    }
    );
                        this.router.navigate(['/view-Organizations']);
  }
else

{
                    this.router.navigate(['/view-Organizations']);

}
}
}
