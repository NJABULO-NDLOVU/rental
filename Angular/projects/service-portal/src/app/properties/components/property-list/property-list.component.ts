import { Component } from "@angular/core";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {

datasource: any;

Columns: String[] = ['one', 'two', 'three']


}
