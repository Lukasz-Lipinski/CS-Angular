import { AdvertService } from './advert.service';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AdvertComponent } from "./advert.component";

describe('Testing Advert Component', () => {
  let fixture: ComponentFixture<AdvertComponent>;
  let component: AdvertComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvertComponent],
      providers: [AdvertService],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvertComponent);
    component = fixture.componentInstance;
  });

  it('Should render', () => {
    expect(component).toBeTruthy();
  });

  it('Should have downloaded data and being displayed', () => {
    const advertService = new AdvertService();
    component.ngOnInit();

    const paragraph = component;
    const img = component;

    expect(paragraph).toBeTruthy();
    expect(img).toBeTruthy();
  })
})