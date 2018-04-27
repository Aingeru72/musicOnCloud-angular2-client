import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';
import { CancionesService } from './providers/canciones.service';


@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CancionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
