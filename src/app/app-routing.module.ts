import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: () => import('./pages/search-view/search-view.module').then(m => m.SearchViewModule)},
  {path: "favorites", loadChildren: () => import('./pages/favorites-view/favorites-view.module').then(m => m.FavoritesViewModule)},
  { path: 'tv-show/:id', loadChildren: () => import('./pages/tv-show-details/tv-show-details.module').then(m => m.TvShowDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
