import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginService } from '../services/login.service';
import { TabsComponent } from '../navigators/tabs/tabs.component';
import { NewPageComponent as LoginNewPageComponent } from '../pages/login/new/new.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage: any = this.loginService.isSignedIn() ? TabsComponent : LoginNewPageComponent;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private loginService: LoginService,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    this.loginService.loginUser$.subscribe(loginUser => {
      if (loginUser !== null) {
        this.rootPage = TabsComponent;
      } else {
        this.rootPage = LoginNewPageComponent;
      }
    });
  }
}
