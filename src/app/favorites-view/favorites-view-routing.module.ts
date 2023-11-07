import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesViewComponent } from 'src/app/favorites-view/favorites-view.component';

const routes: Routes = [
  { path: '', component: FavoritesViewComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FavoritesViewRoutingModule { }
