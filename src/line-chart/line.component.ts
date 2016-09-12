import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  ElementRef,
  trigger,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'g[line]',
  template: `
    <svg:path
      [@animationState]="'active'"
      class="line"
      [attr.d]="path"
      fill="none"
      [attr.stroke]="stroke"
      stroke-width="1.5px"
    />
  `,
  animations: [
    trigger('animationState', [
      transition('void => *', [
        style({
          strokeDasharray: 2000,
          strokeDashoffset: 2000,
        }),
        animate(1000, style({
          strokeDashoffset: 0
        }))
      ]),
      // transition('* => void', [
      //   style({
      //     opacity: 1,
      //     transform: '*',
      //   }),
      //   animate(500, style({opacity: 0, transform: 'scale(0)'}))
      // ])
    ])
  ]
})
export class Line implements OnChanges, OnInit {
  element: ElementRef;

  @Input() path;
  @Input() stroke;
  @Input() data;

  @Output() clickHandler = new EventEmitter();

  constructor(element: ElementRef) {
    this.element = element.nativeElement;

  }

  ngOnInit() {
    // console.log(this.element.querySelector('path').getTotalLength());
  }

  ngOnChanges() {
  }
}
