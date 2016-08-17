import { Component, Input, OnInit } from '@angular/core';
import d3 from '../d3';
import moment = require("moment");

@Component({
  selector: 'g[lineSeries]',
  template: `
    <svg:g line
      [data]="data"
      [path]="path"
      [stroke]="color"
    />

    <text class="color">{{color}}</text>
  `
})
export class LineSeries implements OnInit {
  path: string;

  @Input() data;
  @Input() xScale;
  @Input() yScale;
  @Input() color;
  @Input() scaleType;

  ngOnInit() {
    let line = d3.line()
      .x(d => {
        let label = d.vals[0].label[0][0];
        if (this.scaleType === 'time') {
          return this.xScale(moment(label).toDate());
        } else {
          return this.xScale(label) + this.xScale.bandwidth() / 2;
        }
      })
      .y(d => this.yScale(d.vals[0].value));

    let data = this.data;
    if (this.scaleType === 'time') {
      data = this.data.filter(d => {
        return d.vals[0].label[0][0] !== 'No Value' && d.vals[0].label[0][0] !== 'Other';
      });
    }

    this.path = line(data) || '';
  }
}
