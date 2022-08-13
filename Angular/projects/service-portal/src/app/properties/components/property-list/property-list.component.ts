
import { MatDialog, MatDialogConfig } from "@angular/material/dialog"

import { PropertyCreationComponent } from "../property-creation/property-creation.component";

import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import IdentityInfo from 'projects/core/src/lib/models/IdentityInfo';

import Column from 'projects/core/src/lib/components/table/models/custom/Column';

import TableDataPage from 'projects/core/src/lib/components/table/models/custom/TablePageData';

import TableTopContent from 'projects/core/src/lib/components/table/models/custom/TabletopContent';

import { TableComponent } from 'projects/core/src/lib/components/table/table.component';

import { CreateButton } from 'projects/core/src/lib/functions/Button';

import { CreateImage } from 'projects/core/src/lib/functions/Image';

import { CreateTableTop } from 'projects/core/src/lib/functions/TableTopContent';

import BaseListResponse from 'projects/core/src/lib/models/common/BaseListResponse';

import { UrlService } from 'projects/core/src/lib/services/url.service';

import { BehaviorSubject, Subject } from 'rxjs';

import { PropertiesService } from "../../services/properties.service";

@Component({
  selector: 'rental-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})

export class PropertyListComponent {

  filterInput: string;

  sortBy: string = 'displayName asc';

  filterView = true;

  holder = 'Search Tenants';

  tableTopContent: TableTopContent[];

  loading: Subject<boolean>;

  cursorResponse: BehaviorSubject<any>;

  datasource: Subject<TableDataPage>;

  offset: any = 0;

  view: boolean;

  columns: Column<IdentityInfo>[];

  endpoint: string;

  navigation: string;

  url: string;

  @ViewChild(TableComponent) baseTable: TableComponent;

  constructor(
    private urlService: UrlService,
    private router: Router,
    private propertiesService: PropertiesService,
    private activateRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    public dialog: MatDialog ) 
    {
    this.endpoint = ''; //change -> Properties

    this.datasource = new Subject<TableDataPage>();
  }


  createPropertyDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;

    dialogConfig.autoFocus = false;

    dialogConfig.panelClass = 'panel-class';

    dialogConfig.width = '630px';

    dialogConfig.minHeight = '510px'

    this.dialog.open(PropertyCreationComponent, dialogConfig)
  }


ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.propertiesService
      .getPropertyListDataLocal()
      .subscribe((response) =>
        this.datasource.next({
          action: 'replace',
          data: <BaseListResponse>response
        })
      );
      this.changeDetector.detectChanges();
}


  ngOnInit(): void {
    this.tableTopContent = [CreateTableTop('Properties', '', 'building')];

    // this.propertiesService.getPropertyListData(this.url, "0", this.sortBy).subscribe((response) =>

    //   this.datasource.next({ action: "replace", data: <BaseListResponse>response })

    // );

       
    // this.view = true;

    this.navigation = 'tenants/';

    (this.columns = [
      {
        columnName: 'Name',
        mappedProperty: 'propetyName',
        columnWidth: 'th-width-140',
        paddingColumn: 'th-padding',
        type: 'text',
      },

      {
        columnName: 'Area',
        mappedProperty: 'shortAddress',
        columnWidth: 'th-width-140',
        paddingColumn: 'th-padding',
        type: 'text',
      },


      {
        columnName: 'Type',
        mappedProperty: 'propertyType',
        columnWidth: 'th-width-100',
        paddingColumn: 'th-padding',
        type: 'text',
      },

      {
        columnName: 'Occupied',
        mappedProperty: 'isVacant',
        columnWidth: 'th-width-140',
        paddingColumn: 'th-padding',
        type: 'text',
      },

    ]),
      console.log(this.columns);

    CreateButton('Terminate', 'error', '', this.terminateIdentity);

    // CreateImage(
    //   'Display Name',
    //   'displayName',
    //   PiribaAPI.Identities + PiribaAPI.DefaultProfilePhoto,
    //   'th-width-230',
    //   'Image-size-small',
    //   true,
    //   'element?.photoUrl'
    // );
  }

  terminateIdentity = () => {
    console.log('shouldnt be here');
  };

  navigateToPrevious() {
    this.urlService.navigateBack();
  }

  filter(searchValue: any) {
    this.propertiesService
      .getPropertyListData(this.url, this.offset, this.sortBy, searchValue)

      .subscribe((response: any) => {
        this.datasource.next({
          action: 'replace',
          data: <BaseListResponse>response,
        });
      });
  }

  navigateToProperty(data: any) {
    let tenant = data[1];

    let id = data[0];

    console.log(data);

    console.log([this.navigation + id]);

    console.log(this.activateRoute.snapshot);

    return this.router.navigate([this.navigation + id]);
  }

  getNextPage(cursor: string) {
    this.loading.next(true);

    if (cursor != undefined && cursor != '') {
      this.propertiesService
        .getPropertyListData(this.url, this.offset, this.sortBy, cursor)
        .subscribe((response) => {
          this.datasource.next({
            action: 'increment',
            data: <BaseListResponse>response,
          });

          this.loading.next(false);
        });
    } else {
      this.loading.next(false);
    }
  }

  getProfilePhoto(identity: IdentityInfo) {
    // let photoUrl = identity.photoUrl;

    // return photoUrl == null || photoUrl == ''
    //   ? `${PiribaAPI.Identities + '/' + photoUrl + '/' + PiribaAPI.Photo}`
    //   : `${photoUrl}`;
  }
}


