import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: string[] = ['A Day To Remember', 'The Beatles', 'Blink-182'];

  constructor() { }

  ngOnInit(): void {
  }

}
