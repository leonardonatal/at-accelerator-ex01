import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowDetailsRoutingModule } from './tv-show-details-routing.module';
import { TvShowDetailsComponent } from './tv-show-details.component';
import { DetailsComponent } from 'src/app/components/tv-show/details/details.component';


@NgModule({
  declarations: [
    TvShowDetailsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    TvShowDetailsRoutingModule
  ]
})
export class TvShowDetailsModule { }
