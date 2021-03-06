import { Component } from '@angular/core';

import { Record } from 'src/app/components/record-list/record.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'record-collection';
  public selectedArtist: string;
  public selectedRecord: Record;

  onArtistChosen(name: string) {
    this.selectedArtist = name;
  }

  onRecordChosen(record: Record) {
    this.selectedRecord = record;
  }
}
