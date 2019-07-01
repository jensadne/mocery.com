import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceGuideComparatorComponent } from './price-guide-comparator.component';

describe('PriceGuideComparatorComponent', () => {
  let component: PriceGuideComparatorComponent;
  let fixture: ComponentFixture<PriceGuideComparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceGuideComparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceGuideComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
