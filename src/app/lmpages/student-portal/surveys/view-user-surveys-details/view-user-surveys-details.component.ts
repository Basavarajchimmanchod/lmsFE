import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user-surveys-details',
  templateUrl: './view-user-surveys-details.component.html',
  styleUrls: ['./view-user-surveys-details.component.css']
})
export class ViewUserSurveysDetailsComponent implements OnInit {

  areYou=['Yes',
          'No'

  ]
  constructor() { }

  ngOnInit() {
  }

}
