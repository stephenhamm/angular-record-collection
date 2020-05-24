import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss']
})
export class RecordListComponent implements OnInit {
  records: string[] = ['Common Courtest', 'Homesick', 'What Separates Me From You'];

  constructor() { }

  ngOnInit(): void {
  }

}
