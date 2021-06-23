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
      `http://api.tvmaze.com/singlesearch/shows?q=:${name}`
      pipe(
    )

  }
  private transformToItvshowApp (data : InewTVshowData) : ITvShowApp {
       return {
        name : data.name, 
        id : data.id,
        rating: data.rating.average,
        genres : data.genres[0],
        image: `http://api.tvmaze.com/shows/${data.id}/images`,
        description:data.summary
       }
  }
}




