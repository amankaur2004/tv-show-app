export interface ITvShowApp {
  
  name: string,
  id : number,
  rating: number,
  genres: string,
  premiered:string,
  status:string
  //cast: string,
  image: string,
  description:string,
  
  // episode
  epiUrl: string,
 epiName: string,
  season: string,
  epiNumber: string,
  airdate: string,
  epiImage: string,
  epiSummary: string
}

