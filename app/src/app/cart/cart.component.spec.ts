import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';

describe('Testing Cart Component', () => {
  let fixture: ComponentFixture<CartComponent>;
  let component: CartComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  describe('Class Tests', () => {
    it('Should render', () => {
      expect(component).toBeDefined();
    });
  });

  describe('DOM Tests', () => {});
});
