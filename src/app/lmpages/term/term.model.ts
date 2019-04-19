export class Term {
    
      constructor(
           
           public termName: string,
           public termDescription:string,
           public duration:string,
           public startDate:Date,
           public endDate:Date,
           public createBy : string,
           public createDate : string,
           public modifiedBy : string,
           public modifiedDate : string,
           public deletedBy : string,
           public deletedDate : string,
      ) {
           
      }
  }
  
      