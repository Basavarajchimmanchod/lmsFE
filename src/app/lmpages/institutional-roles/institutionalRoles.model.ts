import { DataOrg } from '../../Shared/dataOrg';

       export class InstitutionalRoles{
           
            constructor(
                      public language:string,
                      public lms:DataOrg[],
                      public code:string,
                      public name:string,
                      public effectiveDate:string,
                      public endDate:string,
                      public createBy:string,
                      public createDate:string,
                      public modifiedBy:string,
                      public modifiedDate:string,
                      public deletedBy:string,
                      public deletedDate:string
            ){
           
            }
        
        }
        