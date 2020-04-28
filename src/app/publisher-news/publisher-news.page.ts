import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NewsApiService } from '../services/news-api.service';
import { WidgetUtilService } from '../services/widget-util.service';

@Component({
  selector: 'app-publisher-news',
  templateUrl: './publisher-news.page.html',
  styleUrls: ['./publisher-news.page.scss'],
})
export class PublisherNewsPage implements OnInit {

  articleList: Array<any> = [];
  showPageLoader: boolean = false;
  publisherName: string = '';

  constructor(private activatedRoute: ActivatedRoute , private newsApiService: NewsApiService, private widgetUtilService: WidgetUtilService, private storage: Storage, private router: Router ) {
    this.activatedRoute.queryParams.subscribe(result => {
      console.log('query params == ',result)
      if(result.code && result.name){
        this.getPublisherTopHeadline(result.code);
        this.publisherName = result.name;

      }
    })
   }

  ngOnInit() {
  }

  getPublisherTopHeadline(publisherCode){

    this.showPageLoader = true;
    this.newsApiService.getPublisherTopHeadline(publisherCode,'coronavirus').subscribe((result: any) => {
      console.log('result', result);
      this.articleList = result.articles.filter(article => article.url);
      console.log(this.articleList);
      this.showPageLoader = false;
    }, (error) => {
      
      console.log('error', error);

      this.showPageLoader = false;
      this.widgetUtilService.presentToast(error.statusText)
    });

  }


  //saves article in the local storage. 
  async saveArticle(article) {

    try {

      const result = await this.storage.get('savedArticles');
      if (result != null) {
        const existingArticleList = result.filter(item => item.url === article.url);
        if (existingArticleList.length) {
          throw new Error("Article already saved!")
        }
        result.push(article);
        this.storage.set('savedArticles', result);
      } else {
        await this.storage.set('savedArticles', [article]);
      }
      this.widgetUtilService.presentToast("Article Saved Success!")

    } catch (error) {
      this.widgetUtilService.presentToast(error.message);
    }

  }


    async getNewsDetailPage(article){
      await this.storage.set('currentArticle', article);
       this.router.navigate(['/news-detail']);
     }


}
