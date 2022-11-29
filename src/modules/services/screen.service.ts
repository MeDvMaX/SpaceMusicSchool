import {Injectable} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith, tap} from 'rxjs/operators';
import {IScreenSize} from './screen.model';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  screen: IScreenSize = IScreenSize.DESKTOP;
  screen$ = fromEvent(window, 'resize')
    .pipe(
      debounceTime(200),
      map(() => window.innerWidth),
      distinctUntilChanged(),
      startWith(window.innerWidth),
      map(width => {
        if (width < 640) {
          return IScreenSize.MOBILE;
        } else if (width < 960) {
          return IScreenSize.TABLET;
        }

        return IScreenSize.DESKTOP;
      }),
      tap(screen => {
        this.screen = screen;
      })
    );
}
