import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, UpperCasePipe, } from '@angular/common';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
// Import other components, services, etc. as needed

@NgModule({
  declarations: [
   AppComponent,
   DashboardComponent,
   HeroesComponent,
   MessagesComponent,
   HeroDetailComponent,
   HeroSearchComponent
    // Add other component declarations here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgIf, NgFor, UpperCasePipe,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
    // Add other module imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }