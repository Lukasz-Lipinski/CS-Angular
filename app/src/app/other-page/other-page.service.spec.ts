/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OtherPageService } from './other-page.service';

describe('Service: OtherPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtherPageService]
    });
  });

  it('should ...', inject([OtherPageService], (service: OtherPageService) => {
    expect(service).toBeTruthy();
  }));
});
