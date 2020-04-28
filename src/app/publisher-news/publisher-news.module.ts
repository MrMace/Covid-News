import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublisherNewsPageRoutingModule } from './publisher-news-routing.module';

import { PublisherNewsPage } from './publisher-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublisherNewsPageRoutingModule
  ],
  declarations: [PublisherNewsPage]
})
export class PublisherNewsPageModule {}
