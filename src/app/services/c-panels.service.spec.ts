import { TestBed } from '@angular/core/testing';

import { CPanelsService } from './c-panels.service';

describe('CPanelsService', () => {
  let service: CPanelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CPanelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
