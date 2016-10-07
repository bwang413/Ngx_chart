import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  trigger,
  style,
  transition,
  animate, ElementRef, NgZone, AfterViewInit
} from '@angular/core';
import {calculateViewDimensions, ViewDimensions} from '../common/view-dimensions.helper';
import {colorHelper} from '../utils/color-sets';
import {BaseChart} from '../common/base-chart.component';
import d3 from '../d3';

@Component({
  selector: 'bar-horizontal-normalized',
  template: `
    <chart
      [legend]="legend"
      [view]="view"
      [colors]="colors"
      [legendData]="innerDomain">
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g xAxis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          showGridLines="true"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel">
        </svg:g>

        <svg:g yAxis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel">
        </svg:g>

        <svg:g
          *ngFor="let group of results; trackBy:trackBy"
          [@animationState]="'active'"
          [attr.transform]="groupTransform(group)">
          <svg:g seriesHorizontal
            type="normalized"
            [xScale]="xScale"
            [yScale]="yScale"
            [colors]="colors"
            [series]="group.series"
            [dims]="dims"
            [gradient]="gradient"
            (clickHandler)="click($event, group)"
          />
        </svg:g>

      </svg:g>
    </chart>
  `,
  animations: [
    trigger('animationState', [
      transition('* => void', [
        style({
          opacity: 1,
          transform: '*',
        }),
        animate(500, style({opacity: 0, transform: 'scale(0)'}))
      ])
    ])
  ]
})
export class BarHorizontalNormalized extends BaseChart implements OnChanges, AfterViewInit {
  dims: ViewDimensions;
  groupDomain: any[];
  innerDomain: any[];
  valueDomain: any[];
  xScale: any;
  yScale: any;
  transform: string;
  colors: Function;
  margin = [10, 20, 70, 100];

  @Input() view;
  @Input() results;
  @Input() scheme;
  @Input() customColors;
  @Input() legend = false;
  @Input() xAxis;
  @Input() yAxis;
  @Input() showXAxisLabel;
  @Input() showYAxisLabel;
  @Input() xAxisLabel;
  @Input() yAxisLabel;
  @Input() gradient: boolean;

  @Output() clickHandler = new EventEmitter();

  constructor(private element: ElementRef, zone: NgZone) {
    super(element,zone);
  }

  ngAfterViewInit(): void {
    this.bindResizeEvents(this.view);
  }

  ngOnChanges() {
    this.update();
  }

  update() {
    super.update();
    this.dims = calculateViewDimensions(this.view, this.margin, this.showXAxisLabel, this.showYAxisLabel, this.legend, 9);

    this.groupDomain = this.getGroupDomain();
    this.innerDomain = this.getInnerDomain();
    this.valueDomain = this.getValueDomain();

    this.xScale = this.getXScale();
    this.yScale = this.getYScale();

    this.setColors();

    this.transform = `translate(${ this.dims.xOffset } , ${ this.margin[0] })`;
  }

  getGroupDomain() {
    let domain = [];
    for (let group of this.results) {
      if (!domain.includes(group.name)) {
        domain.push(group.name);
      }
    }

    return domain;
  }

  getInnerDomain() {
    let domain = [];
    for (let group of this.results) {
      for (let d of group.series) {
        if (!domain.includes(d.name)) {
          domain.push(d.name);
        }
      }
    }

    return domain;
  }

  getValueDomain() {
    return [0, 100];
  }

  getYScale() {
    let spacing = 0.1;
    return d3.scaleBand()
      .rangeRound([this.dims.height, 0])
      .paddingInner(spacing)
      .domain(this.groupDomain);
  }

  getXScale() {
    return d3.scaleLinear()
      .range([0, this.dims.width])
      .domain(this.valueDomain);

  }

  groupTransform(group) {
    return `translate(0, ${this.yScale(group.name)})`;
  }

  click(data, group) {
    data.series = group.name;
    this.clickHandler.emit(data);
  }

  trackBy(index, item) {
    return item.name;
  }

  setColors() {
    this.colors = colorHelper(this.scheme, 'ordinal', this.innerDomain, this.customColors);
  }

}
