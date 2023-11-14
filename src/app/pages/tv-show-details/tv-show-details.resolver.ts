import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { TvShowDetails } from "src/app/components/tv-show/models/tv-show-details.model";
import { TvShowFacade } from "src/app/shared/services/facade/tv-show/tv-show.facade";

export function showDetailsResolver(route: ActivatedRouteSnapshot): Observable<TvShowDetails> {
  const id = Number(route.paramMap.get("id"));
  return inject(TvShowFacade).loadTvShowDetails(id);
}
