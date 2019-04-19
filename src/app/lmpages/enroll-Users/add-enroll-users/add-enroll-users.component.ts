import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AddserviceService } from '../../../service/addservice.service';
import { Subscription } from 'rxjs/Subscription';

import { EnrolledUser } from '../enrollUser.model';
import { EnrolledUsersService} from '../enrolled-users.service';

@Component({
  selector: 'app-add-enroll-users',
  templateUrl: './add-enroll-users.component.html',
  styleUrls: ['./add-enroll-users.component.css']
})
export class AddEnrollUsersComponent implements OnInit {

  enrolledUserd=[
    {

    }
  ];

 
  enrolledUsers:EnrolledUser[];
  // enrolledUserss:EnrolledUser;

  subscription:Subscription;
  id:number;
  ids:number=0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private enrolledUsersSer:EnrolledUsersService,
    // private enrolledUserAddSer:AddserviceService
    ) { }

    ngOnInit() {
      this.enrolledUsersSer.getEnrolledUserss()
     
     this.subscription = this.enrolledUsersSer.enrollUserChanged
        .subscribe(
          (enrolledUsers: EnrolledUser[]) => {
            this.enrolledUserd = enrolledUsers;
          }
        );
      this.enrolledUsers = this.enrolledUsersSer.getEnrollUsers();
      console.log("The Enrolled User is " , this.enrolledUsers)
    }
  ngOnDestroy() {
      this.subscription.unsubscribe();
    }
   onEnrollUser(id:number) {
     console.log("id passed from Enrolled Usered Form iS",id)
     const enrolledList=this.enrolledUsersSer.getEnrollUser(id);
console.log("The Data with search id is ", enrolledList)
    this.ids=id++;
    console.log("The id is",this.ids);
    if(confirm("Are You sure You want to Enroll?")== true)
    {
   this.enrolledUsersSer.addEnrolledListUser(enrolledList)
   .subscribe(
     (response)=>alert(" Successfully Enrolled"),
     (error)=>alert("Something went wrong")
   )
 this.ondeleteEnroll(id)
 this.refresh();
                          this.router.navigate(['/enrolls-Users']);
                        }
      else
  {
                      this.router.navigate(['/Add-Enroll-Users']);
  
  }
  }

  public ondeleteEnroll(id:number)
  {
    // this.ids=id++
    console.log("the id for delete is ", id)
    console.log("the ids for delete is ", this.ids)

    this.enrolledUsersSer.deleteEnrolledListUser(id)
    .subscribe(
      (response)=>console.log("Record Deleted"),
      (error)=>alert("Somthing Went Wrong")
    )

  }

  public refresh(){
    window.location.reload();
  }
}
