import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.css'],
  providers: [PostsService]
})
export class ChatFeedComponent implements OnInit {
    posts;

    constructor(public postsService: PostsService) {
        this.posts = postsService.getPosts();
    }

    ngOnInit() {
    }

}
