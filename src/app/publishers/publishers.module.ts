import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublishersPageRoutingModule } from './publishers-routing.module';

import { PublishersPage } from './publishers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublishersPageRoutingModule
  ],
  declarations: [PublishersPage]
})
export class PublishersPageModule {}
