import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HTMLPage } from './html.page';

const routes: Routes = [
  {
    path: '',
    component: HTMLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HTMLPageRoutingModule {}
