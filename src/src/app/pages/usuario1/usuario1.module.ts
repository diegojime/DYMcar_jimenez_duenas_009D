import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Usuario1PageRoutingModule } from './usuario1-routing.module';

import { Usuario1Page } from './usuario1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Usuario1PageRoutingModule
  ],
  declarations: [Usuario1Page]
})
export class Usuario1PageModule {}
