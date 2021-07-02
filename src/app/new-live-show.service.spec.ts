import { TestBed } from '@angular/core/testing';

import { NewLiveShowService } from './new-live-show.service';

describe('NewLiveShowService', () => {
  let service: NewLiveShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewLiveShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
