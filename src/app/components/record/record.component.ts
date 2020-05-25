import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Record } from '../../models/record.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  @Input() record: Record;
  // record: Record = new Record('A Day To Remember', 'Common Courtesy', 2014, ['pop punk', 'hardcore'], 'ADTR Records', 'https://img.discogs.com/5mUGC1JsSXVB6gZZVQTqAYIlLrs=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5772711-1492645874-1446.jpeg.jpg');

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.record.currentValue) {
      this.record = changes.record.currentValue;
      console.log("Accepted Record: " + this.record.title, changes);
    }
  }
}
