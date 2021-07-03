import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IliveShowData} from './ilive-show-data'
import { IliveShow } from './ilive-show';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators';
import { InewTVshowData } from './inew-tvshow-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewLiveShowService {

  constructor(private httpClient:HttpClient) { }

  getLiveStreamSchedule () {
    let date;
    date = new Date().toISOString().substring(0, 10)
    return this.httpClient.get<IliveShowData[]> (
     `https://api.tvmaze.com/schedule?date=${date}`).pipe(
     map((data) => data.map((show) => this.IliveShowTransform(show)))
    )
 }

  private IliveShowTransform (data : IliveShowData) : IliveShow {
    return {
      name : data.show.name,
      image : data.show.image.medium,
    }
  }
}