import { Component, OnInit, Input } from '@angular/core';

import { Record } from 'src/app/components/record-list/record.model';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record-list-item',
  templateUrl: './record-list-item.component.html',
  styleUrls: ['./record-list-item.component.scss']
})
export class RecordListItemComponent implements OnInit {
  @Input() record: Record;

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recordService.recordSelected.emit(this.record);
  }
}
