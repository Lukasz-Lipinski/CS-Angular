import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenProductComponent } from './chosen-product.component';

describe('ChosenProductComponent', () => {
  let component: ChosenProductComponent;
  let fixture: ComponentFixture<ChosenProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
