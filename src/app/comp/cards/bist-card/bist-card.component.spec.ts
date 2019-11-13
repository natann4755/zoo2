import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BistCardComponent } from './bist-card.component';

describe('BistCardComponent', () => {
  let component: BistCardComponent;
  let fixture: ComponentFixture<BistCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BistCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
