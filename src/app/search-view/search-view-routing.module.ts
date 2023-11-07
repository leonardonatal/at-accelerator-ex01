import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchViewComponent } from 'src/app/search-view/search-view.component';

const routes: Routes = [
  { path: '', component: SearchViewComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SearchViewRoutingModule { }
