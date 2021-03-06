import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Course } from '../courses/course.model';
import { Headers, Http, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
export class CoursesService {

coursesChanged=new Subject<Course[]>();

  private coursesdata:Course[]=[
    new Course([new DataOrg('')],'','',0,'','','','','','','','',
                '','','',[new MultiDataCont('')],'','','','','','','',
                0,0,0,0,'','','','','','','','',
                '','','','')
  ]
  constructor(private _http: Http,
     private http : HttpClient
    /*private courseServices:AddserviceService*/) { }

setCourses(coursesdata:Course[]){
  this.coursesdata=coursesdata;
  this.coursesChanged.next(this.coursesdata.slice());
}
getCourses(){
  return this.coursesdata.slice();
}
getCourse(index:number){
  return this.coursesdata[index];
}
addContent(coursesdata:Course){
  this.coursesdata.push(coursesdata);
    this.coursesChanged.next(this.coursesdata.slice());

}
updateContents(index: number, newCourse:Course){
  this.coursesdata[index]=newCourse;
  //  this.courseServices.editcategories(this.categoriesdata)
  //   .subscribe(
  //     (response)=>console.log(response),
  //     (error)=>console.log(error)
  //   );
   this.coursesChanged.next(this.coursesdata.slice());
  }

  deleteContent(index:number){
    this.coursesdata.slice(index,1);
  this.coursesChanged.next(this.coursesdata.slice());

  }
  addcourses(courses:Course) {
    console.log("Sending Courses Data to Server");
      return this.http.post(' http://localhost:8081/addCourse',courses);
  // console.log('Course -- '+Course);
  //  return this.http.post(`http://localhost:8080` + `/addCourse`, Course);
 }

 getCoursess(){
  this._http.get('http://localhost:8081/viewAllCourses/')
      .map(
        (response: Response) => {
          const coursedatan: Course[] = response.json();
          return coursedatan;
        }
      )
      .subscribe(
        (coursedatan: Course[]) => {
          this.setCourses(coursedatan);
        }
      );
}

editCourse(course:Course,id:number) {
  console.log("Sending Content Data to Server ----....");
    return this.http.put(`http://localhost:8081/upadteCourse/${id}`,course); 
// console.log('Categories -- '+Categories);
//  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
}
deleteCourse(id:number){
  console.log("Sending Content Data to Server ----....");
    return this.http.delete(`http://localhost:8956/coursedata/${id}`); 
// console.log('Categories -- '+Categories);
//  return this.http.post(`http://localhost:8080` + `/addCategory`, Categories);
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

getDiscipline():Observable<any> {
  
  return this._http.get(`http://localhost:8081/viewDiscipline/`)
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


getCourseData(names:string,codes:string,disciplinev:string,deliveryMethods:string,statuss:string) {
    
  return this._http.get(`http://localhost:8081/searchCourseByNameCodeMajorDlmStatus/${names}/${codes}/${disciplinev}/${deliveryMethods}/${statuss}`)//, options)
      .map(
        (response: Response) => {
        const data:Course[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}

getCcourseName(names:string) {

  return this._http.get(`http://localhost:8081/searchCourseByName/${names}`)//, options)
      .map(
        (response: Response) => {
        const data:Course[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}
getCcourseCode(codes:string) {

  return this._http.get(`http://localhost:8081/searchCourseByCode/${codes}`)//, options)
      .map(
        (response: Response) => {
        const data:Course[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}

getCourseid(id:number) {

  return this._http.get(`http://localhost:8081/viewCourseById/${id}`)//, options)
      .map(
        (response: Response) => {
        const data:Course[]=response.json();
         return data
      }
  )
  
  .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      }
  );
}


}
