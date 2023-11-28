import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockFormComponent} from './form.component';
import {TuiButtonModule, TuiDataListModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiInputModule, TuiInputPhoneModule, TuiSelectModule} from '@taiga-ui/kit';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



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
    FormsModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
  ],
  exports: [
    BlockFormComponent
  ]
})
export class BlockFormModule { }
