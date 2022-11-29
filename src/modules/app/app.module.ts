import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TuiRootModule, TuiDialogModule, TuiNotificationsModule, TUI_SANITIZER, TuiThemeNightModule} from "@taiga-ui/core";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageMainModule} from "../main/main.module";
import {HttpClientModule} from "@angular/common/http";
import {ScreenService} from "../services/screen.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TuiThemeNightModule,

    // Pages
    PageMainModule,
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
