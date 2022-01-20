import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverModule } from 'ngx-smart-popover';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule ,
    PopoverModule,
    
    MatSelectModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
