import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecordComponent } from './components/record/record.component';
import { HeaderComponent } from './components/UI/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
