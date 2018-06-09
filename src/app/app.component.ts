import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  userSubscription = false;

  userSubscribed(event: any) {
    /* Capturando evento personalizado */
    console.log('El usuario se suscribió');
    this.userSubscription = event;
    console.log(event);
  }
}
