import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesViewRoutingModule } from './favorites-view-routing.module';
import { CardComponent } from 'src/app/components/my-favorites/card/cards.component';
import { FavoritesViewComponent } from 'src/app/pages/favorites-view/favorites-view.component';
import { CountdownPipe } from 'src/app/shared/pipes/countdown.pipe';



@NgModule({
  declarations: [
    CardComponent,
    FavoritesViewComponent,
    CountdownPipe
  ],
  imports: [
    CommonModule,
    FavoritesViewRoutingModule
  ]
})
export class FavoritesViewModule { }
