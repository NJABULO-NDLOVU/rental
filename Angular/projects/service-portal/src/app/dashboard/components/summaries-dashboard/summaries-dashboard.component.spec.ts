import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesDashboardComponent } from './summaries-dashboard.component';

describe('SummariesDashboardComponent', () => {
  let component: SummariesDashboardComponent;
  let fixture: ComponentFixture<SummariesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
