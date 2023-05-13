import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductsPageComponent } from './report-products-page.component';

describe('ReportProductsPageComponent', () => {
  let component: ReportProductsPageComponent;
  let fixture: ComponentFixture<ReportProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProductsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
