export class EnrolledUser{
    constructor(
        public userName:string,
        public firstName:string,
        public lastName:string,
        public email:string,
        public createBy : string,
        public createDate : string,
        public modifiedBy : string,
        public modifiedDate : string,
        public deletedBy : string,
        public deletedDate : string   
    ){}
}