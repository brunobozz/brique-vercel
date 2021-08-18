import {
  trigger,
  group,
  animate,
  style,
  query,
  transition,
} from '@angular/animations';

export const slider = trigger('routeAnimations', [
  transition('is1 => is2', slideTo('right')),
  transition('is1 => login', slideTo('right')),
  transition('is1 => is3', slideTo('right')),
  transition('is1 => is4', slideTo('right')),

  transition('is2 => is1', slideTo('left')),
  transition('is2 => is3', slideTo('right')),
  transition('is2 => login', fade()),
  transition('is2 => is4', slideTo('right')),

  transition('is3 => is1', slideTo('left')),
  transition('is3 => is2', slideTo('left')),
  transition('is3 => login', slideTo('left')),
  transition('is3 => is4', slideTo('right')),

  transition('is4 => is1', slideTo('left')),
  transition('is4 => is2', slideTo('left')),
  transition('is4 => login', slideTo('left')),
  transition('is4 => is3', slideTo('left')),

  transition('login => is1', slideTo('left')),
  transition('login => is2', fade()),
  transition('login => is3', slideTo('right')),
  transition('login => is4', slideTo('right')),

  transition('* => isRight', slideTo('right')),
  transition('isRight => *', slideTo('left')),
  transition('* => isLeft', slideTo('left')),
  transition('isLeft => *', slideTo('right')),
]);

function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [
      style({
        [direction]: '-100%',
      }),
    ]),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ [direction]: '100%' }))],
        optional
      ),
      query(
        ':enter',
        [animate('600ms ease', style({ [direction]: '0%' }))],
        optional
      ),
    ]),
  ];
}

function fade() {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          background: '#ffffff',
          width: '100%',
          opacity: 1,
        }),
      ],
      optional
    ),
    query(':enter', [
      style({
        opacity: 0,
      }),
    ]),
    group([
      query(':leave', [animate('600ms ease', style({ opacity: 0 }))], optional),
      query(':enter', [animate('600ms ease', style({ opacity: 1 }))], optional),
    ]),
  ];
}
