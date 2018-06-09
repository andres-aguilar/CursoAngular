import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

class Repo {
  constructor(public id: string, public name: string) {}
}

@Injectable()
export class ArticlesService {
  private url = 'https://api.github.com/users/andres-aguilar/repos';
  public reposCount = 0;
  public reposObserver: Observable<Repo[]>;

  constructor(private http: HttpClient) {}

  getAll() {
    this.reposObserver = this.http.get(this.url)
    .pipe(map((data: Object[]) => {
      return data.map((r: any) => new Repo(r.id, r.name));
    })).pipe(share());
  }

  buildObservable(): Observable<any> {
    return Observable.create(function(observer) {
      setInterval(() => observer.next('hola'), 1000);
    });
  }
}
