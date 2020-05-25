import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/models/artist.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  items: Artist[];
  @Output() onArtistChosen: EventEmitter<Artist> = new EventEmitter<Artist>();
  public selectedArtist: Artist;

  constructor(private afDatabase: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.afDatabase.list('artists/').valueChanges().subscribe((list: any) => {
      this.items = list;
      this.selectedArtist = this.items[0];
      this.onArtistChosen.emit(this.selectedArtist);
    });
  }

  onArtistClicked(chosenArtist: Artist) {
    this.selectedArtist = chosenArtist;
    this.onArtistChosen.emit(this.selectedArtist);
  }
}
