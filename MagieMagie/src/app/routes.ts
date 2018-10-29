import {Route} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListePartieComponent } from './liste-partie/liste-partie.component';


export const routes:Route[] = [
  {path: 'login', component:LoginComponent},
  {path: 'liste-partie', component: ListePartieComponent},
  {path: '', component: LoginComponent}

]