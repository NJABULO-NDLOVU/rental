import { Component, OnInit } from '@angular/core';
import TableTopContent from 'projects/core/src/lib/components/table/models/custom/TabletopContent';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  tableTopContent!: TableTopContent[]


  constructor() { }

  ngOnInit(): void {
  }

}
