import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Video} from 'src/modules/interfaces/base.interface';

@Component({
  selector: 'block-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'id': 'block-video'}
})
export class BlockVideoComponent {
  @Input() title: string | null = null;
  @Input() videos: Video[] | null = null;

  constructor(private readonly sanitizer: DomSanitizer) {}

  getStyle(video: Video): Record<string, string> {
    return {'background-image': `url(${video?.src})`};
  }

  secureUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
