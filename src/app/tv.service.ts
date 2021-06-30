import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {InewTVshowData} from './inew-tvshow-data'
import { ITvShowApp } from './i-tv-show-app';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpClient:HttpClient) { }

  getTvShowInformation(search : string){
    let showName ='';
    if (typeof search === 'string'){
      showName = `q=${search}`
    }

    return this.httpClient.get<InewTVshowData> (
      `http://api.tvmaze.com/singlesearch/shows?${showName}`

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
        premiered: data.premiered,
        status: data.status,
        image: data.image.original,
        description:data.summary
       }
  }
}




