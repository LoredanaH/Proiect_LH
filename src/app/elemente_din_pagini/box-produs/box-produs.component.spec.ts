import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxProdusComponent } from './box-produs.component';

describe('BoxProdusComponent', () => {
  let component: BoxProdusComponent;
  let fixture: ComponentFixture<BoxProdusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxProdusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxProdusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
