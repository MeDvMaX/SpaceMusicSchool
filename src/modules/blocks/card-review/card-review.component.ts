import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { takeUntil } from 'rxjs/operators';
import { BlockCardReviewItem } from 'src/modules/interfaces/blocks.interface';
import { IScreenSize } from 'src/modules/services/screen.model';
import { ScreenService } from 'src/modules/services/screen.service';

@Component({
  selector: 'block-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService]
})
export class BlockCardReviewComponent {

  @Input() title: string = '';
  @Input() cards: BlockCardReviewItem[] = [];

  caruseleSize: number = 3;

  constructor(private screenService: ScreenService,
              private changeDetector: ChangeDetectorRef,
              private destroy$: TuiDestroyService) {
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
}
