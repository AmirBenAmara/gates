import { TestBed } from '@angular/core/testing';

import { WaveShareService } from './wave-share.service';

describe('WaveShareService', () => {
  let service: WaveShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaveShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
