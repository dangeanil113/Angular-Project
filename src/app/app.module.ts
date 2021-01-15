import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Java14Component } from './java14/java14.component';
import { Angular10Component } from './angular10/angular10.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    CoursesComponent,
    PagenotfoundComponent,
    Java14Component,
    Angular10Component,
    NodejsComponent,
    ExpressjsComponent,
    CoursedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
