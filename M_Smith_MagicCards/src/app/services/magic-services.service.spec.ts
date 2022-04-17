import { TestBed } from '@angular/core/testing';

import { MagicServicesService } from './magic-services.service';

describe('MagicServicesService', () => {
  let service: MagicServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
