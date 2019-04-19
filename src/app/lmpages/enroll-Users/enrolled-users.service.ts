import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { EnrolledUsers } from './enrolledUsers.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class EnrolledUsersService {

  enrollUserChanged=new Subject<EnrolledUsers[]>();

  private enrollUsersdata:EnrolledUsers[]=[
    new EnrolledUsers(
      '','','','','','','','','','')
  ]
  constructor(
    private _http: Http,
    private http : HttpClient
  ) { }

  setEnrollUsers(enrollUsersdata:EnrolledUsers[]){
    this.enrollUsersdata=enrollUsersdata;
    this.enrollUserChanged.next(this.enrollUsersdata.slice());
  }
  getEnrollUsers(){
    return this.enrollUsersdata.slice();
  }
  getEnrollUser(index:number){
    return this.enrollUsersdata[index];
  }
  addEnrollUsers(enrollUsersdata:EnrolledUsers){
    this.enrollUsersdata.push(enrollUsersdata);
      this.enrollUserChanged.next(this.enrollUsersdata.slice());
  
  }

  getEnrolledUserss(){
    this._http.get('http://localhost:8956/Enrollusers/')
        .map(
          (response: Response) => {
            const enrolledUserData: EnrolledUsers[] = response.json();
            return enrolledUserData;
          }
        )
        .subscribe(
          (enrolledUserData: EnrolledUsers[]) => {
            this.setEnrollUsers(enrolledUserData);
          }
        );
  
  }

  addEnrolledListUser(enrolledlist:EnrolledUsers) {
    console.log("Sending Term Data to Server");
      return this.http.post('http://localhost:8956/EnrollusersAdded/',enrolledlist);
  // console.log('Course -- '+Course);
  //  return this.http.post(`http://localhost:8080` + `/addCourse`, Course);
 }

 deleteEnrolledListUser(id:number){
  console.log("Sending Content Data to Server ----....");
    return this.http.delete(`http://localhost:8956/Enrollusers/${id}`); 
// console.log('Categories -- '+Categories);
//  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
}
}
