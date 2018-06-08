import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component ({
  selector: 'app-title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.scss'],
  animations: [
    trigger('showUp', [
      state('0',style({
        background: 'blue'
      })),
      state('1',style({
        background: 'red'
      })),
      transition('0 => 1', animate('0.4s ease-out')),
      transition('1 => 0', animate('0.4s ease-out'))
    ])
  ]
})
export class TitleComponent implements OnInit{
  public name : string;
  public launchDate : Date;
  public price : number;
  public seconds : number;

  public isAvailable : boolean = false;
  public moreInfo : boolean = false;
  public category : string;  // mobile, web. other

  public topics : string[];

  @Input() subscribed : boolean;

  constructor() {}

  ngOnInit() {
    this.name = 'Andres Aguilar';
    this.launchDate = new Date(2018, 6, 20);
    this.category = "web";
    this.price = 25;
    this.seconds = 3660;
    this.topics = [
      'Fundamentos',
      'Componentes',
      'Directivas',
      'Animaciones',
      'Servicios',
      'RxJS',
      'Binding'
    ];
  }

  showMoreInfo() {
    this.moreInfo = !this.moreInfo;
  }
}
