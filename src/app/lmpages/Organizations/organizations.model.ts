export class Organizations {
    constructor(
         
         public language: string,
         public orgCode:string,
         public orgName:string,
         public startDate:string,
         public endDate:string,
         public type:string,
        //  public contact:string,
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

    