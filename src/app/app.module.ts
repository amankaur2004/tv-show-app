import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvShowResultComponent } from './tv-show-result/tv-show-result.component';
import {HttpClientModule} from '@angular/common/http';
import { TvService } from './tv.service';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowResultComponent,
    TvShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
