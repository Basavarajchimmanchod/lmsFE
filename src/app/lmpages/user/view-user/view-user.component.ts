import { Component, OnInit } from '@angular/core';
import { AddserviceService } from '../../../service/addservice.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userd=[
    {

    }
  ]

  usersData:User[];
  userDatas:User;

  subscription: Subscription;
  id:number;

  constructor(private userSer:UsersService) { }

  ngOnInit() {

    this.userSer.getUserss()
   
    this.subscription = this.userSer.userChanged
       .subscribe(
         (userdata: User[]) => {
           this.userd = userdata;
         }
       );
     this.usersData = this.userSer.getUsers();

  }
  }

