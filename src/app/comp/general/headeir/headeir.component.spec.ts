import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadeirComponent } from './headeir.component';

describe('HeadeirComponent', () => {
  let component: HeadeirComponent;
  let fixture: ComponentFixture<HeadeirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadeirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadeirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
