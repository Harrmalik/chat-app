import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-info-box',
  templateUrl: './user-info-box.component.html',
  styleUrls: ['./user-info-box.component.css']
})
export class UserInfoBoxComponent implements OnInit {
    user = {
        displayName: 'Harrmalik',
        userName: 'Malik Harrison',
        avatar: 'http://lorempixel.com/100/100/people/8/',
        posts: [],
        following: 1,
        followers: 0
    }
  constructor() { }

  ngOnInit() {
  }

}
