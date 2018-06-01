import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[redBorder]'
})
export class RedBorder {
  @Input() color : string;
  @Input() background : string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log("Usando redBorder");

    // this.el.nativeElement.style.border = `solid 1px ${this.color}`;
    // this.el.nativeElement.style.backgroundColor = `${this.background}`;
  }

  @HostListener("mouseover") applyBorder() {
    this.el.nativeElement.style.border = `solid 1px ${this.color}`;
  }

  @HostListener("mouseout") removeBorder() {
    this.el.nativeElement.style.border = "none";
  }
}
