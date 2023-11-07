import { TestBed } from '@angular/core/testing';

import { TvShowStateService } from './tv-show.state.service';

describe('TvShowStateService', () => {
  let service: TvShowStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
