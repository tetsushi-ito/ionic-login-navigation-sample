import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../../models/user.model';

@Component({
  selector: 'page-user-show',
  templateUrl: './show.component.html'
})
export class ShowPageComponent {

  user: User;

  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
  ) {
    this.user = navParams.get('user');
  }
}
