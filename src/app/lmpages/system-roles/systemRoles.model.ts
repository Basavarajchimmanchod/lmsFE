import { DataOrg } from '../../Shared/dataOrg';

export class SystemRoles{
           
    constructor(
              public language:string,
              public organization:DataOrg[],
              public roleId:string,
              public roleName:string,
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
