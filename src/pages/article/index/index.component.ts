import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShowPageComponent } from '../show/show.component';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'page-article-index',
  templateUrl: './index.component.html'
})
export class IndexPageComponent {

  articles: Article[] = [
    new Article(1, 'Tabsを試してみる', 'Tabsの紹介記事です。'),
    new Article(2, 'FabButtonを試してみる', 'FabButtonの紹介記事です。'),
    new Article(3, 'InfiniteScrollを試してみる', 'InfiniteScrollの紹介記事です。'),
    new Article(4, 'LoadingControllerを試してみる', 'LoadingControllerの紹介記事です。'),
  ];

  constructor(
    public navCtrl: NavController,
  ) { }

  onArticleClicked(article: Article) {
    this.navCtrl.push(ShowPageComponent, {
      article: article,
    });
  }
}
