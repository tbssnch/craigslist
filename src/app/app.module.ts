import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { JobsComponent } from './jobs/jobs.component';
import { PersonalsComponent } from './personals/personals.component';
import { HousingComponent } from './housing/housing.component';

import { routing } from './app.routing';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { HousingDetailComponent } from './housing-detail/housing-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    JobsComponent,
    PersonalsComponent,
    HousingComponent,
    JobDetailComponent,
    HousingDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
