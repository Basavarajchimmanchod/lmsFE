import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AddserviceService } from '../../../service/addservice.service';
import { Subscription } from 'rxjs/Subscription';

import { EnrolledUsers } from '../enrolledUsers.model';
import { EnrollUsersService} from '../enroll-users.service';

@Component({
  selector: 'app-enroll-users',
  templateUrl: './enroll-users.component.html',
  styleUrls: ['./enroll-users.component.css']
})
export class EnrollUsersComponent implements OnInit {
  enrolledDataList=[
    {
  
    }
    ];

    enrollUsers:EnrolledUsers[];
    enrollUserss:EnrolledUsers;
  
    subscription:Subscription;
    id:number;
    ids:number=0;
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private enrolledUsersSer:EnrollUsersService,
      // private enrolledUserAddSer:AddserviceService
      ) { }
  
      ngOnInit() {
        this.enrolledUsersSer.getEnrolledUsersLists()
       
       this.subscription = this.enrolledUsersSer.enrolledUserChanged
          .subscribe(
            (enrolledUsers: EnrolledUsers[]) => {
              this.enrolledDataList = enrolledUsers;
            }
          );
        this.enrollUsers = this.enrolledUsersSer.getEnrolledUsers();
        console.log("The init data",this.enrolledDataList)
      }
    ngOnDestroy() {
        this.subscription.unsubscribe();
      }
     onEnrollUser(id:number) {
       console.log("id passed from Enrolled Usered Form iS",id)
       const enrollList=this.enrolledUsersSer.getEnrolledUser(id);
  console.log("The Data with search id is ", enrollList)
      this.ids=id++;
      console.log("The id is",this.ids);
      if(confirm("Are You sure You want to Enroll?")== true)
      {
     this.enrolledUsersSer.addUserListEnrolled(enrollList)
     .subscribe(
       (response)=>alert(" Successfully Enrolled"),
       (error)=>alert("Something went wrong")
     )
   this.ondeleteEnroll(id)
   this.refresh();
                            this.router.navigate(['/Add-Enroll-Users']);
                          }
        else
    {
                        this.router.navigate(['/enrolls-Users']);
    
    }
    }
  
    public ondeleteEnroll(id:number)
    {
      // this.ids=id++
      console.log("the id for delete is ", id)
      console.log("the ids for delete is ", this.ids)
  
      this.enrolledUsersSer.deleteUserListEnrolled(id)
      .subscribe(
        (response)=>console.log("Record Deleted"),
        (error)=>alert("Somthing Went Wrong")
      )
  
    }
    public refresh(){
      window.location.reload();
    }
}
