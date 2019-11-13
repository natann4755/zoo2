import { TestBed } from '@angular/core/testing';

import { BeastsServiceService } from './beasts-service.service';

describe('BeastsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeastsServiceService = TestBed.get(BeastsServiceService);
    expect(service).toBeTruthy();
  });
});
