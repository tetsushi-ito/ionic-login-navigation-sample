import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'page-article-show',
  templateUrl: './show.component.html'
})
export class ShowPageComponent {

  article: Article;

  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
  ) {
    this.article = navParams.get('article');
  }
}
