import { Component, OnInit,Input } from '@angular/core';
import { ITvShowApp } from '../i-tv-show-app';
@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit {
   @Input() epi:ITvShowApp={ 
    name : '' ,
    id : 0 ,
    rating: 0,
    genres : '' ,
    premiered:'',
    status:'',
    image: '' ,
    description: '',
    
    epiUrl: '',
   epiName: '',
   season: '',
   epiNumber: '',
   airdate: '',
   epiImage: '',
   epiSummary: '' }
  constructor() { }

  ngOnInit(): void {
  }
   getEpisodes() {
    let result = '';
    let epiUrlArr = JSON.parse(this.epi.epiUrl);
     let epiNameArr = JSON.parse(this.epi.epiName);
     let seasonArr = JSON.parse(this.epi.season);
    let epiNumberArr = JSON.parse(this.epi.epiNumber);
     let airdateArr = JSON.parse(this.epi.airdate);
     let epiImageArr = JSON.parse(this.epi.epiImage);
    let epiSummaryArr = JSON.parse(this.epi.epiSummary)

    let tableTitle = `<table cellspacing='20' border=1  class="table">
    <thead>
      <tr>
       <th ><b>Image </b></th>
       <th ><b>Season </b></th>
       <th ><b>Episode </b></th>
       <th ><b>Episode Name </b></th>
       <th ><b>Air Date </b></th>
       <th ><b>Summary </b></th>
      </tr>
    </thead>`         

    for (let i = 0; i < airdateArr.length - 1; i++) {
       result += 
      `<tr>
      <td><img  src='${epiImageArr[i]}'/></td>
       <td>${seasonArr[i]}</td>
       <td><a href="${epiUrlArr[i]}">${epiNumberArr[i]}</a></td>
       <td>${epiNameArr[i]}</td>
       <td class="column5">${airdateArr[i]}</td>
       <td>${epiSummaryArr[i]}</td>
       </tr>`
    }

     return tableTitle + result + "</table>";    
   }
}

