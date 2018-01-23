import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { JobsComponent } from './jobs/jobs.component';
import { PersonalsComponent } from './personals/personals.component';
import { HousingComponent } from './housing/housing.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { HousingDetailComponent } from './housing-detail/housing-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'personals',
    component: PersonalsComponent
  },
  {
    path: 'housing',
    component: HousingComponent
  },
  {
    path: 'jobs/:id',
    component: JobDetailComponent
  },
  {
    path: 'housing/:id',
    component: HousingDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
