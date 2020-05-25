import { Component } from '@angular/core';
import { Record } from 'src/app/models/record.model';

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
    console.log("ARTIST CLICKED:", name);
    this.selectedArtist = name;
  }

  onRecordChosen(record: Record) {
    console.log("RECORD CLICKED:", record);
    this.selectedRecord = record;
  }
}
