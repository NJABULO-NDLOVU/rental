import { Component, Input, OnInit } from '@angular/core';
import TableTopContent from '../models/custom/TabletopContent';

@Component({
  selector: 'lib-table-top-content',
  templateUrl: './table-top-content.component.html',
  styleUrls: ['./table-top-content.component.scss']
})
export class TableTopContentComponent implements OnInit {

  @Input() tableTopContent!: TableTopContent[];

  constructor() { }

  ngOnInit(): void {
  }

}
