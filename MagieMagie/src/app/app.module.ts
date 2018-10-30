import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';;
import { ListeAvatarComponent } from './element-login/liste-avatar/liste-avatar.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './element-login/header/header.component';
import { ListePartieComponent } from './liste-partie/liste-partie.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LobbyComponent } from './lobby/lobby.component';
import { ListeCarteComponent } from './liste-carte/liste-carte.component';
import { PlateauDeJeuComponent } from './plateau-de-jeu/plateau-de-jeu.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeAvatarComponent,
    LoginComponent,
    HeaderComponent,
    ListePartieComponent,
    LobbyComponent,
    ListeCarteComponent,
    PlateauDeJeuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
