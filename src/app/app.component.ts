import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  userSubscribed(event : any) {
    /* Capturando evento personalizado */
    console.log("El usuario se suscribió");
    console.log(event);
  }
}
