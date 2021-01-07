import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{ ActivatedRoute  } from '@angular/router'
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }
  cid:number;
  cname:any
  trainer:any

  ngOnInit(): void {
    console.log()
    this.cid=parseInt(this.router.snapshot.paramMap.get("cid"));
    this.cname=this.router.snapshot.paramMap.get("cname");
    this.trainer=this.router.snapshot.paramMap.get("trainer");

  }

}
