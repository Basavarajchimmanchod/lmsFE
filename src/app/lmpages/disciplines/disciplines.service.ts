import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Discipline } from '../disciplines/discipliness.model';
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
export class DisciplinesService {

 disciplinesChanged=new Subject<Discipline[]>();

  private disciplinesdata:Discipline[]=[
    new Discipline(
      [new DataOrg('')],'','','','',0,'','','','','','','')
  ]
  constructor(
    private _http: Http,
     private http : HttpClient 
     ) { }

setDisciplines(disciplinesdata:Discipline[]){
  this.disciplinesdata=disciplinesdata;
  this.disciplinesChanged.next(this.disciplinesdata.slice());
}
getDisciplines(){
  return this.disciplinesdata.slice();
}
getDiscipline(index:number){
  return this.disciplinesdata[index];
}
addDiscipline(disciplinesdata:Discipline){
  this.disciplinesdata.push(disciplinesdata);
    this.disciplinesChanged.next(this.disciplinesdata.slice());

}
updateDisciplines(index: number, newDiscipline:Discipline){
  this.disciplinesdata[index]=newDiscipline;
  //  this.courseServices.editcategories(this.categoriesdata)
  //   .subscribe(
  //     (response)=>console.log(response),
  //     (error)=>console.log(error)
  //   );
   this.disciplinesChanged.next(this.disciplinesdata.slice());
  }

  deleteDisciplines(index:number){
    this.disciplinesdata.slice(index,1);
  this.disciplinesChanged.next(this.disciplinesdata.slice());

  }

  addDisciplines(discipline:Discipline) {
        console.log("Sending Discipline Data to Server");
        console.log("data",discipline)
          return this.http.post('http://localhost:8081/addDiscipline',discipline);
     }

     getDiscipliness(){
      this._http.get('http://localhost:8081/viewDisciplines/')
          .map(
            (response: Response) => {
              const Disciplines: Discipline[] = response.json();
              return Disciplines;
            }
          )
          .subscribe(
            (Disciplines: Discipline[]) => {
              this.setDisciplines(Disciplines);
            }
          );
    
    }

    editdiscipline(discipline:Discipline,id:number) {
      console.log("Sending Content Data to Server ----....");
        return this.http.put(`http://localhost:8081/upadateDiscipline/${id}`,discipline); 
    }
    
    deletediscipline(id:number){
      console.log("Sending Content Data to Server ----....");
        return this.http.delete(`http://localhost:8081/deleteDiscipline/${id}`); 
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


    getDisciplineidData(id:number) {
      return this._http.get(`http://localhost:8081/viewDiscipline/${id}`)//, options)
          .map(
            (response: Response) => {
            const data:Discipline[]=response.json();
             return data
          }
      )
      
      .catch((error: Response) => {
            return Observable.throw('Something went wrong');
          }
      );
    }

    getDisciplinenameData(names:string) {
    
      return this._http.get(`http://localhost:8081/searchDisciplinebyName/${names}`)//, options)
          .map(
            (response: Response) => {
            const data:Discipline[]=response.json();
            console.log("The Term Data From Service Class"+ data)
             return data
          }
      )
      
      .catch((error: Response) => {
            return Observable.throw('Something went wrong');
          }
      );
    }

    getDisciplineData(names:string,statuss:string) {
    
      return this._http.get(`http://localhost:8081/searchDiscipline/${names}/${statuss}`)//, options)
          .map(
            (response: Response) => {
            const data:Discipline[]=response.json();
             return data
          }
      )
      
      .catch((error: Response) => {
            return Observable.throw('Something went wrong');
          }
      );
    }
}
