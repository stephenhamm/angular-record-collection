import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  artists: string[] = ['A Day To Remember', 'The Beatles', 'Blink-182'];

  constructor() { }

  ngOnInit(): void {
  }

}
