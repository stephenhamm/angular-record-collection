import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Artist } from 'src/app/components/artist-list/artist.model';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
  providers: [ArtistService]
})
export class ArtistListComponent implements OnInit {
  @Output() artistSelected: EventEmitter<Artist> = new EventEmitter<Artist>();
  items: Artist[];
  selectedArtist: Artist;

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.artistService.getArtists().subscribe((list: any) => {
      this.items = list;
      this.selectedArtist = this.items[0];
      this.artistSelected.emit(this.selectedArtist);
    });

    this.artistService.artistSelected
      .subscribe((artist: Artist) => {
        this.selectedArtist = artist;
        this.artistSelected.emit(this.selectedArtist);
      }
    );
  }
}
