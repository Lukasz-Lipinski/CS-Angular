import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/components/advert/advert.service';
import { CategoryTieComponent } from './category-tie.component';

describe('Testing Category Tie Component', () => {
  let component: CategoryTieComponent;
  let fixture: ComponentFixture<CategoryTieComponent>;
  const mockedProduct: Product = {
    brand: 'test',
    category: 'test',
    description: 'test',
    model: 'test',
    price: 22,
    specialOffering: true,
    subcategory: 'test',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryTieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryTieComponent);
    component = fixture.componentInstance;
    component.product = mockedProduct;
  });

  describe('Class tests', () => {
    it('Should get mockedProduct', () => {
      expect(component.product).toBe(mockedProduct);
    });

    it('Should implement new title', () => {
      expect(component.getTitle).toBeTruthy();
    });
  });

  describe('DOM tests', () => {
    it('Should render', () => {
      expect(component).toBeTruthy();
    });
  });
});
