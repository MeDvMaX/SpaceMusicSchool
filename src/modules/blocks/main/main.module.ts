import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockMainComponent} from './main.component';
import {TuiButtonModule} from '@taiga-ui/core';
import {BlockHeaderModule} from '../header/header.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    BlockMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BlockHeaderModule,
    TuiButtonModule,
  ],
  exports: [
    BlockMainComponent
  ]
})
export class BlockMainModule { }
