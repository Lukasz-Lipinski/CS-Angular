import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryComponent } from './category.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('Categor Component Testing', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let activatedRoute: ActivatedRoute;
  const mockedParams = {
    category: 'test',
    products: 'test',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryComponent],
      imports: [RouterTestingModule],
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
    component = fixture.componentInstance;
  });

  describe('Class tests', () => {
    it('Should receive mockedParams', (dn: DoneFn) => {
      component.ngOnInit();
      dn();
      expect(component.category).toEqual(mockedParams.category);
      expect(component.products).toEqual(mockedParams.products);
    });
  });

  describe('DOM tests', () => {
    it('Should render correctly', () => {
      expect(component).toBeTruthy();
    });

    it('Should return paragraph with data that were given to component', (dn: DoneFn) => {
      component.ngOnInit();
      dn();

      fixture.detectChanges();

      const p = fixture.debugElement.queryAll(By.css('p')).find((el) => {
        const dataTestId = (
          el.nativeElement as HTMLParagraphElement
        ).getAttribute('data-testid');

        return dataTestId === 'category' && el.nativeElement;
      })?.nativeElement as HTMLParagraphElement;

      const isProductText = p.textContent?.includes(mockedParams.products);
      const isCategoryText = p.textContent?.includes(mockedParams.category);

      expect(isCategoryText).toBeTrue();
      expect(isProductText).toBeTrue();

      expect(p).toBeTruthy();
    });
  });
});
