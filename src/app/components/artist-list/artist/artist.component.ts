import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
 @Input() artist: Artist;
 @Output() onArtistClicked: EventEmitter<Artist> = new EventEmitter<Artist>();

  constructor() { }

  ngOnInit(): void {
  }

  onArtistClick() {
    this.onArtistClicked.emit(this.artist);
  }
}
