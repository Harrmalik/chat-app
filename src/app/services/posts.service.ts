import { Injectable } from '@angular/core';

@Injectable()

export class PostsService {
    getPosts() {
        return [{
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
        }];
    }

}
