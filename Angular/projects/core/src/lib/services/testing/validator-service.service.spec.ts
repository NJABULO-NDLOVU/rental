import { TestBed } from '@angular/core/testing';

import { ValidatorServiceService } from '../validator.service';

describe('ValidatorServiceService', () => {
  let service: ValidatorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(ValidatorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
