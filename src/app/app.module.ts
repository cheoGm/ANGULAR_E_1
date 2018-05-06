import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { UsersIndexComponent } from './users/users-index/users-index.component';
import { UsersModule } from './users/users.module';
import {DataService} from './share/data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpModule
    ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
