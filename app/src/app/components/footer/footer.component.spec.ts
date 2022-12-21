import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer.component';
import { FooterLink, FooterService } from './footer.service';
import { UpperletterPipe } from './upperletter.pipe';

describe('Testing Footer Component', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;

  const mockedService: FooterLink[] = [
    { header: 'test', links: ['test-link'] },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent, UpperletterPipe],
      imports: [FontAwesomeModule],
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

    it("Should take faPhone from external library", () => {
      expect(component.earIcon).toBeDefined();
    })
  });

  describe('DOM Tests', () => {
    it('Should render', () => {
      expect(component).toBeDefined();
    });

    it('Should return 2 different section', () => {
      const sections = fixture.debugElement.queryAll(By.css('section'));

      sections.forEach((section) => {
        expect(section).toBeDefined();
      });
    });

    it('Should return section including details', () => {
      fixture.detectChanges();
      const infoSection = fixture.debugElement.query(
        By.css('section[data-testid="info-section"]')
      );

      const span = infoSection.query(By.css('span'))
        .nativeElement as HTMLSpanElement;

      expect(span.querySelector('p')?.textContent).toEqual('111-111-111');
      expect(span.querySelector('fa-icon')?.querySelector('svg')).toBeDefined();
    });
  });
});
