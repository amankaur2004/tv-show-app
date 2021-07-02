import { Component } from '@angular/core';
import { ITvShowApp } from './i-tv-show-app';
import { TvService } from './tv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app';
  currentShow: ITvShowApp = {

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
         epiSummary: '' 
}
constructor(private tvService: TvService ){}
doSearch(searchValue : string){

  const userInput = searchValue.split(',').map(s => s.trim());
          this.tvService.getTvShowInformation(userInput[0]).subscribe(data => this.currentShow=data)
}
}