import { DataOrg } from '../../Shared/dataOrg';

export class User {
    constructor(
         
         public userName: string,
         public firstName:string,
         public lastName:string,
         public email:string,
         public language:string,
         public organization:DataOrg[],
         public institutionalRoles:string,
         public systemRoles:string,
         public password:string,
         public startDate:string,
         public endDate:string,
         public voice:string,
         public mobile:number,
         public fax:string,
         public affiliation:string,
         public street:string,
         public city:string,
         public country:string,
         public state:string,
         public postalCode:number,
         public createBy : string,
         public createDate : string,
         public modifiedBy : string,
         public modifiedDate : string,
         public deletedBy : string,
         public deletedDate : string     
    ) {}
}

    