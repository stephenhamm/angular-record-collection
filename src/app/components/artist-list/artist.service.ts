import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Artist } from 'src/app/components/artist-list/artist.model';

@Injectable()
export class ArtistService {
  artistSelected = new EventEmitter<Artist>();

  constructor(private afDatabase: AngularFireDatabase) {}

  getArtists() {
    return this.afDatabase.list('artists/').valueChanges()
  }
}
