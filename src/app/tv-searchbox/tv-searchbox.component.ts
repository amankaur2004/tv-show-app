import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tv-searchbox',
  templateUrl: './tv-searchbox.component.html',
  styleUrls: ['./tv-searchbox.component.css']
})
export class TvSearchboxComponent implements OnInit {
  @Output()searchEvent = new EventEmitter<string>();
  search = new FormControl('',[Validators.minLength(3)])
  constructor( ) { }

  ngOnInit(): void { 
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchValue:string) => {
      if (!this.search.invalid){
         this.searchEvent.emit(searchValue)
      }
    })
  }

}

