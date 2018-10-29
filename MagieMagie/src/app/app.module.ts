import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BoutonInterfaceRedComponent } from './bouton-interface-red/bouton-interface-red.component';

@NgModule({
  declarations: [
    AppComponent,
    BoutonInterfaceRedComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
