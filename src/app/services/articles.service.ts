import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class Repo {
  constructor(public id: string, public name: string) {}
}

@Injectable()
export class ArticlesService {
  private url: string = 'https://api.github.com/users/andres-aguilar/repos';
  public articlesCount: number = 0;

  constructor(private http : HttpClient) {}

  getAll() {
    this.http.get(this.url)
    .pipe(map((data: Repo[])=>{
      return data.map(r => new Repo(r.id, r.name))
    }))
    .subscribe( (data) => {
      console.log(data);
    })
  }

  buildObservable() : Observable<any>{
    return Observable.create(function(observer) {
      setInterval(() => observer.next('hola'), 1000)
    })
  }
}
