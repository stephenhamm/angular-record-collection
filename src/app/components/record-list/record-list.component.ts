import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Record } from 'src/app/components/record-list/record.model';
import { Artist } from 'src/app/components/artist-list/artist.model';
import { RecordService } from './record.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss'],
  providers: [RecordService]
})
export class RecordListComponent implements OnInit {
  items: Record[];
  @Output() recordSelected: EventEmitter<Record> = new EventEmitter<Record>();
  @Input() artist: Artist;
  public selectedRecord: Record;

  constructor(private recordService: RecordService) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.artist.currentValue) {
      this.artist = changes.artist.currentValue;

      this.recordService.getRecords(this.artist.name).subscribe((list: any) => {
        this.items = list;
        this.selectedRecord = this.items[0];
        this.recordSelected.emit(this.selectedRecord);
      });
    }

    this.recordService.recordSelected
      .subscribe((record: Record) => {
        this.selectedRecord = record;
        this.recordSelected.emit(this.selectedRecord);
      }
    );
  }
}
