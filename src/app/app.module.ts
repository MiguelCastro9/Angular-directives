import { DiretivasModule } from './diretivas/diretivas.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivasComponent } from './diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DiretivasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
