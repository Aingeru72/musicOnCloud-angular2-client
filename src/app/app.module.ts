import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';
import { CancionesService } from './providers/canciones.service';


@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CancionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
