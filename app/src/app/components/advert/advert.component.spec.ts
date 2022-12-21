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
  let url: string;

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
    url = `${advertService.url}/api/products`;
  });

  describe('Class tests', () => {
    it('Should get data from backend', (dn: DoneFn) => {
      component.ngOnInit();
      dn();

      httpController
        .expectOne({
          method: 'GET',
          url,
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
          url,
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

    it('Should render exactly one advert', (dn: DoneFn) => {
      component.ngOnInit();
      dn();

      httpController
        .expectOne({
          method: 'GET',
          url,
        })
        .flush({
          products: mockedProducts,
        });

      fixture.detectChanges();

      const advert = fixture.debugElement
        .queryAll(By.css('div'))
        .find((selector) => {
          const dataTestId = (
            selector.nativeElement as HTMLDivElement
          ).getAttribute('data-testid');
          return dataTestId === 'advert-body' && selector;
        })?.nativeElement as HTMLDivElement;

      const header = advert.querySelector('h2')?.textContent;
      const description = advert
        .querySelector('div')
        ?.querySelector(
          'p[data-testid="advert-body-description"]'
        )?.textContent;
      const img = advert
        .querySelector('div')
        ?.querySelector('img') as HTMLImageElement;

      const title = `${mockedProducts[component.index].brand} ${
        mockedProducts[component.index].model
      }`;

      expect(advert).toBeTruthy();
      expect(header?.trim()).toEqual(title);
      expect(description?.trim()).toEqual(
        mockedProducts[component.index].description
      );
      expect(img.src).not.toBeNull();
    });

    it('Should renter 2 buttons', (dn: DoneFn) => {
      component.ngOnInit();
      dn();

      httpController
        .expectOne({
          method: 'GET',
          url,
        })
        .flush({
          products: mockedProducts,
        });

      fixture.detectChanges();

      const advert = fixture.debugElement.query(By.css('section'))
        .nativeElement as HTMLElement;

      const leftBtn = advert.querySelector(
        '[data-testid="prev_btn"]'
      ) as HTMLDivElement;
      const rightBtn = advert.querySelector(
        '[data-testid="next_btn"]'
      ) as HTMLDivElement;

      expect(leftBtn).toBeTruthy();
      expect(rightBtn).toBeTruthy();

      expect(leftBtn.querySelector('span')?.textContent).not.toBeNull();
      expect(rightBtn.querySelector('span')?.textContent).not.toBeNull();
    });
  });
});
