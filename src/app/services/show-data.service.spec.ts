import { TestBed } from '@angular/core/testing';

import { ShowDataService } from './show-data.service';

describe('ShowDataService', () => {
  let service: ShowDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
