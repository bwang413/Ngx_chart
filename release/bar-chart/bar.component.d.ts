import { EventEmitter, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
export declare class BarComponent implements OnChanges {
    fill: any;
    data: any;
    width: number;
    height: number;
    x: number;
    y: number;
    orientation: any;
    roundEdges: boolean;
    gradient: boolean;
    offset: number;
    isActive: boolean;
    stops: any[];
    animations: boolean;
    ariaLabel: string;
    noBarWhenZero: boolean;
    select: EventEmitter<{}>;
    activate: EventEmitter<{}>;
    deactivate: EventEmitter<{}>;
    element: any;
    path: any;
    gradientId: any;
    gradientFill: any;
    startOpacity: any;
    initialized: boolean;
    gradientStops: any[];
    hasGradient: boolean;
    hideBar: boolean;
    constructor(element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    loadAnimation(): void;
    updatePathEl(): void;
    getGradient(): any[];
    getStartingPath(): any;
    getPath(): any;
    getRadius(): number;
    getStartOpacity(): number;
    readonly edges: boolean[];
    onMouseEnter(): void;
    onMouseLeave(): void;
    private checkToHideBar;
}
