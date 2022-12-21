import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { AuthSubcategoryComponent } from './auth-subcategory.component';

describe('Auth-Subcategory Component Testing', () => {
  let component: AuthSubcategoryComponent;
  let fixutre: ComponentFixture<AuthSubcategoryComponent>;
  let authService: AuthService;

  const serviceData = {
    subcategories: {
      Test: ['test1', 'test2'],
    },
  };
  const props = 'Test';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthSubcategoryComponent],
      providers: [
        {
          provide: AuthService,
          useValue: serviceData,
        },
      ],
    }).compileComponents();

    fixutre = TestBed.createComponent(AuthSubcategoryComponent);
    component = fixutre.componentInstance;
    authService = TestBed.inject(AuthService);
  });

  describe('Class tests', () => {
    it("Should be assigned external prop as 'category'", () => {
      component.ngOnInit();
      fixutre.detectChanges();

      component.category = props;

      expect(component.category).toEqual(props);
    });
  });

  describe('DOM tests', () => {
    it('Should render correctly', () => {
      expect(component).toBeTruthy();
    });

    it('Should render list if category props is being passed', () => {
      component.ngOnInit();

      fixutre.detectChanges();

      let categoryElement = fixutre.debugElement.query(By.css('ul'));

      expect(categoryElement).toBeNull();

      component.category = props;
      fixutre.detectChanges();

      categoryElement = fixutre.debugElement.query(By.css('ul'));

      expect(categoryElement).toBeTruthy();
    });

    it('Should render subcategory accordingly to passed props', () => {
      component.category = props;
      component.ngOnInit();

      fixutre.detectChanges();

      let subcategories = fixutre.debugElement.queryAll(By.css('a'));

      expect(subcategories.length).toEqual(
        authService.subcategories[props].length
      );
    });
  });
});
