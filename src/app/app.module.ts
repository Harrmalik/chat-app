import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatFeedComponent } from './components/chat-feed/chat-feed.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { UserInfoBoxComponent } from './components/user-info-box/user-info-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatFeedComponent,
    ChatBoxComponent,
    UserInfoBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
