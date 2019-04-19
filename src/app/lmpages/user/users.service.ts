import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from './user.model';
// import { AddserviceService } from '../../service/addservice.service'
import { Headers, Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { MultiDataCont } from '../../Shared/multiDataCont';
import { Observable } from 'rxjs/Observable';
import { DataOrg } from '../../Shared/dataOrg';

const httpOptions = {
   
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials':'true'
  })
};

@Injectable()
export class UsersService {

 
  userChanged=new Subject<User[]>();

  private userdata:User[]=[
      new User('','','','','',[new DataOrg('')],'','','','','','',0,'','','','','','',0,'','','','','','')
  ];
  constructor(private _http: Http,
     private http : HttpClient
    /*private courseServices:AddserviceService*/) { }

setUsers(userdata:User[]){
  this.userdata=userdata;
  this.userChanged.next(this.userdata.slice());
}
getUsers(){
  return this.userdata.slice();
}
getUser(index:number){
  return this.userdata[index];
}
addContent(Userdata:User){
  this.userdata.push(Userdata);
    this.userChanged.next(this.userdata.slice());

}
updateUsers(index: number, newUser:User){
  this.userdata[index]=newUser;
  //  this.courseServices.editcategories(this.categoriesdata)
  //   .subscribe(
  //     (response)=>console.log(response),
  //     (error)=>console.log(error)
  //   );
   this.userChanged.next(this.userdata.slice());
  }

  deleteUser(index:number){
    this.userdata.slice(index,1);
  this.userChanged.next(this.userdata.slice());

  }

  addUsers(UserDatas:User){
    console.log("Sending Content Data to Server ----....",UserDatas);
      return this.http.post('http://localhost:8081/addUser/',UserDatas);
    // console.log('Content -- '+Content);
   //  return this.http.post(`http://localhost:8080` + `/addContent`, Content);

    } 

    getUserss(){
      this._http.get('http://localhost:8081/viewAllUsers/')
          .map(
            (response: Response) => {
              const userns: User[] = response.json();
              return userns;
            }
          )
          .subscribe(
            (userns: User[]) => {
              this.setUsers(userns);
            }
          );
    
    }

    getUserds():Observable<any> {
  
      return this._http.get(`http://localhost:8956/UsersData/`)
          .map((response: Response) => {
            const data=response.json();
           return data
          }
      )
      .catch((error: Response) => {
            return Observable.throw('Something went wrong');
          }
      );
    }

    editUsers(Users:User,id:number) {
      console.log("Sending Content Data to Server ----....");
        return this.http.put(`http://localhost:8081/updateUser/${id}`,Users); 
    // console.log('Categories -- '+Categories);
    //  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
   }
   deleteUsers(id:number){
      console.log("Sending Content Data to Server ----....");
        return this.http.delete(`http://localhost:8081/deleteUser/${id}`); 
    // console.log('Categories -- '+Categories);
    //  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
   }

   getOrganizations():Observable<any> {
  
    return this._http.get(`http://localhost:8081/viewAllOrganization/`)
        .map((response: Response) => {
          const data=response.json();
         return data
        }
    )
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }

  getInstitutionalRoles():Observable<any> {
  
    return this._http.get(`http://localhost:8081/viewAllInstituteroles/`)
        .map((response: Response) => {
          const data=response.json();
         return data
        }
    )
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }

  getSystemRoles():Observable<any> {
  
    return this._http.get(` http://localhost:8081/viewAllSystemRoles/`)
        .map((response: Response) => {
          const data=response.json();
         return data
        }
    )
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }


  getUserName(names:string) {
  
    return this._http.get(`http://localhost:8956/UsersData?userName=${names}`)//, options)
        .map(
          (response: Response) => {
          const data:User[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }
  getUserFilters(firstNames:string,lastNames:string,Institutional:string,System:string) {
  
    return this._http.get(`http://localhost:8956/UsersData?firstName=${firstNames}&lastName=${lastNames}&institutionalRoles=${Institutional}&systemRoles=${System}`)//, options)
        .map(
          (response: Response) => {
          const data:User[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }

  getUserall(userNames:string,firstNames:string,lastNames:string,institutional:string,systemss:string) {
  
    return this._http.get(`http://localhost:8956/UsersData?userName=${userNames}&firstName=${firstNames}&lastName=${lastNames}&institutionalRoles=${institutional}&systemRoles=${systemss}`)//, options)
        .map(
          (response: Response) => {
          const data:User[]=response.json();
          console.log("service class",data)
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }

  getUserid(id:number) {
  
    return this._http.get(`http://localhost:8081/viewUserById/${id}`)//, options)
        .map(
          (response: Response) => {
          const data:User[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }

}
