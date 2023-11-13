import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { FavoriteTvShowFacade } from 'src/app/shared/services/facade/favorite-tv-show/favorite-tv-show.service';
import { TvShow } from 'src/app/components/tv-show/models/tv-show.model';



@Directive({
  selector: '[appIsFavorite]',
})
export class IsFavoriteDirective implements OnInit{
  @Input('appIsFavorite') tvShow: TvShow | undefined;

  private isFavorite: boolean = false;

  @Output() favoriteToggled = new EventEmitter<TvShow>();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private favoriteTvShowFacade: FavoriteTvShowFacade
  ) {}

  ngOnInit(): void {
    if(this.tvShow) {
      this.isFavorite = this.favoriteTvShowFacade.isFavorite(this.tvShow.id);
      console.log(this.tvShow)
      // Apply appropriate styling or behavior based on the favorite status
      this.applyFavoriteStyling();
    }
  }

  private applyFavoriteStyling() {
    if (this.isFavorite) {
      this.renderer.addClass(this.el.nativeElement, 'favorite');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'favorite');
    }
  }

  @HostListener('click', ['$event'])
  onClick = (event: Event) => {
    // Toggle the favorite status and apply styling
    this.isFavorite = !this.isFavorite;
    this.applyFavoriteStyling();
    console.log(this.tvShow)

    // Emit the favoriteToggled event with the TV show object
    this.favoriteToggled.emit(this.tvShow);
  }
}
