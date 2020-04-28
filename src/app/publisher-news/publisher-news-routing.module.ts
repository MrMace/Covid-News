import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublisherNewsPage } from './publisher-news.page';

const routes: Routes = [
  {
    path: '',
    component: PublisherNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublisherNewsPageRoutingModule {}
