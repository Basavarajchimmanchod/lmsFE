import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Content } from './content.model';
// import { AddserviceService } from '../../service/addservice.service'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

import { DataOrg } from '../../Shared/dataOrg';
import { MultiDataCont } from '../../Shared/multiDataCont';


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
export class ContentService {

  contentChanged=new Subject<Content[]>();

  private contentdata:Content[]=[
    new Content('',[new DataOrg('')],'','','','','','',new Blob,'',0,'','','','','','')
  ]
  constructor(private _http: Http,
     private http : HttpClient
    /*private courseServices:AddserviceService*/) { }

setContents(contentdata:Content[]){
  this.contentdata=contentdata;
  this.contentChanged.next(this.contentdata.slice());
}
getContents(){
  return this.contentdata.slice();
}
getContent(index:number){
  return this.contentdata[index];
}
addContent(contentdata:Content){
  this.contentdata.push(contentdata);
    this.contentChanged.next(this.contentdata.slice());

}
updateContents(index: number, newContent:Content){
  this.contentdata[index]=newContent;
  //  this.courseServices.editcategories(this.categoriesdata)
  //   .subscribe(
  //     (response)=>console.log(response),
  //     (error)=>console.log(error)
  //   );
   this.contentChanged.next(this.contentdata.slice());
  }

  deleteContent(index:number){
    this.contentdata.slice(index,1);
  this.contentChanged.next(this.contentdata.slice());

  }

  addContents(Contentdata:Content){
    console.log("Sending Content Data to Server ----....");
      return this.http.post('http://localhost:8081/addContent',Contentdata);
    // console.log('Content -- '+Content);
   //  return this.http.post(`http://localhost:8080` + `/addContent`, Content);

    } 

    getContentss(){
      this._http.get('http://localhost:8081/viewAllContent/')
          .map(
            (response: Response) => {
              const contentns: Content[] = response.json();
              return contentns;
            }
          )
          .subscribe(
            (contentns: Content[]) => {
              this.setContents(contentns);
            }
          );
    
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

    editcontents(Contents:Content,id:number) {
      console.log("Sending Content Data to Server ----....");
        return this.http.put(`http://localhost:8081/upadteContent/${id}`,Contents); 
    // console.log('Categories -- '+Categories);
    //  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
   }
   deletecontent(id:number){
      console.log("Sending Content Data to Server ----....");
        return this.http.delete(`http://localhost:8081/deleteContent/${id}`); 
    // console.log('Categories -- '+Categories);
    //  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
   }

   getCategories():Observable<any> {
  
    return this._http.get(`http://localhost:8081/viewAllCategory/`)
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

  
  getContentData(names:string,statuss:string,types:string) {
    
    return this._http.get(`http://localhost:8956/contentdata?name=${names}&status=${statuss}&type=${types}`)//, options)
        .map(
          (response: Response) => {
          const data:Content[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }

  getContentName(names:string) {
  
    return this._http.get(`http://localhost:8081/searchContentByName/${names}`)//, options)
        .map(
          (response: Response) => {
          const data:Content[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }

  getContentTypes(types:string) {
  
    return this._http.get(`http://localhost:8956/contentdata?type=${types}`)//, options)
        .map(
          (response: Response) => {
          const data:Content[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }
  getContentStatus(statuss:string) {
  
    return this._http.get(`http://localhost:8081/searchContent/${statuss}`)//, options)
        .map(
          (response: Response) => {
          const data:Content[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }

  getContentStatuss(statuss:string,types:string) {
  
    return this._http.get(`http://localhost:8956/contentdata?status=${statuss}&type=${types}`)//, options)
        .map(
          (response: Response) => {
          const data:Content[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }

  getContentnames(names:string,statuss:string) {
    return this._http.get(`http://localhost:8956/contentdata?name=${names}&status=${statuss}`)//, options)
        .map(
          (response: Response) => {
          const data:Content[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }


  getContentid(id:number) {
  
    return this._http.get(`http://localhost:8081/viewContentById/${id}`)//, options)
        .map(
          (response: Response) => {
          const data:Content[]=response.json();
           return data
        }
    )
    
    .catch((error: Response) => {
          return Observable.throw('Something went wrong');
        }
    );
  }
}
