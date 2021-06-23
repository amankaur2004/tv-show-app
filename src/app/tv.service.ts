import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {InewTVshowData} from './inew-tvshow-data'
import { ITvShowApp } from './i-tv-show-app';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpClient:HttpClient) { }

  getTvShowInformation(name : string){

    return this.httpClient.get<InewTVshowData> (
      'http://singlesearch/shows?q=:name'
      pipe(
    )

  }
  private transformToItvshowApp (data : InewTVshowData) : ITvShowApp {
       return {
        name : data.name, 
        rating: data.rating.average,
        
        image: data.image.original,
        description:data.summary
       }
  }
}
