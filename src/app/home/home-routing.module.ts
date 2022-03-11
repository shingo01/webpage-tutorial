import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePage } from '../article/article.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: ':articleId',
    component: ArticlePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
