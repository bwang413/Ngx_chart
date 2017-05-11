import { ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
import { BaseChartComponent } from '../common/base-chart.component';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
export declare class GaugeComponent extends BaseChartComponent implements AfterViewInit {
    legend: boolean;
    legendTitle: string;
    min: number;
    max: number;
    textValue: string;
    units: string;
    bigSegments: number;
    smallSegments: number;
    results: any[];
    showAxis: boolean;
    startAngle: number;
    angleSpan: number;
    activeEntries: any[];
    axisTickFormatting: any;
    tooltipDisabled: boolean;
    valueFormatting: (value: any) => string;
    margin: any[];
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    textEl: ElementRef;
    dims: ViewDimensions;
    domain: any[];
    valueDomain: any;
    valueScale: any;
    colors: ColorHelper;
    transform: string;
    outerRadius: number;
    textRadius: number;
    resizeScale: number;
    rotation: string;
    textTransform: string;
    cornerRadius: number;
    arcs: any[];
    displayValue: string;
    legendOptions: any;
    ngAfterViewInit(): void;
    update(): void;
    getArcs(): any[];
    getDomain(): any[];
    getValueDomain(): any[];
    getValueScale(): any;
    getDisplayValue(): string;
    scaleText(repeat?: boolean): void;
    onClick(data: any): void;
    getLegendOptions(): any;
    setColors(): void;
    onActivate(item: any): void;
    onDeactivate(item: any): void;
    isActive(entry: any): boolean;
}
