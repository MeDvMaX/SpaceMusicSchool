import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockFormComponent } from './form.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPhoneModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlockFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPhoneModule,
    TuiButtonModule,
  ],
  exports: [
    BlockFormComponent
  ]
})
export class BlockFormModule { }
