import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowDetailsRoutingModule } from './tv-show-details-routing.module';
import { TvShowDetailsComponent } from './tv-show-details.component';
import { DetailsComponent } from 'src/app/components/tv-show/details/details.component';
import { NumberOfSeasonsDirective } from 'src/app/shared/directives/tv-show-details/number-of-seasons.directive';


@NgModule({
  declarations: [
    TvShowDetailsComponent,
    DetailsComponent,
    NumberOfSeasonsDirective
  ],
  imports: [
    CommonModule,
    TvShowDetailsRoutingModule
  ]
})
export class TvShowDetailsModule { }
