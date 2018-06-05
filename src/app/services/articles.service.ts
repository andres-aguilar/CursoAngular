import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticlesService {
  private url: string = 'https://api.github.com/users/andres-aguilar/repos';
  public articlesCount: number = 0;

  constructor(private http : HttpClient) {}

  getAll() {
    this.http.get(this.url).subscribe( data => {
      console.log(data);
    })
  }
}
