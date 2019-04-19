import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SystemRoles } from './systemRoles.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

import { DataOrg } from '../../Shared/dataOrg'
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
export class SystemRolesService {

 
  systemRolesChanged=new Subject<SystemRoles[]>();

  private systemdata:SystemRoles[]=[
    new SystemRoles(
      '',[new DataOrg('')],'','','','','','','','','','')
  ]
  constructor(private _http: Http, private http : HttpClient ,
    /*private courseServices:AddserviceService*/) { }

setSystemRoles(institutionalRolesdata:SystemRoles[]){
  this.systemdata=institutionalRolesdata;
  this.systemRolesChanged.next(this.systemdata.slice());
}
getSystemRoles(){
  return this.systemdata.slice();
}
getSystemRole(index:number){
  return this.systemdata[index];
}
addSystemRole(termsdata:SystemRoles){
  this.systemdata.push(termsdata);
    this.systemRolesChanged.next(this.systemdata.slice());

}
updateSystemRoles(index: number, newTerms:SystemRoles){
  this.systemdata[index]=newTerms;
  //  this.courseServices.editcategories(this.categoriesdata)
  //   .subscribe(
  //     (response)=>console.log(response),
  //     (error)=>console.log(error)
  //   );
   this.systemRolesChanged.next(this.systemdata.slice());
  }

  deleteSystemRoles(index:number){
    this.systemdata.slice(index,1);
  this.systemRolesChanged.next(this.systemdata.slice());

  }

  addSystemRoles(institutionalRoles:SystemRoles) {
    console.log("Sending Term Data to Server");
      return this.http.post('http://localhost:8081/addSystemRole',institutionalRoles);
  // console.log('Course -- '+Course);
  //  return this.http.post(`http://localhost:8080` + `/addCourse`, Course);
  }

  getSystemRoless(){
    this._http.get('http://localhost:8081/viewAllSystemRoles/')
        .map(
          (response: Response) => {
            const InstitutionalRolesd: SystemRoles[] = response.json();
            return InstitutionalRolesd;
  
          }
        )
        .subscribe(
          (InstitutionalRolesd: SystemRoles[]) => {
            this.setSystemRoles(InstitutionalRolesd);
          }
        );
  
  }

  editSystemRoles(institutionalRole:SystemRoles,id:number) {
    console.log("Sending Content Data to Server ----....");
      return this.http.put(`http://localhost:8081/updateSystemRoleById/${id}`,institutionalRole); 
  // console.log('Categories -- '+Categories);
  //  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
  }
  deleteSystemRole(id:number){
    console.log("Sending Content Data to Server ----....");
      return this.http.delete(`http://localhost:8081/deleteSystemRole/${id}`); 
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


  getsystemData(names:string,codes:string) {
    
    return this._http.get(`http://localhost:8956/SystemRoles?roleName=${names}&roleid=${codes}`)//, options)
        .map(
          (response: Response) => {
          const data:SystemRoles[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }

  getsystemName(names:string) {
  
    return this._http.get(`http://localhost:8081/searchSystemRole/${names}`)//, options)
        .map(
          (response: Response) => {
          const data:SystemRoles[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }

  getsystemCode(codes:string) {
  
    return this._http.get(`http://localhost:8956/SystemRoles?roleId=${codes}`)//, options)
        .map(
          (response: Response) => {
          const data:SystemRoles[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }

  getSystemid(id:number) {
  
    return this._http.get(`http://localhost:8081/findSystemRoleById/${id}`)//, options)
        .map(
          (response: Response) => {
          const data:SystemRoles[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }
}
