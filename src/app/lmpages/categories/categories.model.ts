import { MultiDataCont } from '../../Shared/multiDataCont';

export class Categorie {
     constructor(
          
          public name: string,
          public description: string,
          public language: string,
          public startDate: string,
          public endDate: string,
          public lms: string,
          public isCategorySearchable: string,
          public status:string,
          public content: MultiDataCont[],
          public createBy : string,
          public createDate : string,
          public modifiedBy : string,
          public modifiedDate : string,
          public deletedBy : string,
          public deletedDate : string     
     ) {}
 }
 
     