import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { AddserviceService } from '../../../service/addservice.service'
import { ContentService } from '../content.service';

@Component({
  selector: 'app-delete-content',
  templateUrl: './delete-content.component.html',
  styleUrls: ['./delete-content.component.css']
})
export class DeleteContentComponent implements OnInit {

 
id:number;
idsd:number;
  editMode = false;

  constructor( private router: Router,
              private route: ActivatedRoute,
                            private courseServices:AddserviceService,
                            private contentServicedelete:ContentService
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
    this.onDeleteContent();
  }
public onDeleteContent() {

  if(confirm("Are You sure You want You Delete?")== true)
  {
  console.log("deleteid",this.id)
    this.contentServicedelete.deletecontent(this.id).subscribe(res => {
      alert("Record Deleted Successfully");
    }
    );
                        this.router.navigate(['/view-content']);
  }
else

{
                    this.router.navigate(['/view-content']);

}
}
}
