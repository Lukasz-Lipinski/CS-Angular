import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryComponent } from './category.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { CategoryService } from './category.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Product } from '../components/advert/advert.service';

describe('Category Component Testing', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let activatedRoute: ActivatedRoute;
  let service: CategoryService;
  let httpTestingController: HttpTestingController;

  const mockedParams = {
    category: 'test',
    subcategory: 'test',
  };

  const mockedServer = {
    products: [
      {
        category: 'test',
        subcategory: 'test',
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of(mockedParams),
          },
        },
      ],
    }).compileComponents();

    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(CategoryComponent);
    service = TestBed.inject(CategoryService);
    httpTestingController = TestBed.inject(HttpTestingController);

    component = fixture.componentInstance;
  });

  describe('Class tests', () => {
    it('Should get data from backend', (dn: DoneFn) => {
      service
        .getProducts(mockedParams.category, mockedParams.subcategory)
        .subscribe({
          next: (products) => {
            expect(products[0].subcategory).toBe(
              mockedServer.products[0].subcategory
            );
            expect(products[0].category).toBe(
              mockedServer.products[0].category
            );
            dn();
          },
        });

      httpTestingController
        .expectOne({
          method: 'GET',
          url: `${service.url}`,
        })
        .flush(mockedServer);
    });

    it('Should get data accordingly to routing params', (dn: DoneFn) => {
      component.ngOnInit();

      activatedRoute.params.subscribe({
        next: (params) => {
          expect(params['category']).toEqual(mockedParams.category);
          expect(params['subcategory']).toEqual(mockedParams.subcategory);
          dn();
        },
      });
    });
  });

  describe('DOM tests', () => {
    it('Should render correctly', () => {
      expect(component).toBeTruthy();
    });
  });
});
