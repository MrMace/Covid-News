import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  article: any = {};
  showPageLoader: boolean = false;

//   options : InAppBrowserOptions = {
//     location : 'yes',//Or 'no' 
//     hidden : 'no', //Or  'yes'
//     clearcache : 'yes',
//     clearsessioncache : 'yes',
//     zoom : 'yes',//Android only ,shows browser zoom controls 
//     hardwareback : 'yes',
//     mediaPlaybackRequiresUserAction : 'no',
//     shouldPauseOnSuspend : 'no', //Android only 
//     closebuttoncaption : 'Close', //iOS only
//     disallowoverscroll : 'no', //iOS only 
//     toolbar : 'yes', //iOS only 
//     enableViewportScale : 'no', //iOS only 
//     allowInlineMediaPlayback : 'no',//iOS only 
//     presentationstyle : 'pagesheet',//iOS only 
//     fullscreen : 'yes',//Windows only    
// };

 

  constructor(private storage: Storage ) {
    this.getArticle();
    
   }

  ngOnInit() { }

//   public openInAppBrowser(url){
//     this.theInAppBrowser.create(url);
// }

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
