import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoComponent } from './info.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('Testing Info Component', () => {
  let fixture: ComponentFixture<InfoComponent>;
  let component: InfoComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              info: 'test',
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
  });

  describe('Class Tests', () => {
    it('Should get data from activeRoute', (dn: DoneFn) => {
      component.ngOnInit();
      dn();

      expect(component.title).toEqual('test');
    });
  });

  describe('DOM Tests', () => {
    it('Should render correctly', () => {
      component.ngOnInit();
      expect(component).toBeDefined();
    });

    it('Should return text', (dn: DoneFn) => {
      component.ngOnInit();
      dn();
      fixture.detectChanges();

      const title = fixture.debugElement.query(By.css('p'))
        .nativeElement as HTMLParagraphElement;
      expect(title.textContent?.trim()).toEqual(component.title.trim());
    });
  });
});
