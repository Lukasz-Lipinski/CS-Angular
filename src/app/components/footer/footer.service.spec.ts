import { TestBed } from '@angular/core/testing';
import { FooterService } from './footer.service';

describe('Testing Footer Service', () => {
  let service: FooterService;

  beforeEach(() => {
    service = TestBed.inject(FooterService);
  });

  describe('Class Tests', () => {
    it('Should render', () => {
      expect(service).toBeDefined();
    });

    it('Should return links', () => {
      expect(service.getLinks().length).toBeGreaterThan(0);
    });
  });
});
