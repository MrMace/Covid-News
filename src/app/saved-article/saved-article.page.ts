import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-article',
  templateUrl: './saved-article.page.html',
  styleUrls: ['./saved-article.page.scss'],
})
export class SavedArticlePage implements OnInit {

  articleList: Array<any> = [];

  constructor(private storage: Storage) { 
    this.getArticles();
  }

  ngOnInit() {
  }

  async getArticles(){
    this.articleList = await this.storage.get('savedArticles');
    console.log(this.articleList);

  }

}
