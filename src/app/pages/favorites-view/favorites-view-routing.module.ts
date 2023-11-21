import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesViewComponent } from 'src/app/pages/favorites-view/favorites-view.component';
import { favoritesResolver } from 'src/app/pages/favorites-view/favorites-view.resolver';

const routes: Routes = [
  { path: '', component: FavoritesViewComponent, resolve: {tvShowDetails: favoritesResolver}},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FavoritesViewRoutingModule { }
