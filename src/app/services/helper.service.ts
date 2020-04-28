import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private storage: Storage) { }

  
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
    

    } catch (error) {
    throw new Error(error);
    }

  }
}
