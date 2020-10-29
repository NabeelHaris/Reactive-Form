import { TestBed } from '@angular/core/testing';

import { ViewDataServicesService } from './view-data-services.service';

describe('ViewDataServicesService', () => {
  let service: ViewDataServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDataServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
