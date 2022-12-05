import { Advert, AdvertService, Product } from './advert.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('Advert Service Testing', () => {
  let service: AdvertService;
  let httpTestingController: HttpTestingController;

  const mockedAdverts: Product[] = [
    {
      advert: true,
      brand: 'product1',
      category: 'product1',
      description: 'product1',
      model: 'product1',
      price: 0,
      subcategory: 'product1',
    },
    {
      advert: true,
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
      imports: [HttpClientTestingModule],
    }).compileComponents();
    service = TestBed.inject(AdvertService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Should get data from server', (dn: DoneFn) => {
    service.downloadAdverts().subscribe({
      next: (adverts) => {
        expect(adverts.length).toEqual(mockedAdverts.length);
        dn();
      },
    });

    const sendingReq = httpTestingController.expectOne({
      method: 'GET',
      url: service.url,
    });

    sendingReq.flush(mockedAdverts);
  });
});
