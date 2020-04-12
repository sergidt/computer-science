import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BackTrackingModule} from '@computer-science/back-tracking';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    BackTrackingModule, 
    BrowserAnimationsModule,
  MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
