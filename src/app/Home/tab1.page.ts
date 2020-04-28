import { COUNTRIES } from './../services/mock-countries';
import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
import { WidgetUtilService } from '../services/widget-util.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  articleList: Array<any> = [];
  showPageLoader: boolean = false;
  countryList: Array<any> = COUNTRIES;
  selectedCountry = COUNTRIES[0];



  constructor(public newsApiService: NewsApiService, private widgetUtilService: WidgetUtilService, private router: Router, private storage: Storage, private helperService: HelperService) {

    this.getTopHeadlines(this.selectedCountry.code);
  }

  //gets the headlines from the api
  getTopHeadlines(countryCode:string) {
    this.showPageLoader = true;
    this.newsApiService.getTopHeadlines(countryCode,'coronavirus').subscribe((result: any) => {
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

  //gets the news details page.
  async getNewsDetailPage(article){
   await this.storage.set('currentArticle', article)
    this.router.navigate(['/news-detail'])
  }

  // changes country code within to get info from api
  countryChanged(){
    console.log(this.selectedCountry)
    this.getTopHeadlines(this.selectedCountry.code)
  }

  //saves article in the local storage. 
  async saveArticle(article) {

    try {
      await this.helperService.saveArticle(article);
      this.widgetUtilService.presentToast("Article Saved Success!")

    } catch (error) {
      this.widgetUtilService.presentToast(error.message);
    }

  }

  // Refreshes whe pulled down
  doRefresh(event) {
    console.log('Begin async operation');
    this.getTopHeadlines(this.selectedCountry.code);

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
