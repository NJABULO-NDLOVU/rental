import { Component } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog"
import { PropertyCreationComponent } from "../property-creation/property-creation.component";
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})

export class PropertyListComponent {

datasource: any;

Columns: String[] = ['one', 'two', 'three']

constructor(public dialog: MatDialog){}


createPropertyDialog(){

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = false;

  dialogConfig.autoFocus = false;

  dialogConfig.panelClass = 'panel-class';

  dialogConfig.width = '630px';

  dialogConfig.minHeight = '510px'

  this.dialog.open(PropertyCreationComponent, dialogConfig)
}
}

