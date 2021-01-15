import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router'
import { CoursedetailsComponent } from '../coursedetails/coursedetails.component';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private router:Router) { }
  courses=[
    {cid:1,cname:"java14",trainer:"Anil"},
    {cid:2,cname:"Spring",trainer:"Anil"},
    
    {cid:3,cname:"Spring Boot",trainer:"Anil"},
    {cid:4,cname:"nodeJS",trainer:"Anil"},
    {cid:5,cname:"Express JS",trainer:"Anil"},
  ]

  onSelect(course)
  {
    let cid=course.cid;
    let cname=course.cname;
    let trainer=course.trainer;
    this.router.navigate(["coursedetails",cid,cname,trainer])
  }
 
  ngOnInit(): void {
    
  }


}
