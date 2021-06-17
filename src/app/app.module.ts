import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvShowResultComponent } from './tv-show-result/tv-show-result.component';
import {HttpClientModule} from '@angular/common/http';
import { TvService } from './tv.service';

@NgModule({
  declarations: [
    AppComponent,
    TvShowResultComponent
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
