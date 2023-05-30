import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCosComponent } from './box-cos.component';

describe('BoxCosComponent', () => {
  let component: BoxCosComponent;
  let fixture: ComponentFixture<BoxCosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxCosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
