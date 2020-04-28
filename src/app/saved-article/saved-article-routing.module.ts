import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedArticlePage } from './saved-article.page';

const routes: Routes = [
  {
    path: '',
    component: SavedArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedArticlePageRoutingModule {}
