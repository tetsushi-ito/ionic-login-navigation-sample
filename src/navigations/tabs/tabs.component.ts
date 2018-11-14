import { Component } from '@angular/core';

import { IndexPageComponent as ArticleIndexPageComponent } from '../../pages/article/index/index.component';
import { IndexPageComponent as UserIndexPageComponent } from '../../pages/user/index/index.component';

@Component({
  templateUrl: './tabs.component.html'
})
export class TabsComponent {

  tab1Root = ArticleIndexPageComponent;
  tab2Root = UserIndexPageComponent;
}
