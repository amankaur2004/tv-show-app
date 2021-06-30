import { Component, OnInit,Input } from '@angular/core';
import { ITvShowApp } from '../i-tv-show-app';

@Component({
  selector: 'app-tv-show-result',
  templateUrl: './tv-show-result.component.html',
  styleUrls: ['./tv-show-result.component.css']
})
export class TvShowResultComponent implements OnInit {
  @Input() tvShow: ITvShowApp = {
        name : '' ,
        id : 0 ,
        rating: 0,
        genres : '' ,
        premiered:'',
        status:'',
        image: '' ,
        description: ''
  }
  constructor(){ 
    
  }

  ngOnInit(): void {
   
  }

}
