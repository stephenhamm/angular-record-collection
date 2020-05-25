import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Record } from 'src/app/models/record.model';

@Component({
  selector: 'app-record-list-item',
  templateUrl: './record-list-item.component.html',
  styleUrls: ['./record-list-item.component.scss']
})
export class RecordListItemComponent implements OnInit {
  @Input() record: Record;
  @Output() onRecordClicked: EventEmitter<Record> = new EventEmitter<Record>();

   constructor() { }

   ngOnInit(): void {
   }

   onRecordClick() {
     this.onRecordClicked.emit(this.record);
   }
}
