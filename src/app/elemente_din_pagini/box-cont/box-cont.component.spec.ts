import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContComponent } from './box-cont.component';

describe('BoxContComponent', () => {
  let component: BoxContComponent;
  let fixture: ComponentFixture<BoxContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
