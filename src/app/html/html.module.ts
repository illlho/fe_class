import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HTMLPageRoutingModule } from './html-routing.module';

import { HTMLPage } from './html.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HTMLPageRoutingModule
  ],
  declarations: [HTMLPage]
})
export class HTMLPageModule {}
