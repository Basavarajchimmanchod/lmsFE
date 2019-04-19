import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-announcement',
  templateUrl: './delete-announcement.component.html',
  styleUrls: ['./delete-announcement.component.css']
})
export class DeleteAnnouncementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.onDeleteannouncement();
  }

  public onDeleteannouncement() {

    if(confirm("Are You sure You want You Delete?")== true)
    {
       alert("Record Deleted Successfully");
                              this.router.navigate(['/view-announcement']);
    }
  else
  
  {
                      this.router.navigate(['/view-announcement']);
  
  }
}
}
