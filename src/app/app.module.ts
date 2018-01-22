import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { JobsComponent } from './jobs/jobs.component';
import { routing } from './app.routing';
import { PersonalsComponent } from './personals/personals.component';
import { HousingComponent } from './housing/housing.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    JobsComponent,
    PersonalsComponent,
    HousingComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
