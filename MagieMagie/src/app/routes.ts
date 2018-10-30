import {Route} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListePartieComponent } from './liste-partie/liste-partie.component';
import { LobbyComponent } from './lobby/lobby.component';
import {ListeCarteComponent} from "./liste-carte/liste-carte.component";
import { PlateauDeJeuComponent } from './plateau-de-jeu/plateau-de-jeu.component';


export const routes:Route[] = [
  {path: 'login', component:LoginComponent},
  {path: 'liste-partie', component: ListePartieComponent},
  {path: 'lobby', component: LobbyComponent},
  {path: 'cards', component: ListeCarteComponent},
  {path: 'plateau-de-jeu', component: PlateauDeJeuComponent},
  {path: '', component: LoginComponent}


]
