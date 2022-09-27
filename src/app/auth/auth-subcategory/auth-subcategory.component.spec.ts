import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AuthSubcategoryComponent } from "./auth-subcategory.component";

describe('Testing Auth-Subcategory component', () => {
  let fixture: ComponentFixture<AuthSubcategoryComponent>;
  let component: AuthSubcategoryComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthSubcategoryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthSubcategoryComponent);
    component = fixture.componentInstance;
  });

  it('should render correctly', () => {
    expect(component).toBeTruthy();
  })
})