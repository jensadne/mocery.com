import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColourDetailComponent } from './colour-detail/colour-detail.component';
import { ColourListComponent } from './colour-list/colour-list.component';
import { ElementDetailComponent } from './element-detail/element-detail.component';
import { OverviewComponent } from './overview/overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PartDetailComponent } from './part-detail/part-detail.component';
import { PartListComponent } from './part-list/part-list.component';
import { PriceGuideComponent } from './price-guide/price-guide.component';
import { SetDetailComponent } from './set-detail/set-detail.component';
import { SetListComponent } from './set-list/set-list.component';

const routes: Routes = [
  { path: 'element/:elementId', component: ElementDetailComponent },
  { path: 'part/:number', component: PartDetailComponent },
  { path: 'part', component: PartListComponent },
  { path: 'set/:number', component: SetDetailComponent },
  { path: 'set', component: SetListComponent },
  { path: 'colour', component: ColourListComponent },
  { path: 'colour/:slug', component: ColourDetailComponent },
  { path: 'price-guide', component: PriceGuideComponent },
  { path: 'overview', component: OverviewComponent },
  { path: '',   redirectTo: '/overview', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
