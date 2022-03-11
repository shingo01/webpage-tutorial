import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { title } from 'process';
//import { stringify } from 'querystring';
import { IPost } from './interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(public http: HttpClient) { }

  getPosts(){
    return this.http.get<{ posts: IPost[] }>('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/');
  }

  getArticle(id: number){
    return this.http.get<IPost>
      /*ID: Number;
      title: string;
      content: string;
      date: String;*/
    
    ('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/' + id);
  }
}
