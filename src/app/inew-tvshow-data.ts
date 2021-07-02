export interface InewTVshowData {
    name : string,
    id : number,
    rating : {
        average : number
    },
    genres : string[], 
    
    premiered: string,
    status:string,
    image : {
        original:string, 

    }, 
    summary: string,
    _embedded: {
     episodes: [
         {
           url: string
          name: string
         season: string
           number: string
         airdate: string
          image: {
             medium: string
          }
           summary: string
         }
       ]


}


}