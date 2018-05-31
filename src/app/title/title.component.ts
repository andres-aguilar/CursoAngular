import {Component, OnInit} from '@angular/core';

@Component ({
  selector: 'app-title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.scss']
})
export class TitleComponent implements OnInit{
  public name : string;

  public isAvailable : boolean = false;
  public moreInfo : boolean = false;

  public topics : string[];

  constructor() {}

  ngOnInit() {
    this.name = 'Andres Aguilar';
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
