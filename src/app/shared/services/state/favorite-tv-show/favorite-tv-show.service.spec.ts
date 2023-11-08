import { TestBed } from '@angular/core/testing';

import { FavoriteTvShowStateService } from './favorite-tv-show.service';

describe('FavoriteTvShowService', () => {
  let service: FavoriteTvShowStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteTvShowStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
