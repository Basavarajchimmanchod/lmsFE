import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-surveys',
  templateUrl: './delete-surveys.component.html',
  styleUrls: ['./delete-surveys.component.css']
})
export class DeleteSurveysComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
    this.onDelete();
  }
onDelete(){
  if(confirm("Are You Sure You Want Delete Records")){
    alert("Record Deleted");
    this.router.navigate(['/view-surveys']);

  }
  else
  {
    this.router.navigate(['/view-surveys']);

  }
}
}
