import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersoonService } from './persoon.service';
import { PersoonDetailsComponent } from './persoon-details/persoon-details.component';
import { PersonenComponent } from './personen/personen.component';
import { KlantenComponent } from './klanten/klanten.component';
import { PersoonZoekComponent } from './persoon-zoek/persoon-zoek.component';

@NgModule({
  declarations: [
    AppComponent,
    PersoonDetailsComponent,
    PersonenComponent,
    KlantenComponent,
    PersoonZoekComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [PersoonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
