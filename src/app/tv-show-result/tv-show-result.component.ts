import { Component, OnInit } from '@angular/core';
import { ITvShowApp } from '../i-tv-show-app';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-tv-show-result',
  templateUrl: './tv-show-result.component.html',
  styleUrls: ['./tv-show-result.component.css']
})
export class TvShowResultComponent implements OnInit {
  tvShow: ITvShowApp = {
        name : '' ,
        id : 0 ,
        rating: 0,
        genres : '' ,
        image: '' ,
        description: ''
  }
  constructor(private tvService: TvService){ 
    
  }

  ngOnInit(): void {
    this.tvService.getTvShowInformation('stranger').subscribe(data => this.tvShow = data)
  }

}
