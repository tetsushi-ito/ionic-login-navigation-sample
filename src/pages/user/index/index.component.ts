import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../../models/user.model';
import { ShowPageComponent } from '../show/show.component';

@Component({
  selector: 'page-user-index',
  templateUrl: './index.component.html'
})
export class IndexPageComponent {

  users: User[] = [
    new User(1, '田中 一郎', '初めまして。'),
    new User(2, '佐藤 二郎', '初めまして。'),
    new User(3, '鈴木 三郎', '初めまして。'),
    new User(4, '山田 四郎', '初めまして。'),
  ];

  constructor(
    public navCtrl: NavController,
  ) { }

  onUserClicked(user: User) {
    this.navCtrl.push(ShowPageComponent, {
      user: user,
    });
  }
}
