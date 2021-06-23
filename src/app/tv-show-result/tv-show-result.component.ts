import { Component, OnInit } from '@angular/core';
import { ITvShowApp } from '../i-tv-show-app';

@Component({
  selector: 'app-tv-show-result',
  templateUrl: './tv-show-result.component.html',
  styleUrls: ['./tv-show-result.component.css']
})
export class TvShowResultComponent implements OnInit {
  tvShow:ITvShowApp={
    name: '',
    rating: 0,
    airdate: new Date(),
    creator:'',
    genres: '',
    cast: '',
     image: '',
    description:''
  } 
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
