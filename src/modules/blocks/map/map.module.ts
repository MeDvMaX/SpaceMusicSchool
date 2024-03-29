import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockMapComponent} from './map.component';
import {AngularYandexMapsModule, YaConfig} from 'angular8-yandex-maps';
import { TuiLinkModule } from '@taiga-ui/core';

const mapConfig: YaConfig = {
  apikey: '12acd2e8-6932-4da2-80df-2696c39f386e',
};


@NgModule({
  declarations: [
    BlockMapComponent
  ],
  imports: [
    CommonModule,
    TuiLinkModule,
    AngularYandexMapsModule.forRoot(mapConfig),
  ],
  exports: [
    BlockMapComponent
  ]
})
export class BlockMapModule { }
