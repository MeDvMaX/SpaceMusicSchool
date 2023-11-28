import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Image} from 'src/modules/interfaces/base.interface';

import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { takeUntil } from 'rxjs/operators';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'block-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'id': 'block-gallery'},
  providers: [TuiDestroyService],
})
export class BlockGalleryComponent {

  @Input() title: string | null = null;
  @Input() images: Image[] | null = null;

  constructor(
      private readonly dialogService: TuiDialogService,
      private readonly destroy$: TuiDestroyService,
      private readonly domSanitizer: DomSanitizer,
  ) {}

  transformUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getStyle(image: Image): Record<string, string> {
    return {'background-image': `url(${image?.src})`};
  }

  getImgStyle(url: string): string {
    return `url(${url})`
  }

  openDialog(content: PolymorpheusContent<TuiDialogContext>) {
    this.dialogService.open(
        content,
        {size: 'm'},
      ).pipe(takeUntil(this.destroy$))
      .subscribe()
  }
}
