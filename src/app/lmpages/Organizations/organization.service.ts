import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Organizations } from './organizations.model';
// import { AddserviceService } from '../../service/addservice.service'
import { Headers, Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { MultiDataCont } from '../../Shared/multiDataCont';
import { Observable } from 'rxjs/Observable';

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
export class OrganizationService {

 
orgChanged=new Subject<Organizations[]>();

private orgdata:Organizations[]=[
  new Organizations('','','','','','','','','','',0,'','','','','','')
]
constructor(private _http: Http,
   private http : HttpClient
  /*private courseServices:AddserviceService*/) { }

setOrg(orgdata:Organizations[]){
this.orgdata=orgdata;
this.orgChanged.next(this.orgdata.slice());
}
getOrgs(){
return this.orgdata.slice();
}
getOrg(index:number){
return this.orgdata[index];
}
addOrg(orgdata:Organizations){
this.orgdata.push(orgdata);
  this.orgChanged.next(this.orgdata.slice());

}
updateorg(index: number, newOrg:Organizations){
this.orgdata[index]=newOrg;
//  this.courseServices.editcategories(this.categoriesdata)
//   .subscribe(
//     (response)=>console.log(response),
//     (error)=>console.log(error)
//   );
 this.orgChanged.next(this.orgdata.slice());
}

deleteOrg(index:number){
  this.orgdata.slice(index,1);
this.orgChanged.next(this.orgdata.slice());

}
addOrgs(orgData:Organizations) {
  console.log("Sending Courses Data to Server " +orgData);
    return this.http.post('http://localhost:8081/addOrganization',orgData);
// console.log('Course -- '+Course);
//  return this.http.post(`http://localhost:8080` + `/addCourse`, Course);
}

getOrgss(){
this._http.get('http://localhost:8081/viewAllOrganization/')
    .map(
      (response: Response) => {
        const coursedatan: Organizations[] = response.json();
        return coursedatan;
      }
    )
    .subscribe(
      (coursedatan: Organizations[]) => {
        this.setOrg(coursedatan);
      }
    );
}

editOrg(orgData:Organizations,id:number) {
console.log("Sending Content Data to Server ----....");
  return this.http.put(`http://localhost:8081/updateOrganization/${id}`,orgData); 
// console.log('Categories -- '+Categories);
//  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
}
deleteOrgs(id:number){
console.log("Sending Content Data to Server ----....");
  return this.http.delete(`http://localhost:8081/deleteOrganization/${id}`); 
// console.log('Categories -- '+Categories);
//  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
}

getUser():Observable<any> {
  
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



getOrgData(names:string,codes:string,types:string) {
    
  return this._http.get(`http://localhost:8081/searchOrganization/${names}/${codes}/${types}`)//, options)
      .map(
        (response: Response) => {
        const data:Organizations[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}

getOrgName(names:string) {

  return this._http.get(`http://localhost:8081/searchOrganizationByName/${names}`)//, options)
      .map(
        (response: Response) => {
        const data:Organizations[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}

getOrgTypes(types:string) {

  return this._http.get(`http://localhost:8081/searchOrganizationByType/${types}`)//, options)
      .map(
        (response: Response) => {
        const data:Organizations[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}
getOrgStatus(codes:string) {

  return this._http.get(`http://localhost:8081/searchOrganizationByCode/${codes}`)//, options)
      .map(
        (response: Response) => {
        const data:Organizations[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}

getOrgStatuss(codes:string,types:string) {

  return this._http.get(`http://localhost:8956/Organization?orgCode=${codes}&type=${types}`)//, options)
      .map(
        (response: Response) => {
        const data:Organizations[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}

getOrgnames(names:string,codes:string) {
  return this._http.get(`http://localhost:8956/Organization?orgName=${names}&orgCode=${codes}`)//, options)
      .map(
        (response: Response) => {
        const data:Organizations[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}


getOrgid(id:number) {

  return this._http.get(`http://localhost:8081/viewOrganizationById/${id}`)//, options)
      .map(
        (response: Response) => {
        const data:Organizations[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}


}
