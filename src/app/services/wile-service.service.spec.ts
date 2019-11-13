import { TestBed } from '@angular/core/testing';

import { WileServiceService } from './wile-service.service';

describe('WileServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WileServiceService = TestBed.get(WileServiceService);
    expect(service).toBeTruthy();
  });
});
