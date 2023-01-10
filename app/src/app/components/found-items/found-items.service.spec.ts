/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoundItemsService } from './found-items.service';

describe('Service: FoundItems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoundItemsService]
    });
  });

  it('should ...', inject([FoundItemsService], (service: FoundItemsService) => {
    expect(service).toBeTruthy();
  }));
});
