import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {InewTVshowData} from './inew-tvshow-data'
import { ITvShowApp } from './i-tv-show-app';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpClient:HttpClient) { }

  getTvShowInformation(name : string){

    return this.httpClient.get<InewTVshowData> (
      `http://api.tvmaze.com/singlesearch/shows?q=:${name}`

    )
      .pipe(

        map(data => this.transformToItvshowApp(data))

    )

  }
  private transformToItvshowApp (data : InewTVshowData) : ITvShowApp {
       return {
        name : data.name, 
        id : data.id,
        rating: data.rating.average,
        genres : data.genres[0],
        image: data.image.original,
        description:data.summary
       }
  }
}




