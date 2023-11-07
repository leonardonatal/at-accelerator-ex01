import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: () => import('./search-view/search-view.module').then(m => m.SearchViewModule)},
  {path: "favorites", loadChildren: () => import('./favorites-view/favorites-view.module').then(m => m.FavoritesViewModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
