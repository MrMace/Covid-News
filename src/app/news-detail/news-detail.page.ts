import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  article: any = {};
  showPageLoader: boolean = false;

  constructor(private storage: Storage) {
    this.getArticle();
   }

  ngOnInit() {
  }

  async getArticle(){
    this.showPageLoader = true;
  const result =  await this.storage.get('currentArticle');
  console.log('article === ', result);
  if (result != null){
    this.article = result
  }
  this.showPageLoader = false;
  }

}
