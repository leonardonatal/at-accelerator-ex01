import { TestBed } from '@angular/core/testing';
import { FavoriteTvShowFacade } from 'src/app/shared/services/facade/favorite-tv-show/favorite-tv-show.service';



describe('FavoriteTvShowService', () => {
  let service: FavoriteTvShowFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteTvShowFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
