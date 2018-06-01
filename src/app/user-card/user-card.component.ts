import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public name : string;
  public username : string;
  public avatar : string;

  constructor() { }

  ngOnInit() {
    this.name     = "Andres Aguilar";
    this.username = "Yosh";
    this.avatar   = "https://www.w3schools.com/howto/img_avatar.png";
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
