import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RecordComponent } from './components/record/record.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { RecordListComponent } from './components/record-list/record-list.component';
import { ArtistItemComponent } from './components/artist-list/artist-item/artist-item.component';
import { RecordListItemComponent } from './components/record-list/record-list-item/record-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    HeaderComponent,
    AddRecordComponent,
    ArtistListComponent,
    RecordListComponent,
    ArtistItemComponent,
    RecordListItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [AngularFireDatabase, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
