import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Angular10Component } from './angular10/angular10.component';
import { ContactComponent } from './contact/contact.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CoursesComponent } from './courses/courses.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { HomeComponent } from './home/home.component';
import { Java14Component } from './java14/java14.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'',
  component:CoursesComponent,
  children:[
    {path:'',redirectTo:'/java14',pathMatch:'full'},
    {path:"java14",component:Java14Component},
    {path:"angular10",component:Angular10Component},
    {path:"nodejs",component:NodejsComponent},
    {path:"expressjs",component:ExpressjsComponent},
  ]
},
  {path:'coursedetails/:cid/:cname/:trainer',component:CoursedetailsComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:PagenotfoundComponent},

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
