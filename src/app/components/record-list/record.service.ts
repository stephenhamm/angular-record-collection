import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { Record } from 'src/app/components/record-list/record.model';

@Injectable()
export class RecordService {
  recordSelected = new EventEmitter<Record>();

  constructor(private afDatabase: AngularFireDatabase, private storage: AngularFireStorage) {}

  getRecords(artist: string) {
    return this.afDatabase.list('records/', ref => ref.orderByChild('artist').equalTo(artist)).valueChanges();
  }

  getRecordArtwork(imagePath: string) {
    return this.storage.ref(imagePath).getDownloadURL();
  }
}
