import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ExerciserComponent } from './main/exerciser/exerciser.component';
import { SurveyComponent } from './main/survey/survey.component';
import { JstreeComponent } from './main/jstree/jstree.component';
import { SearchPageComponent } from './main/assessment-library/search-page/search-page.component';
import { AssessLibKendoComponent } from './main/assessment-library-kendo/assessment-library-kendo.component';
import { KendoTestComponent } from './main/kendo-test/kendo-test.component'

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'exerciser',
    component: ExerciserComponent
  },
  {
    path: 'survey/:id',
    component: SurveyComponent
  },
  {
    path: 'jstree',
    component: JstreeComponent
  },
  {
    path: 'search-page',
    component: SearchPageComponent
  },
  {
    path: 'kendo-test',
    component: KendoTestComponent
  },
  {
    path: 'assessment-library-kendo',
    component: AssessLibKendoComponent
  }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
