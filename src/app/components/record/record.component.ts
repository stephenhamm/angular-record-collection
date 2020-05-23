import { Component, OnInit } from '@angular/core';
import { Record } from '../../models/record.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  public record: Record;

  constructor() { }

  ngOnInit(): void {
  }

}
