export interface IProduct{
    Title:string,
    Season:number,
    totalSeasons:number,
    Episodes:[  
      {  
          Title:string,
          Released:string,
          Episode:number,
          imdbRating:number,
          imdbID:string
      }],
    }


