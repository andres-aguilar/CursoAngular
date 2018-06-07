import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public name : string;
  public username : string;
  public avatar : string;

  /* Declaración de evento personalizado */
  @Output() subscribed = new EventEmitter<boolean>();

  constructor(private articlesS: ArticlesService) { }

  ngOnInit() {
    this.name     = "Andres Aguilar";
    this.username = "Yosh";
    this.avatar   = "https://www.w3schools.com/howto/img_avatar.png";

    /* Emitiendo evento personalizado */
    setTimeout(()=>{ this.subscribed.emit(true) }, 3000)
  }

  updateUsername(event: any) {
    console.log(event);
    this.username = event.target.value;
  }

  updateName(event: any) {
    console.log(event);
    this.name = event.target.value;
  }
}
