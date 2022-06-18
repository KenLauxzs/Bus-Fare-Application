import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPassengerPageRoutingModule } from './add-passenger-routing.module';

import { AddPassengerPage } from './add-passenger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPassengerPageRoutingModule
  ],
  declarations: [AddPassengerPage]
})
export class AddPassengerPageModule {}
