import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  items: Observable<any[]>;
  @Output() onArtistChosen: EventEmitter<string> = new EventEmitter<string>();

  constructor(private afDatabase: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.items = this.afDatabase.list('artists/').valueChanges();
    console.log(this.items);
  }

  onArtistClicked(name: string) {
    this.onArtistChosen.emit(name);
  }
}
