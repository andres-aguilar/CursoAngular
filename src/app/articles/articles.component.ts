import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../services/articles.service';
import { showUp } from '../animations/showUp.animation';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  animations: [ showUp ]
})
export class ArticlesComponent implements OnInit {

  constructor(private articlesS : ArticlesService) { }

  ngOnInit() {
    this.articlesS.getAll();

    /* Utilizar observable personalizado */
    // const observable = this.articlesS.buildObservable();
    // observable.subscribe((data) => {
    //   console.log(data);
    // })
  }

}
