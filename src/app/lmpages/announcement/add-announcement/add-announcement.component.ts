import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Adddata  } from './adddata'
@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit {

  users=['users1',
          'users2'];
  user1=[];
          users2=[];
  constructor() { 
    this.user1=this.users;

  }
  ngOnInit() {

  }

  onSubmit(){
   
  }
  onGetID(form:NgForm){
    const value=form.value;
    const Userdatas=value.userName
   console.log("The selected value is------"+Userdatas)

   this.users2.push(Userdatas)
   
   const indexs=this.users2.indexOf(Userdatas)
   this.user1.slice(indexs,1)
   console.log ( " The User 2 value is -----"+indexs)
    // console.log("The index value is ---- "+index)
  }

  onGetID2(form:NgForm){
    const value=form.value;
    const Userdatas=value.userName
   console.log("The selected value is------"+Userdatas)

   this.user1.push(Userdatas)
   
   const indexs=this.user1.indexOf(Userdatas)
   this.user1.slice(indexs,1)
   console.log ( " The User 2 value is -----"+indexs)
    // console.log("The index value is ---- "+index)
  }
}
