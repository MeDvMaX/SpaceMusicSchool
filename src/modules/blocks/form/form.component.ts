import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlockFormItem } from 'src/modules/interfaces/blocks.interface';

@Component({
  selector: 'block-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockFormComponent implements OnInit {

  @Input() item: BlockFormItem | null = null;


  readonly form = new FormGroup({
    name: new FormControl(null),
    phone: new FormControl(null),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
