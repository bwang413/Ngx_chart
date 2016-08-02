import { Component, Input, OnInit } from '@angular/core';
import d3 from 'd3';
import { XAxisTicks } from './XAxisTicks';
import { AxisLabel } from './AxisLabel';

@Component({
  selector: 'g[x-axis]',
  directives: [XAxisTicks, AxisLabel],
  template: `
    <svg:g
      [attr.class]="xAxisClassName"
      [attr.transform]="transform">
      <svg:g x-axis-ticks
        [tickFormatting]="tickFormatting"
        [tickArguments]="tickArguments"
        [tickStroke]="tickStroke"
        [scale]="xScale"
        [orient]="xOrient"
        [showGridLines]="showGridLines"
        [gridLineHeight]="dims.height"
      />

      <svg:g axis-label
        *ngIf="showLabel"
        [label]="labelText"
        [offset]="80"
        [orient]="'bottom'"
        [height]="dims.height"
        [width]="dims.width">
      </svg:g>
    </svg:g>
  `
})
export class XAxis implements OnInit {
  @Input() xScale;
  @Input() dims;
  @Input() tickFormatting;
  @Input() showGridLines = false;
  @Input() showLabel;
  @Input() labelText;
  @Input() xAxisTickInterval;

  xAxisTickCount: any;
  xAxisClassName: any;
  xOrient: any;
  tickArguments: any;
  xAxisOffset: any;
  transform: any;

  constructor() {
    Object.assign(this, {
      xAxisClassName: 'x axis',
      xOrient: 'bottom',
      fill: 'none',
      stroke: 'none',
      tickStroke: '#ccc',
      strokeWidth: 'none',
      xAxisOffset: 5,
    });
  }

  ngOnInit() {
    this.update();
  }

  update() {
    this.transform = `translate(0,${this.xAxisOffset + this.dims.height})`;

    if (typeof this.xAxisTickCount !== 'undefined') {
      this.tickArguments = [this.xAxisTickCount];
    }

    if (typeof this.xAxisTickInterval !== 'undefined') {
      this.tickArguments = [d3.time[this.xAxisTickInterval.unit], this.xAxisTickInterval.interval];
    }
  }

}
