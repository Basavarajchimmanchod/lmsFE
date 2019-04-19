import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.css']
})
export class EditAnnouncementComponent implements OnInit {


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
   console.log ( " The User 2 value is -----"+indexs )
    // console.log("The index value is ---- "+index)
  }
}
