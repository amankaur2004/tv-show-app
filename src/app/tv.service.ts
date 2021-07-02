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

  getTvShowInformation(search : string){
    let showName ='';
    if (typeof search === 'string'){
      showName = `q=${search}`
    }

    return this.httpClient.get<InewTVshowData> (
      `http://api.tvmaze.com/singlesearch/shows?${showName}&embed=episodes`
      
    )
      .pipe(

        map(data => this.transformToItvshowApp(data))

    )

  }

  private returnIfValid(data:string){
    if(data == null) return "";
    if(data === null) return "";
    if(typeof data === 'undefined') return "";
    return data;
  }

  private transformToItvshowApp (data : InewTVshowData) : ITvShowApp {
    // Get all elements from the <episodes>
    let myEpiArr = data._embedded.episodes;
    let epiUrls = [];
    let epiNames = [];
    let seasons = [];
    let epiNumbers = [];
    let airdates = [];
    let epiImages = [];
    let epiSummaries = [];
    for (let i = 0; i < myEpiArr.length - 1; i++) {
      epiUrls.push(this.returnIfValid(myEpiArr[i].url));
      epiNames.push(this.returnIfValid(myEpiArr[i].name));
      seasons.push(this.returnIfValid(myEpiArr[i].season));
      epiNumbers.push(myEpiArr[i].number);
      airdates.push(this.returnIfValid(myEpiArr[i].airdate));
      if(myEpiArr[i].image != null && myEpiArr[i].image !== null)
        epiImages.push(this.returnIfValid(myEpiArr[i].image.medium));
      epiSummaries.push(this.returnIfValid(myEpiArr[i].summary));
    }

    // Change array to string.
    let epiUrlsStr = JSON.stringify(epiUrls);
    let epiNamesStr = JSON.stringify(epiNames);
    let seasonsStr = JSON.stringify(seasons);
    let epiNumbersStr = JSON.stringify(epiNumbers);
    let airdatesStr = JSON.stringify(airdates);
    let epiImagesStr = JSON.stringify(epiImages);
    let epiSummariesStr = JSON.stringify(epiSummaries);



       return {
        name : data.name, 
        id : data.id,
        rating: data.rating.average,
        genres : data.genres[0],
        premiered: data.premiered,
        status: data.status,
        image: data.image.original,
        description:data.summary,

        epiUrl: epiUrlsStr,
        epiName: epiNamesStr,
        season: seasonsStr,
        epiNumber: epiNumbersStr,
        airdate: airdatesStr,
        epiImage: epiImagesStr,
        epiSummary: epiSummariesStr
       }
  }
}




