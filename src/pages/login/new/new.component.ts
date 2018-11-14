import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'page-login-new',
  templateUrl: './new.component.html'
})
export class NewPageComponent {

  constructor(
    public navCtrl: NavController,
    private loginService: LoginService,
  ) { }

  onLoginClicked() {
    this.loginService.signIn(1, 'Sample User');
  }
}
