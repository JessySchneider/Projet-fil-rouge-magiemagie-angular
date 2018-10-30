import {Route} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListePartieComponent } from './liste-partie/liste-partie.component';
import { LobbyComponent } from './lobby/lobby.component';
import {ListeCarteComponent} from "./liste-carte/liste-carte.component";


export const routes:Route[] = [
  {path: 'login', component:LoginComponent},
  {path: 'liste-partie', component: ListePartieComponent},
  {path: 'lobby', component: LobbyComponent},
  {path: 'cards', component: ListeCarteComponent},
  {path: '', component: LoginComponent}


]
