import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesViewRoutingModule } from './favorites-view-routing.module';
import { FavoriteCardComponent } from 'src/app/components/my-favorites/card/favorite-card.component';
import { FavoritesViewComponent } from 'src/app/pages/favorites-view/favorites-view.component';
import { CountdownPipe } from 'src/app/shared/pipes/countdown.pipe';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    FavoriteCardComponent,
    FavoritesViewComponent,
    CountdownPipe
  ],
  imports: [
    CommonModule,
    FavoritesViewRoutingModule,
    ComponentsModule
  ]
})
export class FavoritesViewModule { }
