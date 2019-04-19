import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Categorie } from './categories.model';
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
export class CategoriesService {

  categoriesChanged=new Subject<Categorie[]>();

  private categoriesdata:Categorie[]=[
    new Categorie(
      '','','','','','','','',[new MultiDataCont('')],'','','','','','')
  ]
  constructor(private _http: Http, private http : HttpClient 
    /*private courseServices:AddserviceService*/ ) { }

setCategories(categoriesdata:Categorie[]){
  this.categoriesdata=categoriesdata;
  this.categoriesChanged.next(this.categoriesdata.slice());
}
getCategories(){
  return this.categoriesdata.slice();
}
getCategorie(index:number){
  return this.categoriesdata[index];
}
addCategorie(categoriesdata:Categorie){
  this.categoriesdata.push(categoriesdata);
    this.categoriesChanged.next(this.categoriesdata.slice());

}
updateCategories(index: number, newCategories:Categorie){
  this.categoriesdata[index]=newCategories;
  //  this.courseServices.editcategories(this.categoriesdata)
  //   .subscribe(
  //     (response)=>console.log(response),
  //     (error)=>console.log(error)
  //   );
   this.categoriesChanged.next(this.categoriesdata.slice());
   console.log("Categoriesdata",this.categoriesdata);
   
  }

  deleteCategories(index:number){
    this.categoriesdata.slice(index,1);
  this.categoriesChanged.next(this.categoriesdata.slice());
  this.display();
  }

  addcategories(Categories:Categorie) {
    console.log("Sending Categories Data to Server ----....");
      return this.http.post('http://localhost:8081/addCategory',Categories); 
  // console.log('Categories -- '+Categories);
  //  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
 } 

 getCategoriesss(){
  this._http.get('http://localhost:8081/viewAllCategory/')
     .map(
       (response: Response) => {
         const categorie: Categorie[] = response.json();
         return categorie;
       }
     )
     .subscribe(
       (categorie: Categorie[]) => {
         this.setCategories(categorie);
       }
     );
}
editcategories(Categories:Categorie,id:number) {
  console.log("Sending Categories Data to Server ----....");
  // return this.http.put(`http://localhost:8956/categoriesdata/`,this.categoriesService.getCategories()); 

  return this.http.put(`http://localhost:8081/updateCategory/${id}`,Categories); 
// console.log('Categories -- '+Categories);
//  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
}

deletecategorie(id:number){
  console.log("Sending Categories Data to Server ----....");
    return this.http.delete(`http://localhost:8081/deleteCategory/${id}`); 
// console.log('Categories -- '+Categories);
//  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
}
display(){
  console.log("Deleted Categories", this.categoriesdata)

}


getContent():Observable<any> {
  
  return this._http.get(`http://localhost:8081/viewAllContent/`)
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

getCategorieData(names:string,searchable:string,statuss:string) {
    
  return this._http.get(`http://localhost:8081/searchCategory/${names}/${searchable}/${statuss}`)//, options)
      .map(
        (response: Response) => {
        const data:Categorie[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}

getCategorieName(names:string) {

  return this._http.get(`http://localhost:8081/searchCategory/${names}`)//, options)
      .map(
        (response: Response) => {
        const data:Categorie[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}

getCategorieid(id:number) {

  return this._http.get(`http://localhost:8081/viewCategoryById/${id}`)//, options)
      .map(
        (response: Response) => {
        const data:Categorie[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}
}
