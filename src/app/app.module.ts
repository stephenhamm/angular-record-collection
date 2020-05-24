import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecordComponent } from './components/record/record.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { RecordListComponent } from './components/record-list/record-list.component';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    HeaderComponent,
    ArtistListComponent,
    RecordListComponent,
    AddRecordComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
