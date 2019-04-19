import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { AddserviceService } from '../../../service/addservice.service'

import { TermsService } from '../terms.service';

@Component({
  selector: 'app-delete-term',
  templateUrl: './delete-term.component.html',
  styleUrls: ['./delete-term.component.css']
})
export class DeleteTermComponent implements OnInit {
id:number;
idsd:number;
  editMode = false;

  constructor( private router: Router,
              private route: ActivatedRoute,
                            private termServicess:TermsService) { }

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
    this.termServicess.deleteterm(this.id).subscribe(res => {
      alert("Record Deleted Successfully")
    }
    );
                        this.router.navigate(['/view-Term']);
  }
else

{
                    this.router.navigate(['/view-Term']);

}
}
  

}
