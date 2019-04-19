import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-assignment',
  templateUrl: './delete-assignment.component.html',
  styleUrls: ['./delete-assignment.component.css']
})
export class DeleteAssignmentComponent implements OnInit {


  constructor(private router: Router ) { }

  ngOnInit() {
    this.onDelete();
  }
onDelete(){
  if(confirm("Are You Sure You Want Delete Records")){
    alert("Record Deleted");
    this.router.navigate(['/view-Assignment']);

  }
  else
  {
    this.router.navigate(['/view-Assignment']);

  }
}
}