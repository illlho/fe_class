import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HTMLPage } from './html.page';

const routes: Routes = [
  {
    path: '',
    component: HTMLPage
  },
  {
    path: 'step1',
    loadChildren: () => import('./step1/step1.module').then( m => m.Step1PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HTMLPageRoutingModule {}
