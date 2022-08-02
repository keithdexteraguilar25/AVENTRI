import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntessDetailsPage } from './iintess.page';

const routes: Routes = [
  {
    path: '',
    component: IntessDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDetailsPageRoutingModule {}
