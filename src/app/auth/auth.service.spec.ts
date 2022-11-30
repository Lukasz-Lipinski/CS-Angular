import { AuthService } from './auth.service';

describe('Auth Service Testing', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  it('Should render correctly', () => {
    expect(service).toBeTruthy();
  });

  it("Should return subcategories", () => {
    const subcategories = service.subcategories;

    for (let subcat in subcategories) {
      expect(subcat.length).toBeGreaterThan(0);

      for (let [item] of subcat) {
        expect(typeof item).toEqual('string');
      }
    }
  });
});
