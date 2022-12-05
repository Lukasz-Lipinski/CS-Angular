import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AdvertComponent } from './advert.component';
import { AdvertService, Product } from './advert.service';

interface mockedProducts extends Product {
  specialOffering: boolean;
}

describe('Testing Advert Component', () => {
  let fixture: ComponentFixture<AdvertComponent>;
  let component: AdvertComponent;
  let advertService: AdvertService;
  let httpController: HttpTestingController;

  const mockedProducts: mockedProducts[] = [
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
      providers: [
        AdvertService,
        {
          useValue: mockedProducts,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvertComponent);
    component = fixture.componentInstance;
    httpController = TestBed.inject(HttpTestingController);
    advertService = TestBed.inject(AdvertService);
  });

  describe('Class tests', () => {
    it('Should get data from service', (dn: DoneFn) => {
      component.ngOnInit();
      dn();

      const req = httpController.expectOne({
        method: 'GET',
        url: advertService.url,
      });

      req.flush(mockedProducts);

      expect(component.adverts.length).toEqual(mockedProducts.length);
    });

    it('Should have index setup to 1 at the beginning', (dn: DoneFn) => {
      component.ngOnInit();
      dn();

      expect(component.index).toEqual(1);
    });

    it('Should change advert if changeAdvert function is invoked', (dn: DoneFn) => {
      component.ngOnInit();
      dn();
      expect(component.change).toBeFalse();

      component.changeAdvert('next');

      expect(component.change).toBeTrue();
    });
  });

  describe('DOM tests', () => {
    it('Should render correctly', () => {
      component.ngOnInit();

      expect(component).toBeTruthy();
    });

    it('Should return exactly one advertise with backend data', (dn: DoneFn) => {
      component.ngOnInit();
      dn();

      httpController
        .expectOne({
          method: 'GET',
          url: advertService.url,
        })
        .flush(mockedProducts);

      fixture.detectChanges();

      const advert = fixture.debugElement.query(
        By.css("[data-testid='advert-body']")
      ).nativeElement as HTMLDivElement;
      const header = advert.querySelector('h2')?.innerText;
      const description = advert
        .querySelector('div')
        ?.querySelector('p')?.innerText;

      const title = `${mockedProducts[1].brand} ${mockedProducts[1].model}`;

      expect(advert).toBeTruthy();
      expect(description).toEqual(mockedProducts[1].description);
      expect(header).toEqual(title);
    });

    it('Should render exactly 1 button', (dn: DoneFn) => {
      component.ngOnInit();
      component.index = 0;
      dn();

      httpController
        .expectOne({
          method: 'GET',
          url: advertService.url,
        })
        .flush(mockedProducts);

      fixture.detectChanges();

      const btns = fixture.debugElement.queryAll(By.css('span'));

      expect(btns.length).toEqual(1);
    });
  });
});
