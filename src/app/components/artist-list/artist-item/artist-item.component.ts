import { Component, OnInit, Input  } from '@angular/core';

import { Artist } from 'src/app/components/artist-list/artist.model';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.scss']
})
export class ArtistItemComponent implements OnInit {
  @Input() artist: Artist;

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.artistService.artistSelected.emit(this.artist);
  }
}
