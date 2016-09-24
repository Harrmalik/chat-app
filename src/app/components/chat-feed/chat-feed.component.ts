import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.css']
})
export class ChatFeedComponent implements OnInit {
    posts = [{
        profileImage: 'http://lorempixel.com/100/100/people/8/',
        createdBy: 'Malik Harrison',
        displayName: 'Harrmalik',
        createdAt: "34m ago",
        displayText: "This is sample text",
        replies: 1,
        reposts: 2,
        likes: 3
    },{
        profileImage: 'http://lorempixel.com/100/100/people/7/',
        createdBy: 'Malik Harrison',
        displayName: 'Harrmalik',
        createdAt: "34m ago",
        displayText: "This is sample text",
        replies: 1,
        reposts: 2,
        likes: 3
    },{
        profileImage: 'http://lorempixel.com/100/100/people/9/',
        createdBy: 'Malik Harrison',
        displayName: 'Harrmalik',
        createdAt: "34m ago",
        displayText: "This is sample text",
        replies: 1,
        reposts: 2,
        likes: 3
    }]

    constructor() { }

    ngOnInit() {
    }

}
