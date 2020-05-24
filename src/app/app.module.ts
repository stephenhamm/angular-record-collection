import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecordComponent } from './components/record/record.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    HeaderComponent,
    AddRecordComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
