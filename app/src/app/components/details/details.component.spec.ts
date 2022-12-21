import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Product } from '../advert/advert.service';
import { DetailsComponent } from './details.component';

describe('Testing Details Component', () => {
  let fixture: ComponentFixture<DetailsComponent>;
  let component: DetailsComponent;

  const product: Product = {
    brand: 'test',
    category: 'test',
    description: 'test',
    model: 'test',
    price: 300,
    specialOffering: true,
    subcategory: 'test',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  describe('Class Tests', () => {
    it('Should take hours from local time', () => {
      const currDate = new Date().getHours();

      expect(component.hour).toEqual(currDate);
    });

    it('Should display info text that is depending on time', () => {
      component.hour = 10;
      expect(component.getCapabilityOfHomeTransport).toEqual(
        'Dzisiaj u Ciebie - sprawdź'
      );

      component.hour = 17;
      expect(component.getCapabilityOfHomeTransport).toEqual('Dostawa jutro!');
    });

    it('Should return info about transport, depending on product price', () => {
      component.product = product;
      expect(component.getTransportInfo).toEqual('Transport 40zł');

      component.product.price = 600;
      expect(component.getTransportInfo).toEqual('Darmowy transport');
    });
  });

  describe('DOM Tests', () => {
    it('Should render correctly', () => {
      expect(component).toBeDefined();
    });

    it('Should render details componenent accordingly to directly passed product', () => {
      const allDetails = fixture.debugElement.queryAll(By.css('p'));

      allDetails.forEach((paragraph) => {
        const text = (paragraph.nativeElement as HTMLParagraphElement)
          .textContent;

        expect(text).toBeDefined();
        expect(typeof text).toEqual('string');
      });
    });
  });
});
