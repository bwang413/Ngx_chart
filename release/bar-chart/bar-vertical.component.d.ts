
import { EventEmitter, OnChanges, OnDestroy, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { BaseChart } from '../common/base-chart.component';
export declare class BarVertical extends BaseChart implements OnChanges, OnDestroy, AfterViewInit {
    private element;
    dims: ViewDimensions;
    xScale: any;
    yScale: any;
    xDomain: any;
    yDomain: any;
    transform: string;
    colors: Function;
    margin: any[];
    xAxisHeight: number;
    yAxisWidth: number;
    view: any;
    results: any;
    scheme: any;
    customColors: any;
    legend: boolean;
    xAxis: any;
    yAxis: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    gradient: boolean;
    showGridLines: boolean;
    clickHandler: EventEmitter<{}>;
    constructor(element: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    update(): void;
    getXScale(): any;
    getYScale(): any;
    getXDomain(): any;
    getYDomain(): number[];
    xAxisTickFormatting(): any;
    click(data: any): void;
    setColors(): void;
    updateYAxisWidth({width}: {
        width: any;
    }): void;
    updateXAxisHeight({height}: {
        height: any;
    }): void;
}
