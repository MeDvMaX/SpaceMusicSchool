import {takeUntil} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {BlockFormItem} from 'src/modules/interfaces/blocks.interface';

import {HttpClient} from '@angular/common/http';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiNotificationsService} from '@taiga-ui/core';

@Component({
  selector: 'block-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
  host: {'id': 'block-form'}
})
export class BlockFormComponent {
  @Input() item: BlockFormItem | null = null;

  readonly form = new FormGroup({
    name: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.minLength(12)),
    line: new FormControl(null, Validators.required),
  });

  lines = ["Вокал", "Барабаны", "Гитара"]

  constructor(
    private readonly http: HttpClient,
    private readonly tuiNotification: TuiNotificationsService,
    private readonly destroy$: TuiDestroyService,
  ) {}

  onSubmit() {
    
    if (!this.form.valid || !this.form.dirty) {
      return;
    }
    debugger
    const {name, phone, line} = this.form.getRawValue();

    this.http.post(
      environment.tinkoffSiteUrl + '/api/v1/submit',
      {
        field0: name,
        field1: phone,
        field2: line,
        hash: environment.tinkoffFormHash
      },
    ).pipe(
      takeUntil(this.destroy$),
    ).subscribe(
        () => {
          this.tuiNotification
            .show('С вами свяжутся в течении 24 часов)', {
                label: 'Заявка отправлена!',
            }).subscribe();
        },
        () => {
          this.tuiNotification
            .show('Что то пошло не так', {
                label: 'Попробуйте чуть позже, либо оставить заявку по контактному телефону',
            }).subscribe();
        },
      );
  }
}
