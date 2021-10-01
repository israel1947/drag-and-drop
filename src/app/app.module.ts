import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrimeNGModule } from './prime-Ng/prime-ng.module';
import {DragDropModule} from '@angular/cdk/drag-drop';


import { TareaComponent } from './components/tarea/tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    PrimeNGModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
