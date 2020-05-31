import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { Record } from '../record-list/record.model';
import { RecordService } from '../record-list/record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
  providers: [RecordService]
})
export class RecordComponent implements OnInit {
  @Input() record: Record;
  public imagePath: string;

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.record.currentValue) {
      this.record = changes.record.currentValue;

      this.recordService.getRecordArtwork(this.record.imagePath).subscribe(params => {
        this.imagePath = params;
      });
    }
  }
}
