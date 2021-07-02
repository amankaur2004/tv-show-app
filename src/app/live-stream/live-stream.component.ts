import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { IliveShow } from '../ilive-show';
import { NewLiveShowService } from '../new-live-show.service';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent implements OnInit {

  liveShow2: IliveShow[] = [];

  constructor(private newLiveShow: NewLiveShowService) { }

ngOnInit() {
 //this.newLiveShow.getLiveStreamSchedule().subscribe((data) => {this.liveShow2 = data.slice(0,5)})
this.newLiveShow.getLiveStreamSchedule()
    .subscribe(data => this.liveShow2 = data.slice(0,5))
   
    //.subscribe((data) => {
      //this.liveShow2 = data.slice(0, 5);
   // });

   //console.log('aman')

  


}


}



