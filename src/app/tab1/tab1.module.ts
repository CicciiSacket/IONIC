import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HomeModule } from '../commonComponents/home/home.module';
import { ChatModule } from '../commonComponents/chat/chat.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    HomeModule,
    ChatModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
