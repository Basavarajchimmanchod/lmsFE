import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { InstitutionalRoles } from './institutionalRoles.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
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
export class InstitutionalRolesService {

  institutionalRolesChanged=new Subject<InstitutionalRoles[]>();

  private institutionaldata:InstitutionalRoles[]=[
    new InstitutionalRoles(
      '',[new DataOrg('')],'','','','','','','','','','')
  ]
  constructor(private _http: Http, private http : HttpClient ,
    /*private courseServices:AddserviceService*/) { }

setInstitutionalRoles(institutionalRolesdata:InstitutionalRoles[]){
  this.institutionaldata=institutionalRolesdata;
  this.institutionalRolesChanged.next(this.institutionaldata.slice());
}
getInstitutionalRoles(){
  return this.institutionaldata.slice();
}
getInstitutionalRole(index:number){
  return this.institutionaldata[index];
}
addInstitutionalRole(termsdata:InstitutionalRoles){
  this.institutionaldata.push(termsdata);
    this.institutionalRolesChanged.next(this.institutionaldata.slice());

}
updateInstitutionalRoles(index: number, newTerms:InstitutionalRoles){
  this.institutionaldata[index]=newTerms;
  //  this.courseServices.editcategories(this.categoriesdata)
  //   .subscribe(
  //     (response)=>console.log(response),
  //     (error)=>console.log(error)
  //   );
   this.institutionalRolesChanged.next(this.institutionaldata.slice());
  }

  deleteInstitutionalRoles(index:number){
    this.institutionaldata.slice(index,1);
  this.institutionalRolesChanged.next(this.institutionaldata.slice());

  }

  addInstitutionalRoles(institutionalRoles:InstitutionalRoles) {
    console.log("Sending Term Data to Server");
      return this.http.post('http://localhost:8081/addInstituteRole',institutionalRoles);
  // console.log('Course -- '+Course);
  //  return this.http.post(`http://localhost:8080` + `/addCourse`, Course);
  }

  getInstitutionalRoless(){
    this._http.get('http://localhost:8081/viewAllInstituteroles/')
        .map(
          (response: Response) => {
            const InstitutionalRolesd: InstitutionalRoles[] = response.json();
            return InstitutionalRolesd;
  
          }
        )
        .subscribe(
          (InstitutionalRolesd: InstitutionalRoles[]) => {
            this.setInstitutionalRoles(InstitutionalRolesd);
          }
        );
  
  }

  editInstitutionalRoles(institutionalRole:InstitutionalRoles,id:number) {
    console.log("Sending Content Data to Server ----....");
      return this.http.put(`http://localhost:8081/updateInstituteroles/${id}`,institutionalRole); 
  // console.log('Categories -- '+Categories);
  //  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
  }
  deleteInstitutionalRole(id:number){
    console.log("Sending Content Data to Server ----....");
      return this.http.delete(`http://localhost:8081/deletInstituteroles/${id}`); 
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



  getInstitutionalData(names:string,codes:string) {
    
      return this._http.get(`http://localhost:8081/searchInstituteroles/${names}/${codes}`)//, options)
          .map(
            (response: Response) => {
            const data:InstitutionalRoles[]=response.json();
             return data
          }
      )
      
      .catch((error: Response) => {
            return Observable.throw('Something went wrong');
          }
      );
    }

    getInstitutionalName(names:string) {
    
      return this._http.get(`http://localhost:8956/InstitutionalRoles?name=${names}`)//, options)
          .map(
            (response: Response) => {
            const data:InstitutionalRoles[]=response.json();
             return data
          }
      )
      
      .catch((error: Response) => {
            return Observable.throw('Something went wrong');
          }
      );
    }

    getInstitutionalCode(codes:string) {
    
      return this._http.get(`http://localhost:8956/InstitutionalRoles?code=${codes}`)//, options)
          .map(
            (response: Response) => {
            const data:InstitutionalRoles[]=response.json();
             return data
          }
      )
      
      .catch((error: Response) => {
            return Observable.throw('Something went wrong');
          }
      );
    }

    getInstitutionalid(id:number) {
    
      return this._http.get(`http://localhost:8081/instituterolesById/${id}`)//, options)
          .map(
            (response: Response) => {
            const data:InstitutionalRoles[]=response.json();
             return data
          }
      )
      
      .catch((error: Response) => {
            return Observable.throw('Something went wrong');
          }
      );
    }

}
