import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Record } from '../../models/record.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  @Input() record: Record;
  public imagePath: string;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.record.currentValue) {
      this.record = changes.record.currentValue;

      const ref = this.storage.ref(this.record.imagePath).getDownloadURL().subscribe(params => {
        this.imagePath = params;
      });
    }
  }
}
