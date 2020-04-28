import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  baseUrl: string = environment.baseUrl;
  apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) { }

  getTopHeadlines(countryCode: string, termCode:string) {
  

    return this.http.get(`${this.baseUrl}/top-headlines?apiKey=${this.apiKey}&country=${countryCode}&q=${termCode}`);

  }
  getPublisherTopHeadline(publisherCode:string, termCode:string){
    return this.http.get(`${this.baseUrl}/top-headlines?apiKey=${this.apiKey}&sources=${publisherCode}&q=${termCode}`)
  }
}
