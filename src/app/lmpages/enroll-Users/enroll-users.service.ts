import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { EnrolledUsers } from './enrolledUsers.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class EnrollUsersService {

 
  enrolledUserChanged=new Subject<EnrolledUsers[]>();
  
  private enrolledUsersdata:EnrolledUsers[]=[
    new EnrolledUsers(
      '','','','','','','','','','')
  ]


  constructor(
    private _http: Http,
     private http : HttpClient
    /*private courseServices:AddserviceService*/) { }

setEnrolledUsers(enrolledUsersdata:EnrolledUsers[]){
  this.enrolledUsersdata=enrolledUsersdata;
  this.enrolledUserChanged.next(this.enrolledUsersdata.slice());
}
getEnrolledUsers(){
  return this.enrolledUsersdata.slice();
}
getEnrolledUser(index:number){
  return this.enrolledUsersdata[index];
}
addEnrolledUsers(enrolledUsersdata:EnrolledUsers){
  this.enrolledUsersdata.push(enrolledUsersdata);
    this.enrolledUserChanged.next(this.enrolledUsersdata.slice());

}


updateEnrolledUsers(index: number, newEnrolledUsers:EnrolledUsers){
  this.enrolledUsersdata[index]=newEnrolledUsers;
  //  this.courseServices.editcategories(this.categoriesdata)
  //   .subscribe(
  //     (response)=>console.log(response),
  //     (error)=>console.log(error)
  //   );
   this.enrolledUserChanged.next(this.enrolledUsersdata.slice());
  }

  deleteEnrolledUsers(index:number){
    this.enrolledUsersdata.slice(index,1);
  this.enrolledUserChanged.next(this.enrolledUsersdata.slice());

  }
  
 

getUsersEnrolleds(){
  this._http.get('http://localhost:8956/Enrollusers/')
      .map(
        (response: Response) => {
          const enrollUserData: EnrolledUsers[] = response.json();
          return enrollUserData;
        }
      )
      .subscribe(
        (enrollUserData: EnrolledUsers[]) => {
          this.setEnrolledUsers(enrollUserData);
        }
      );

}
getEnrolledUsersLists(){
  this._http.get(' http://localhost:8956/EnrollusersAdded/')
      .map(
        (response: Response) => {
          const enrollUsersdatas: EnrolledUsers[] = response.json();
          return enrollUsersdatas;
        }
      )
      .subscribe(
        (enrollUsersdatas: EnrolledUsers[]) => {
          this.setEnrolledUsers(enrollUsersdatas);
        }
      );

}


addUserListEnrolled(enrolledlist:EnrolledUsers) {
  console.log("Sending Term Data to Server");
    return this.http.post('http://localhost:8956/Enrollusers',enrolledlist);
// console.log('Course -- '+Course);
//  return this.http.post(`http://localhost:8080` + `/addCourse`, Course);
}

deleteUserListEnrolled(id:number){
console.log("Sending Content Data to Server ----....");
  return this.http.delete(`http://localhost:8956/EnrollusersAdded/${id}`); 
// console.log('Categories -- '+Categories);
//  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
}

}
