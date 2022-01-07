import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';

import { BlockHeaderComponent } from './header.component';

@NgModule({
  declarations: [
    BlockHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TuiLinkModule,
    TuiButtonModule,
  ],
  exports: [
    BlockHeaderComponent
  ]
})
export class BlockHeaderModule { }
