import { Component, OnInit, Input, Output,SimpleChanges, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Record } from 'src/app/models/record.model';
import { Artist } from 'src/app/models/artist.model';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss']
})
export class RecordListComponent implements OnInit {
  items: Record[];
  @Output() onRecordChosen: EventEmitter<Record> = new EventEmitter<Record>();
  @Input() artist: Artist;
  public selectedRecord: Record;

  constructor(private afDatabase: AngularFireDatabase) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.artist.currentValue) {
      this.artist = changes.artist.currentValue;

      this.afDatabase.list('records/', ref => ref.orderByChild('artist').equalTo(this.artist.name)).valueChanges().subscribe((list: any) => {
        this.items = list;
        this.selectedRecord = this.items[0];
        this.onRecordChosen.emit(this.selectedRecord);
      });
    }
  }

  onRecordClicked(chosenRecord: Record) {
    this.selectedRecord = chosenRecord;
    this.onRecordChosen.emit(this.selectedRecord);
  }
}
