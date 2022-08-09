import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTopContentComponent } from './table-top-content.component';

describe('TableTopContentComponent', () => {
  let component: TableTopContentComponent;
  let fixture: ComponentFixture<TableTopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTopContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
