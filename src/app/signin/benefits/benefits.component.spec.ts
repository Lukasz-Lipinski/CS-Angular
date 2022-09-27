import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenefitsComponent } from "./benefits.component";

describe("Testing Benefits Component", () => {
  let fixture: ComponentFixture<BenefitsComponent>;
  let component: BenefitsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenefitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitsComponent);
    component = fixture.componentInstance;
  });

  it("Should render correctly", () => {
    expect(component).toBeTruthy();
  })
})