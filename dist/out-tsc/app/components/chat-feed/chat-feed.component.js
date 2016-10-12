var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
export var ChatFeedComponent = (function () {
    function ChatFeedComponent(postsService) {
        this.postsService = postsService;
        this.posts = postsService.getPosts();
    }
    ChatFeedComponent.prototype.ngOnInit = function () {
    };
    ChatFeedComponent = __decorate([
        Component({
            selector: 'chat-feed',
            templateUrl: './chat-feed.component.html',
            styleUrls: ['./chat-feed.component.css'],
            providers: [PostsService]
        }), 
        __metadata('design:paramtypes', [PostsService])
    ], ChatFeedComponent);
    return ChatFeedComponent;
}());
//# sourceMappingURL=../../../../../src/app/components/chat-feed/chat-feed.component.js.map