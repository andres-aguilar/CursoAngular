import { trigger, style, transition, animate, stagger, query, keyframes } from '@angular/animations';

export const staggeredShowUp = trigger('staggeredShowUp', [
  transition('* => *', [
    // Primero ocultamos todos
    query(':enter', style({transform: 'translateX(-100px)', opacity: '0'})),
    // Aplicamos una apoaricion escalonada
    query(':enter', stagger('80ms', [
      animate('0.4s ease-out', keyframes([
        style({transform: 'translateX(-100px)', opacity: '0', offset: 0}),
        style({transform: 'translateX(-50px)', opacity: '0.5', offset: 0.5}),
        style({transform: 'translateX(0px)', opacity: '1', offset: 1})
      ]))
    ]), {optional: true})
  ])
]);
