import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

import services from '../services';
import navigators from '../navigators';
import pages from '../pages';

@NgModule({
  declarations: [
    MyApp,
    ...navigators,
    ...pages,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...navigators,
    ...pages,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ...services,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
