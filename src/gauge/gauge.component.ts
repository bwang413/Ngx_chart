import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';

import d3 from '../d3';
import { BaseChartComponent } from '../common/base-chart.component';
import { calculateViewDimensions, ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';

@Component({
  selector: 'ngx-charts-gauge',
  template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)">
      <svg:g [attr.transform]="transform" class="gauge chart">
        <svg:g *ngFor="let arc of arcs" [attr.transform]="rotation">
          <svg:g ngx-charts-gauge-arc
            [backgroundArc]="arc.backgroundArc"
            [valueArc]="arc.valueArc"
            [cornerRadius]="cornerRadius"
            [colors]="colors"
            [isActive]="isActive(arc.valueArc.data)"
            (select)="onClick($event)"
            (activate)="onActivate($event)"
            (deactivate)="onDeactivate($event)">
          </svg:g>
        </svg:g>

        <svg:g ngx-charts-gauge-axis
          *ngIf="showAxis"
          [bigSegments]="bigSegments"
          [smallSegments]="smallSegments"
          [min]="min"
          [max]="max"
          [radius]="outerRadius"
          [angleSpan]="angleSpan"
          [valueScale]="valueScale"
          [startAngle]="startAngle">
        </svg:g>

        <svg:text #textEl
            [style.textAnchor]="'middle'"
            [attr.transform]="textTransform"
            alignment-baseline="central">
          <tspan x="0" dy="0">{{displayValue}}</tspan>
          <tspan x="0" dy="1.2em">{{units}}</tspan>
        </svg:text>

      </svg:g>
    </ngx-charts-chart>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaugeComponent extends BaseChartComponent implements AfterViewInit {

  @Input() legend = false;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() units: string;
  @Input() bigSegments: number = 10;
  @Input() smallSegments: number = 5;
  @Input() results: any[];
  @Input() showAxis: boolean = true;
  @Input() startAngle: number = -120;
  @Input() angleSpan: number = 240;
  @Input() activeEntries: any[] = [];

  // Specify margins
  @Input() margin: any[];

  @Output() activate: EventEmitter<any> = new EventEmitter();
  @Output() deactivate: EventEmitter<any> = new EventEmitter();

  @ViewChild('textEl') textEl: ElementRef;

  dims: ViewDimensions;
  domain: any[];
  valueDomain: any;
  valueScale: any;

  colors: ColorHelper;
  transform: string;

  outerRadius: number;
  textRadius: number; // max available radius for the text
  resizeScale: number = 1;
  rotation: string = '';
  textTransform: string = 'scale(1, 1)';
  cornerRadius: number = 10;
  arcs: any[];
  displayValue: string;
  legendOptions: any;

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    setTimeout(() => this.scaleText());
  }

  update(): void {
    super.update();

    this.zone.run(() => {
      if (!this.showAxis) {
        if (!this.margin) {
          this.margin = [10, 20, 10, 20];
        }
      } else {
        if (!this.margin) {
          this.margin = [60, 100, 60, 100];
        }
      }

      // make the starting angle positive
      if (this.startAngle < 0) {
        this.startAngle = (this.startAngle % 360) + 360;
      }

      this.angleSpan = Math.min(this.angleSpan, 360);

      this.dims = calculateViewDimensions({
        width: this.width,
        height: this.height,
        margins: this.margin,
        showLegend: this.legend
      });

      this.domain = this.getDomain();
      this.valueDomain = this.getValueDomain();
      this.valueScale = this.getValueScale();
      this.displayValue = this.getDisplayValue();

      this.outerRadius = Math.min(this.dims.width, this.dims.height) / 2;

      this.arcs = this.getArcs();

      this.setColors();
      this.legendOptions = this.getLegendOptions();

      const xOffset = this.margin[3] + this.dims.width / 2;
      const yOffset = this.margin[0] + this.dims.height / 2;

      this.transform = `translate(${ xOffset }, ${ yOffset })`;
      this.rotation = `rotate(${ this.startAngle })`;
      setTimeout(() => this.scaleText(), 50);
    });
  }

  getArcs(): any[] {
    const arcs = [];

    const availableRadius = this.outerRadius * 0.7;

    const radiusPerArc = Math.min(availableRadius / this.results.length, 10);
    const arcWidth = radiusPerArc * 0.7;
    this.textRadius = this.outerRadius - this.results.length * radiusPerArc;
    this.cornerRadius = Math.floor(arcWidth / 2);

    let i = 0;
    for (const d of this.results) {
      const outerRadius = this.outerRadius - (i * radiusPerArc);
      const innerRadius = outerRadius - arcWidth;

      const backgroundArc = {
        endAngle: this.angleSpan * Math.PI / 180,
        innerRadius,
        outerRadius,
        data: {
          value: this.max,
          name: d.name
        }
      };

      const valueArc = {
        endAngle: Math.min(this.valueScale(d.value), this.angleSpan) * Math.PI / 180,
        innerRadius,
        outerRadius,
        data: {
          value: d.value,
          name: d.name
        }
      };

      const arc = {
        backgroundArc,
        valueArc
      };

      arcs.push(arc);
      i++;
    }

    return arcs;
  }

  getDomain(): any[] {
    return this.results.map(d => d.name);
  }

  getValueDomain(): any[] {
    const values = this.results.map(d => d.value);
    const dataMin = Math.min(...values);
    const dataMax = Math.max(...values);

    if (this.min !== undefined) {
      this.min = Math.min(this.min, dataMin);
    } else {
      this.min = dataMin;
    }

    if (this.max !== undefined) {
      this.max = Math.max(this.max, dataMax);
    } else {
      this.max = dataMax;
    }

    return [this.min, this.max];
  }

  getValueScale(): any {
    return d3.scaleLinear()
      .range([0, this.angleSpan])
      .domain(this.valueDomain);
  }

  getDisplayValue(): string {
    const value = this.results.map(d => d.value).reduce((a, b) => { return a + b; }, 0);
    return value.toLocaleString();
  }

  scaleText(repeat: boolean = true): void {
    this.zone.run(() => {
      const { width } = this.textEl.nativeElement.getBoundingClientRect();
      const oldScale = this.resizeScale;

      if (width === 0) {
        this.resizeScale = 1;
      } else {        
        const availableSpace = this.textRadius;
        this.resizeScale = Math.floor((availableSpace / (width / this.resizeScale)) * 100) / 100;
      }

      if (this.resizeScale !== oldScale) {
        this.textTransform = `scale(${this.resizeScale}, ${this.resizeScale})`;
        this.cd.markForCheck();
        if (repeat) {
          setTimeout(() => this.scaleText(false), 50);
        }
      }
    });
  }

  onClick(data): void {
    this.select.emit(data);
  }

  getLegendOptions() {
    return {
      scaleType: 'ordinal',
      colors: this.colors,
      domain: this.domain
    };
  }

  setColors(): void {
    this.colors = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
  }

  onActivate(item) {
    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name && d.value === item.value;
    });
    if (idx > -1) {
      return;
    }

    this.activeEntries = [ item, ...this.activeEntries ];
    this.activate.emit({ value: item, entries: this.activeEntries });
  }

  onDeactivate(item) {
    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name && d.value === item.value;
    });

    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];

    this.deactivate.emit({ value: event, entries: this.activeEntries });
  }

  isActive(entry): boolean {
    if(!this.activeEntries) return false;
    const item = this.activeEntries.find(d => {
      return entry.name === d.name && entry.series === d.series;
    });
    return item !== undefined;
  }
}
