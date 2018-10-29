import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListeAvatarComponent } from './liste-avatar/liste-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeAvatarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
