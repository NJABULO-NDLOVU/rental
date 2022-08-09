import {Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';

import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import BaseListResponse from '../../models/common/BaseListResponse';

import EntityReferenceDTO from '../../models/common/EntityReferenceDTO';

import ListResponseMetadata from '../../models/common/ListResponseMetaData';

// import ProfilePicture from '../profile-picture/models/ProfilePictureItem';

import ButtonData from '../../models/custom/ButtonData';

import Column from './models/custom/Column';

import SliderData from '../../models/custom/SliderData';

import TableDataPage from './models/custom/TablePageData';

@Component({
  selector: 'lib-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit {

  @Input() datasource = new MatTableDataSource<any>();

  @Input() sliderData!: SliderData;

  @Input() columns!: Column<any>[];

  @Input() endpoint!: string;

  @Input() buttonData!: ButtonData;

  @Input() navigation!: string;

  @Input() showViewAction!: boolean;

  @Input() showDeleteAction!: boolean;

  @Input() sortBy!: string;

  @Input() tableData!: Observable<TableDataPage>;

  @Input() loading!: Observable<boolean>;

  @Input() rowClickable!: boolean;

  @Output() nextPageEvent = new EventEmitter<string>();

  @Output() rowClick = new EventEmitter<any>();

  @Output() buttonClick = new EventEmitter<any>();

  @ViewChild(MatTable) baseTable!: MatTable<any>;

  @Output() InitiateDelete = new EventEmitter();

  // profilePicture = new ProfilePicture();

  isLoading!: boolean;

  base_url: string;

  displayedColumns: any[] = [];

  currentData!: BaseListResponse;

  lastMetadata!: ListResponseMetadata;

  offset: any = 0;

  cursor: string = "";

  identityId?: string;

  isImageLoaded: boolean = false;

  loadingData!: boolean;

  imageHttpSource!: string;

  imageProfilePhoto!: string;

  constructor(private router: Router, @Inject("BASE_URL") baseUrl: string) {

    this.base_url = baseUrl;

  }


  ngOnInit(): void {

    this.currentTableColumns();

    this.tableData.subscribe((response: TableDataPage | any) => {

      if (response.action == "replace") {

        console.log(response)

        // this.cursor = response.data.metadata.cursor;

        this.replaceTableData(response.data);

      } else if (response.action == "increment") {

        this.cursor = response.data.metadata.cursor;

        this.incrementTableData(response.data);

      }

    });

    // this.loading.subscribe(response => this.isLoading = response);

  }

  loadNavi(id?: string, data?: any) {

    return !this.rowClickable ? false : this.rowClick.emit([id, data]);

  }

  onButtonClick(data: any) {

    this.buttonClick.emit(data);

  }

  getImage(connectorType: string) {

    // return this.imageUploadService.getImage(uri)

  }

  imageErrorHandler(event: any = null, imageSrc: string = "") {

    event.target.src = imageSrc;

  }

  onTableScroll = (e: any) => {

    const tableViewHeight = e.target.offsetHeight; // viewport

    const tableScrollHeight = e.target.scrollHeight; // length of all table

    const scrollLocation = e.target.scrollTop; // how far user scrolled

    // If the user has scrolled within 10px of the bottom, add more data
    const buffer = 100;

    const limit = tableScrollHeight - tableViewHeight - buffer;

    if (scrollLocation > limit) {

      if (!this.loadingData) {

        this.offset = this.offset + 30;

        this.nextPageEvent.emit(this.cursor);

      }
    }
  };

  getProperty(item: EntityReferenceDTO, column: Column<EntityReferenceDTO>) {

    let propertyName: string = column.mappedProperty;

    let object: any = item;

    if (column.type == "object") {

      return this.getObjectData(item, column);
    }

    var parts = propertyName.split("."), length = parts?.length, i, property = object || this;

    try {

      for (i = 0; i < length; i++) {

        property = property[parts[i]];

      }

      return property;

    } catch (TypeError) {

      return null;

    }

  }

  hasProperty(item: EntityReferenceDTO, column: Column<EntityReferenceDTO>): boolean {
    return !!this.getProperty(item, column);
  }

  currentTableColumns() {

    var columnsArray = [

      { name: "action", dataType: this.buttonData },

      { name: "view", dataType: this.showViewAction },

      { name: "delete", dataType: this.showDeleteAction },

    ];

    this.columns.forEach((element) => {

      this.displayedColumns.push(element.columnName);

    });

    for (let i = 0; i < columnsArray.length; i++) {

      if (columnsArray[i].dataType != null || undefined) {

        this.displayedColumns.push(columnsArray[i].name);

      }

    }


  }

  typeOf(v: any) {
    return typeof v;
  }

  itemDelete(item: any) {
    // this.InitiateDelete.emit(item);
  }

  reloadCurrentRoute() {

    let currentUrl = this.router.url;

    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {

      this.router.navigate([currentUrl]);

    });

  }

  incrementTableData(response: BaseListResponse) {

    if (response.data.length != 0) {

      response.data.forEach((element: any) => {

        !!element ? this.currentData.data.push(element) : false;

      });

      if (response.metadata.cursor != undefined && response.metadata.cursor != "") {

        this.cursor = response.metadata.cursor;

      } else {

        this.cursor = "";

      }

    }

    this.currentData.metadata.cursor = this.cursor;
    // this.currentData.data;
    this.datasource.data = []

  }

  replaceTableData(response: BaseListResponse) {

    this.currentData = response;

    this.datasource.data = this.currentData.data

    response.metadata.cursor != null ? this.cursor = response.metadata.cursor : this.cursor = null || "";

    this.currentData.metadata = response.metadata;

    this.loadingData = false;

    this.baseTable.renderRows();

  }

  hasIcons(item: EntityReferenceDTO, column: Column<EntityReferenceDTO>): boolean {
    return (!!column.icons && column.icons.length > 0) || !!column.iconSelector;
  }

  getIcons(item: EntityReferenceDTO, column: Column<EntityReferenceDTO>): any[] {
    return ((column.iconSelector ? column.iconSelector(item) : column.icons) ?? []);
  }

  getIconColor(item: EntityReferenceDTO, column: Column<EntityReferenceDTO>): string {
    return !!column.iconColorSelector ? column.iconColorSelector(item) : "#F46523";
  }

  getImageUrl(item: EntityReferenceDTO, column: Column<EntityReferenceDTO>): string {
    return column.imageUrlBuilder ? column.imageUrlBuilder(item) : "";
  }

  getObjectData(item: EntityReferenceDTO, column: Column<EntityReferenceDTO>): string {
    return column.objectTransform ? column.objectTransform(item) : "";
  }

  onItemClick(item: EntityReferenceDTO, column: Column<EntityReferenceDTO>) {
    column.onClick ? column.onClick(item) : false;
  }

}
