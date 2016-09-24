import { Component } from '@angular/core';
import { UserInfoBoxComponent } from './components/user-info-box/user-info-box.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ChatFeedComponent } from './components/chat-feed/chat-feed.component';

@Component({
  selector: 'app-root',
  template: `
      <article class="four wide column">
        <user-info-box></user-info-box>
      </article>

      <article class="eight wide column">
        <chat-box></chat-box>
        <chat-feed></chat-feed>
      </article>
  `
})

export class AppComponent {
  title = 'Welcome to the new Chat Application';
}
