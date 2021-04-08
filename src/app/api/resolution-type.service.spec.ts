import { TestBed } from '@angular/core/testing';

import { ResolutionTypeService } from './resolution-type.service';

describe('ResolutionTypeService', () => {
  let service: ResolutionTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolutionTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
