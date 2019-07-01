import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourDetailComponent } from './colour-detail.component';

describe('ColourDetailComponent', () => {
  let component: ColourDetailComponent;
  let fixture: ComponentFixture<ColourDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColourDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
