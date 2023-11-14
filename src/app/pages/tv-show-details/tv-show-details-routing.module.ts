import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowDetailsComponent } from './tv-show-details.component';
import { showDetailsResolver } from 'src/app/pages/tv-show-details/tv-show-details.resolver';

const routes: Routes = [{ path: '', component: TvShowDetailsComponent, resolve: {tvShowDetails: showDetailsResolver} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowDetailsRoutingModule { }
