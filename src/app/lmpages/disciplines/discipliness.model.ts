import { DataOrg } from '../../Shared/dataOrg'

export class Discipline {
    constructor(
         
         public ownerOrganization: DataOrg[],
         public code:string,
         public language:string,
         public name:string,
         public description:string,
         public ordinal:number,
         public status:string,
         public createBy : string,
         public createDate : string,
         public modifiedBy : string,
         public modifiedDate : string,
         public deletedBy : string,
         public deletedDate : string     
    ) {}
}

    