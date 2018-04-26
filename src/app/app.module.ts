import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { RequestsService } from '../services/requests-service';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
