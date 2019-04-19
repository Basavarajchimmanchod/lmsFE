import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Term } from '../term/term.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

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
export class TermsService {

  termsChanged=new Subject<Term[]>();
  termsChangedid=new Subject<Term[]>();

  private termsdata:Term[]=[
    new Term(
      '','','',new Date(),new Date(),'','','','','','')
  ]
  private termsds:Term[]=[
    new Term(
      '','','',new Date(),new Date(),'','','','','','')
  ]
  constructor(private _http: Http, 
    private http : HttpClient
    /*private courseServices:AddserviceService*/) { }

setTerms(termsdata:Term[]){
  console.log("The terms Data is service class is",termsdata)
  this.termsdata=termsdata;
  this.termsChanged.next(this.termsdata.slice());
}
setTermsById(termsdata:Term[]){
  // console.log("The terms Data is service setTermsById class is",termsdata)
  // this.termsds=termsdata;
  // this.termsChanged.next(this.termsds.slice());
}
getTerms(){
  return this.termsdata.slice();
}
getTerm(index:number){
  console.log("The Index is ",index),
  console.log("The value of the index ",this.termsds)
  return this.termsds[index];
}
c
getTermName(index:string){
  alert(" The  Service class Data is "+index)
  return this.termsdata[index];
}

addterm(termsdata:Term){
  this.termsdata.push(termsdata);
    this.termsChanged.next(this.termsdata.slice());

}
updateterms(index: number, newTerms:Term){
  this.termsdata[index]=newTerms;
  //  this.courseServices.editcategories(this.categoriesdata)
  //   .subscribe(
  //     (response)=>console.log(response),
  //     (error)=>console.log(error)
  //   );
   this.termsChanged.next(this.termsdata.slice());
  }

  deleteterms(index:number){
    this.termsdata.slice(index,1);
  this.termsChanged.next(this.termsdata.slice());

  }

  addTerms(term:Term) {
    console.log("Sending Term Data to Server");
    // console.log(" The Data to server is ", term)
      return this.http.post('http://localhost:8081/addTerms',term);
  // console.log('Course -- '+Course);
  //  return this.http.post(`http://localhost:8080` + `/addCourse`, Course);
 }

 getTermss(){
  this._http.get('http://localhost:8081/viewTerms/')
      .map(
        (response: Response) => {
          const termns: Term[] = response.json();
          return termns;
        }
      )
      .subscribe(
        (termns: Term[]) => {
          this.setTerms(termns);
        }
      );

}

getTermsname(name){
  this._http.get(`http://localhost:8956/termdata?termName=${name}`)
      .map(
        (response: Response) => {
          const termns: Term[] = response.json();
          return termns;
        }
      )
      .subscribe(
        (termns: Term[]) => {
          this.setTerms(termns);
        }
      );

}

getTermsByIds(id){
  this._http.get(`http://localhost:8956/termdata?termName=${id}`)
      .map(
        (response: Response) => {
          const termns: Term[] = response.json();
          return termns;
        }
      )
      .subscribe(
        (termns: Term[]) => {
          this.setTerms(termns);
        }
      );

}

editterm(term:Term,id:number) {
  console.log("Sending Content Data to Server ----....");
    return this.http.put(`http://localhost:8081/updateTerm/${id}`,term); 
// console.log('Categories -- '+Categories);
//  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
}
deleteterm(id:number){
  console.log("Sending Content Data to Server ----....");
    return this.http.delete(`http://localhost:8081/deletTerm/${id}`); 
// console.log('Categories -- '+Categories);
//  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
}
searchterm(id:number){
  console.log("Search Term Data to Server ----....");
    return this.http.get(`http://localhost:8081/searchTerm/${id}`)
    // .map(
    //   (res:Response)=>{
    //     const data:Term[]=res.json();
    //     return data

    //   }
    // ); 
// console.log('Categories -- '+Categories);
//  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
}

getTermsData(name:string,dates?:string) {
    
  return this._http.get(`http://localhost:8956/termdata?termName=${name}&startDate=${dates}`)//, options)
      .map(
        (response: Response) => {
        const data:Term[]=response.json();
        console.log("The Term Data From Service Class"+ data)
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}

getTermsnameData(name:string) {
    
  return this._http.get(`http://localhost:8081/searchTerm/${name}`)//, options)
      .map(
        (response: Response) => {
        const data:Term[]=response.json();
        console.log("The Term Data From Service Class"+ data)
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}
getTermsidData(id:number) {

  // return this.http.get(`http://localhost:8956/termdata?id=${id}`)
  // .map()
    

  return this._http.get(`http://localhost:8081/viewTerm/${id}`)//, options)
      .map(
        (response: Response) => {
        const data:Term[]=response.json();
        console.log("The Term Data From Service Class"+ data)
         return data
      }
  )
  
  .catch((error: Response) => {
    console.log(error);
        return Observable.throw('Something went wrong');
      
      }
  );
}

}
