import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Content } from '../lmpages/content/add-content/content.model';
// import { Course } from '../lmpages/courses/add-courses/courses.model';
//import { throwError } from 'rxjs';
import { ContentService } from '../lmpages/content/content.service'
import { catchError } from 'rxjs/operators';
import { _throw as throwError } from 'rxjs/observable/throw';
import { Headers, Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { CategoriesService } from '../lmpages/categories/categories.service';
import { Content} from '../lmpages/content/content.model';
import { Course } from '../lmpages/courses/course.model';
// import { Term } from '../lmpages/term/add-term/term.model';
import { Term } from '../lmpages/term/term.model';
import { Discipline } from '../lmpages/disciplines/discipliness.model'
import { CoursesService } from '../lmpages/courses/courses.service'
import { TermsService } from '../lmpages/term/terms.service';
import { DisciplinesService } from '../lmpages/disciplines/disciplines.service';
// import { Discipline } from '../lmpages/disciplines/add-disciplines/discipline.model';

import { InstitutionalRoles } from '../lmpages/institutional-roles/institutionalRoles.model';
import { InstitutionalRolesService } from '../lmpages/institutional-roles/institutional-roles.service';
import { Categorie } from '../lmpages/categories/categories.model';

import { EnrollUsersService } from '../lmpages/enroll-Users/enroll-users.service';
import { EnrolledUsers } from '../lmpages/enroll-Users/enrolledUsers.model';
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
export class AddserviceService {

  private datas:Content[];
  _url;
  constructor(private _http: Http, private http : HttpClient ,
     private ContentService:ContentService,
  private TermServicess:TermsService,
  private coursesServicesn:CoursesService,
  private categoriesService:CategoriesService,
  private disciplineServices:DisciplinesService,
  private institutionalRolesser:InstitutionalRolesService,
  private enrolledUsersServices:EnrollUsersService) { }



getCategoriess():Observable<any> {
  
    return this._http.get(`http://localhost:8956/categoriesdata/`)
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



getCourse():Observable<any>{
   return this._http.get(`http://localhost:8956/Coursedata/`)
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



 getContents(id:number) {
    
    return this._http.get(`http://localhost:8956/Contentdatas/${id}`)//, options)
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

getTerms(name:string) {
    
    return this._http.get(`http://localhost:8956/termdata?termName=${name}`)//, options)
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




}
