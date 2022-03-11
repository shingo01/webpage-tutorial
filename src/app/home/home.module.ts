import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ArticlePage } from '../article/article.page';

import { SharedModule } from '../shared/shared.module';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,ArticlePage]
})
export class HomePageModule {}
