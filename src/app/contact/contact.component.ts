import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  courses=["java14","Angular10","BootStrap","NodeJS","ExpressJS","ReactJS"]
  ngOnInit(): void {
  }

}
