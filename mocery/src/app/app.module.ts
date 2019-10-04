import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth-interceptor';
import { BrixdbService } from './brixdb.service';
import { ElementDetailComponent } from './element-detail/element-detail.component';
import { PartDetailComponent } from './part-detail/part-detail.component';
import { SetDetailComponent } from './set-detail/set-detail.component';
import { OverviewComponent } from './overview/overview.component';
import { ColourDetailComponent } from './colour-detail/colour-detail.component';
import { ColourListComponent } from './colour-list/colour-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PartListComponent } from './part-list/part-list.component';
import { SetListComponent } from './set-list/set-list.component';
import { PriceGuideComponent } from './price-guide/price-guide.component';
import { PriceGuideComparatorComponent } from './price-guide-comparator/price-guide-comparator.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementDetailComponent,
    PartDetailComponent,
    SetDetailComponent,
    OverviewComponent,
    ColourDetailComponent,
    ColourListComponent,
    PageNotFoundComponent,
    PartListComponent,
    SetListComponent,
    PriceGuideComponent,
    PriceGuideComparatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
        // these are the ones we need for Django
        cookieName: 'csrftoken',
        headerName: 'X-CSRFToken',
    }),
    NgbModule,
    AppRoutingModule,
  ],
  providers: [
      BrixdbService,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor ,
          multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
