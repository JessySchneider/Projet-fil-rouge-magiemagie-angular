import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BoutonInterfaceRedComponent } from './element-login/bouton-interface-red/bouton-interface-red.component';
import { ListeAvatarComponent } from './element-login/liste-avatar/liste-avatar.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './element-login/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    BoutonInterfaceRedComponent,
    ListeAvatarComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
