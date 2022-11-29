import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import {takeUntil} from 'rxjs/operators';
import {BlockCardReviewItem} from 'src/modules/interfaces/blocks.interface';
import {IScreenSize} from 'src/modules/services/screen.model';
import {ScreenService} from 'src/modules/services/screen.service';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'block-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
  host: {'id': 'block-review'}
})
export class BlockCardReviewComponent {
  @Input() title: string = '';
  @Input() cards: BlockCardReviewItem[] = [];

  caruseleSize: number = 3;

  constructor(private readonly screenService: ScreenService,
              private readonly changeDetector: ChangeDetectorRef,
              private readonly dialogService: TuiDialogService,
              private readonly destroy$: TuiDestroyService) {
    screenService.screen$
      .pipe(takeUntil(destroy$))
      .subscribe(screen => {
        switch (screen) {
          case IScreenSize.MOBILE:
            this.caruseleSize = 1;
            break;
          case IScreenSize.TABLET:
            this.caruseleSize = 2;
            break;
          default:
            this.caruseleSize = 3;
        }

        changeDetector.markForCheck();
      })
  }

  getImgStyle(url: string): string {
    return `url(${url})`
  }

  openComment(content: PolymorpheusContent<TuiDialogContext>) {
    this.dialogService.open(
        content,
        {size: 'm'},
      ).pipe(takeUntil(this.destroy$))
      .subscribe()
  }
}
