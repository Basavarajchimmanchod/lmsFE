import { MultiDataCont } from '../../Shared/multiDataCont';
import { DataOrg } from '../../Shared/dataOrg';



export class Content {
    constructor(
        public language: string,
        public ownerOrganizations: DataOrg[],
        public name: string,
        public type:string,
        public discription:string,
        public startDate:string,
        public endDate:string,
        public status:string,
        public pic:Blob,
        public contactName:string,
        public contactNumber:number,
        public createBy : string,
         public createDate : string,
         public modifiedBy : string,
         public modifiedDate : string,
         public deletedBy : string,
         public deletedDate : string 

    ) {}
}
