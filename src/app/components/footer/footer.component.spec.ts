import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { FooterLink, FooterService } from './footer.service';

describe('Testing Footer Component', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;

  const mockedService: FooterLink[] = [
    { header: 'test', links: ['test-link'] },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      providers: [
        {
          provide: FooterService,
          useValue: {
            getLinks: () => mockedService,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  describe('Class Tests', () => {
    it('Should get data from service', () => {
      const serviceData = component.footerData;
      expect(serviceData.length).toEqual(mockedService.length);

      serviceData.forEach((item, index) => {
        expect(item.header).toEqual(mockedService[index].header);

        item.links.forEach((link, innerIndex) => {
          expect(link).toEqual(mockedService[index].links[innerIndex]);
        });
      });
    });
  });

  describe('DOM Tests', () => {
    it('Should render', () => {
      expect(component).toBeDefined();
    });

    it('Should return ', () => {});
  });
});
