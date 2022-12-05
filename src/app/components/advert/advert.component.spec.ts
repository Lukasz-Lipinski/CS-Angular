import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AdvertComponent } from './advert.component';
import { AdvertService, Product } from './advert.service';

describe('Testing Advert Component', () => {
  let fixture: ComponentFixture<AdvertComponent>;
  let component: AdvertComponent;
  let advertService: AdvertService;
  let httpController: HttpTestingController;

  const mockedProducts: Product[] = [
    {
      specialOffering: true,
      brand: 'product1',
      category: 'product1',
      description: 'product1',
      model: 'product1',
      price: 0,
      subcategory: 'product1',
    },
    {
      specialOffering: true,
      brand: 'product2',
      category: 'product2',
      description: 'product2',
      model: 'product2',
      price: 0,
      subcategory: 'product2',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvertComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvertComponent);
    component = fixture.componentInstance;
    advertService = TestBed.inject(AdvertService);
    httpController = TestBed.inject(HttpTestingController);
  });

  describe('Class tests', () => {
    it('Should get data from backend', (dn: DoneFn) => {
      component.ngOnInit();
      dn();

      httpController
        .expectOne({
          method: 'GET',
          url: `${advertService.url}/api/products`,
        })
        .flush({
          products: mockedProducts,
        });

      expect(component.adverts.length).toEqual(mockedProducts.length);
    });

    it('Should receive the same products as backend sent', (dn: DoneFn) => {
      component.ngOnInit();
      dn();

      httpController
        .expectOne({
          method: 'GET',
          url: `${advertService.url}/api/products`,
        })
        .flush({
          products: mockedProducts,
        });

      component.adverts.forEach((el, index) => {
        const title = `${mockedProducts[index].brand} ${mockedProducts[index].model}`;
        expect(el.description).toEqual(mockedProducts[index].description);
        expect(el.title).toEqual(title);
      });
    });
  });

  describe('DOM tests', () => {
    it('Should render correctly', () => {
      expect(component).toBeTruthy();
    });
  });
});
