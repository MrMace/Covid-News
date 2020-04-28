import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'news-detail',
    loadChildren: () => import('./news-detail/news-detail.module').then( m => m.NewsDetailPageModule)
  },
  {
    path: 'publishers',
    loadChildren: () => import('./publishers/publishers.module').then( m => m.PublishersPageModule)
  },
  {
    path: 'publisher-news',
    loadChildren: () => import('./publisher-news/publisher-news.module').then( m => m.PublisherNewsPageModule)
  },
  {
    path: 'saved-article',
    loadChildren: () => import('./saved-article/saved-article.module').then( m => m.SavedArticlePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
