import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WidgetUtilService } from '../services/widget-util.service';

@Component({
  selector: 'app-saved-article',
  templateUrl: './saved-article.page.html',
  styleUrls: ['./saved-article.page.scss'],
})
export class SavedArticlePage implements OnInit {

  articleList: Array<any> = [];
  showPageLoader: boolean = false;

  constructor(private storage: Storage, private router: Router, private widgetUtilService: WidgetUtilService) { 
    this.getArticles();
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getArticles()
  }

  //gets the articles
  async getArticles(){
    this.showPageLoader = true;
    const result = await this.storage.get('savedArticles');
    if(result !=null){
      this.articleList = result;
    }
    this.showPageLoader = false;
  }

  


  //opens news details page 
  async getNewsDetailPage(article){
    await this.storage.set('currentArticle', article);
    this.router.navigate(['/news-detail']);
  }


  removeArticle(url){
    this.widgetUtilService.presentAlertConfirm('Confirm', 'Are you sure you want to remove this article? ', [{
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah) => {
        console.log('Was Cancelled');
      }
    }, {
      text: 'Okay',
      handler: async () => {
       await this.storage.set('savedArticles', this.articleList.filter(article => article.url != url));
       this.getArticles();
       this.widgetUtilService.presentToast('Article Successfully Removed!');
      }
    }])
  }

}
