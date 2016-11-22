import { EventEmitter, ElementRef, OnChanges } from '@angular/core';
export declare class Card implements OnChanges {
    element: HTMLElement;
    transform: string;
    trimmedLabel: string;
    value: string;
    cardWidth: number;
    cardHeight: number;
    textWidth: number;
    resizeScale: number;
    textFontSize: number;
    textTransform: string;
    initialized: boolean;
    color: any;
    x: any;
    y: any;
    width: any;
    height: any;
    label: any;
    data: any;
    clickHandler: EventEmitter<{}>;
    textEl: ElementRef;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    update(): void;
    countUp(current: any, max: any, step: any): void;
    scaleText(): void;
    click(): void;
}
