import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
//import { HttpClient } from '@angular/common/http';
import { WordpressService } from '../wordpress.service';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  ID: number;

  /*post: {
    ID: number;
    title: string;
    content: string;
    date: string;
  } = {*/
  post: IPost = {
    ID: null,
    title: null,
    content: null,
    date: null
  };
  
  constructor(
    public route: ActivatedRoute,
    public wordpress: WordpressService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.ID = parseInt(params.get('articleId'), 10);
    });
  }

  ionViewDidEnter(){
  /*this.http.get<{
    ID: number;
    title: string;
    content: string;
    date: string;
    }>('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/' + this.ID)*/
  this.wordpress.getArticle(this.ID)
    .subscribe(data => {
      this.post = data;
    });
  }

}
