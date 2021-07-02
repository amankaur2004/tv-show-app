import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvShowResultComponent } from './tv-show-result/tv-show-result.component';
import {HttpClientModule} from '@angular/common/http';
import { TvService } from './tv.service';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { TvSearchboxComponent } from './tv-searchbox/tv-searchbox.component';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule} from '@angular/material/button'
import{MatToolbarModule} from '@angular/material/toolbar'
import{MatIconModule} from '@angular/material/icon'
import{MatCardModule} from '@angular/material/card'
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input';
import{MatTabsModule}from'@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    TvShowResultComponent,
    TvShowDetailsComponent,
    TvSearchboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDividerModule
    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [TvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
