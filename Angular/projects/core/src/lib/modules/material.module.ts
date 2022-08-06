import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar'; 
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule, 
    MatTableModule
    
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule
  ],
})
export class MaterialModule { }
