import {Component, OnInit} from '@angular/core';

@Component ({
  selector: 'app-title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.scss']
})
export class TitleComponent implements OnInit{
  public name : string;
  public edad : number;
  public isAvailable : boolean = false;

  constructor() {}

  ngOnInit() {
    this.name = 'Andres Aguilar';
    this.edad = 28;
  }

  getEdadNombre() : string {
    return `${this.name} : ${this.edad}`;
  }
}
