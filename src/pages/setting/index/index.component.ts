import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'page-user-index',
  templateUrl: './index.component.html'
})
export class IndexPageComponent {

  constructor(
    private loginService: LoginService,
  ) { }

  onLogoutClicked() {
    this.loginService.signOut();
  }
}
