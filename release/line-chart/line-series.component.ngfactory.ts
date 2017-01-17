/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/line-chart/line-series.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/common/src/location/location';
import * as import10 from '../../../src/common/svg-linear-gradient.component';
import * as import11 from '../common/svg-linear-gradient.component.ngfactory';
import * as import12 from '../../../src/common/area.component';
import * as import13 from '../common/area.component.ngfactory';
import * as import14 from '../../../src/line-chart/line.component';
import * as import15 from './line.component.ngfactory';
import * as import16 from '@angular/core/src/linker/element_ref';
export class Wrapper_LineSeriesComponent {
  /*private*/ _eventHandler:Function;
  context:import0.LineSeriesComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  constructor(p0:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.LineSeriesComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._changes['data'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_xScale(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.xScale = currValue;
      this._changes['xScale'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_yScale(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.yScale = currValue;
      this._changes['yScale'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_colors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.colors = currValue;
      this._changes['colors'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_scaleType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.scaleType = currValue;
      this._changes['scaleType'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_curve(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.curve = currValue;
      this._changes['curve'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_activeEntries(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.activeEntries = currValue;
      this._changes['activeEntries'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_rangeFillOpacity(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.rangeFillOpacity = currValue;
      this._changes['rangeFillOpacity'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_LineSeriesComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_LineSeriesComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.LineSeriesComponent>;
  _LineSeriesComponent_0_3:Wrapper_LineSeriesComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LineSeriesComponent_Host0,renderType_LineSeriesComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'ngx-charts-line-series',''),rootSelector,(null as any));
    this.compView_0 = new View_LineSeriesComponent0(this.viewUtils,this,0,this._el_0);
    this._LineSeriesComponent_0_3 = new Wrapper_LineSeriesComponent(this.injectorGet(import9.Location,this.parentIndex));
    this.compView_0.create(this._LineSeriesComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._LineSeriesComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.LineSeriesComponent) && (0 === requestNodeIndex))) { return this._LineSeriesComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._LineSeriesComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const LineSeriesComponentNgFactory:import8.ComponentFactory<import0.LineSeriesComponent> = new import8.ComponentFactory<import0.LineSeriesComponent>('g[ngx-charts-line-series]',View_LineSeriesComponent_Host0,import0.LineSeriesComponent);
const styles_LineSeriesComponent:any[] = ([] as any[]);
var renderType_LineSeriesComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_LineSeriesComponent,{});
export class View_LineSeriesComponent0 extends import2.AppView<import0.LineSeriesComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  compView_5:import2.AppView<import10.SvgLinearGradientComponent>;
  _SvgLinearGradientComponent_5_3:import11.Wrapper_SvgLinearGradientComponent;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  compView_8:import2.AppView<import12.AreaComponent>;
  _AreaComponent_8_3:import13.Wrapper_AreaComponent;
  _text_9:any;
  _el_10:any;
  compView_10:import2.AppView<import14.LineComponent>;
  _LineComponent_10_3:import15.Wrapper_LineComponent;
  _text_11:any;
  _el_12:any;
  compView_12:import2.AppView<import12.AreaComponent>;
  _AreaComponent_12_3:import13.Wrapper_AreaComponent;
  _text_13:any;
  _text_14:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  /*private*/ _expr_25:any;
  /*private*/ _expr_26:any;
  /*private*/ _expr_27:any;
  /*private*/ _expr_28:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LineSeriesComponent0,renderType_LineSeriesComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
    this._expr_23 = import1.UNINITIALIZED;
    this._expr_24 = import1.UNINITIALIZED;
    this._expr_25 = import1.UNINITIALIZED;
    this._expr_26 = import1.UNINITIALIZED;
    this._expr_27 = import1.UNINITIALIZED;
    this._expr_28 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,':svg:g',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,':svg:defs',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,':svg:g',new import3.InlineArray8(6,'ng-if','hasGradient','ngx-charts-svg-linear-gradient','','orientation','vertical'),(null as any));
    this.compView_5 = new import11.View_SvgLinearGradientComponent0(this.viewUtils,this,5,this._el_5);
    this._SvgLinearGradientComponent_5_3 = new import11.Wrapper_SvgLinearGradientComponent();
    this.compView_5.create(this._SvgLinearGradientComponent_5_3.context);
    this._text_6 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_7 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_1,':svg:g',new import3.InlineArray4(4,'class','line-highlight','ngx-charts-area',''),(null as any));
    this.compView_8 = new import13.View_AreaComponent0(this.viewUtils,this,8,this._el_8);
    this._AreaComponent_8_3 = new import13.Wrapper_AreaComponent(new import16.ElementRef(this._el_8),this.parentView.injectorGet(import9.Location,this.parentIndex));
    this.compView_8.create(this._AreaComponent_8_3.context);
    this._text_9 = this.renderer.createText(this._el_1,'    \n      ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_1,':svg:g',new import3.InlineArray4(4,'class','line-series','ngx-charts-line',''),(null as any));
    this.compView_10 = new import15.View_LineComponent0(this.viewUtils,this,10,this._el_10);
    this._LineComponent_10_3 = new import15.Wrapper_LineComponent(new import16.ElementRef(this._el_10));
    this.compView_10.create(this._LineComponent_10_3.context);
    this._text_11 = this.renderer.createText(this._el_1,'\n     ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_1,':svg:g',new import3.InlineArray4(4,'class','line-series-range','ngx-charts-area',''),(null as any));
    this.compView_12 = new import13.View_AreaComponent0(this.viewUtils,this,12,this._el_12);
    this._AreaComponent_12_3 = new import13.Wrapper_AreaComponent(new import16.ElementRef(this._el_12),this.parentView.injectorGet(import9.Location,this.parentIndex));
    this.compView_12.create(this._AreaComponent_12_3.context);
    this._text_13 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.SvgLinearGradientComponent) && (5 === requestNodeIndex))) { return this._SvgLinearGradientComponent_5_3.context; }
    if (((token === import12.AreaComponent) && (8 === requestNodeIndex))) { return this._AreaComponent_8_3.context; }
    if (((token === import14.LineComponent) && (10 === requestNodeIndex))) { return this._LineComponent_10_3.context; }
    if (((token === import12.AreaComponent) && (12 === requestNodeIndex))) { return this._AreaComponent_12_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5_0_0:any = 'vertical';
    this._SvgLinearGradientComponent_5_3.check_orientation(currVal_5_0_0,throwOnChange,false);
    const currVal_5_0_1:any = this.context.colors.getColor(this.context.data.name);
    this._SvgLinearGradientComponent_5_3.check_color(currVal_5_0_1,throwOnChange,false);
    const currVal_5_0_2:any = this.context.gradientId;
    this._SvgLinearGradientComponent_5_3.check_name(currVal_5_0_2,throwOnChange,false);
    const currVal_5_0_3:any = this.context.gradientStops;
    this._SvgLinearGradientComponent_5_3.check_stops(currVal_5_0_3,throwOnChange,false);
    if (this._SvgLinearGradientComponent_5_3.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    const currVal_8_0_0:any = this.context.data;
    this._AreaComponent_8_3.check_data(currVal_8_0_0,throwOnChange,false);
    const currVal_8_0_1:any = this.context.areaPath;
    this._AreaComponent_8_3.check_path(currVal_8_0_1,throwOnChange,false);
    const currVal_8_0_2:any = (this.context.hasGradient? this.context.gradientUrl: this.context.colors.getColor(this.context.data.name));
    this._AreaComponent_8_3.check_fill(currVal_8_0_2,throwOnChange,false);
    const currVal_8_0_3:any = 0.25;
    this._AreaComponent_8_3.check_opacity(currVal_8_0_3,throwOnChange,false);
    const currVal_8_0_4:any = 0;
    this._AreaComponent_8_3.check_startOpacity(currVal_8_0_4,throwOnChange,false);
    const currVal_8_0_5:any = true;
    this._AreaComponent_8_3.check_gradient(currVal_8_0_5,throwOnChange,false);
    const currVal_8_0_6:any = this.context.areaGradientStops;
    this._AreaComponent_8_3.check_stops(currVal_8_0_6,throwOnChange,false);
    if (this._AreaComponent_8_3.ngDoCheck(this,this._el_8,throwOnChange)) { this.compView_8.markAsCheckOnce(); }
    const currVal_10_0_0:any = this.context.path;
    this._LineComponent_10_3.check_path(currVal_10_0_0,throwOnChange,false);
    const currVal_10_0_1:any = (this.context.hasGradient? this.context.gradientUrl: this.context.colors.getColor(this.context.data.name));
    this._LineComponent_10_3.check_stroke(currVal_10_0_1,throwOnChange,false);
    const currVal_10_0_2:any = this.context.data;
    this._LineComponent_10_3.check_data(currVal_10_0_2,throwOnChange,false);
    if (this._LineComponent_10_3.ngDoCheck(this,this._el_10,throwOnChange)) { this.compView_10.markAsCheckOnce(); }
    const currVal_12_0_0:any = this.context.data;
    this._AreaComponent_12_3.check_data(currVal_12_0_0,throwOnChange,false);
    const currVal_12_0_1:any = this.context.outerPath;
    this._AreaComponent_12_3.check_path(currVal_12_0_1,throwOnChange,false);
    const currVal_12_0_2:any = (this.context.hasGradient? this.context.gradientUrl: this.context.colors.getColor(this.context.data.name));
    this._AreaComponent_12_3.check_fill(currVal_12_0_2,throwOnChange,false);
    const currVal_12_0_3:any = this.context.rangeFillOpacity;
    this._AreaComponent_12_3.check_opacity(currVal_12_0_3,throwOnChange,false);
    if (this._AreaComponent_12_3.ngDoCheck(this,this._el_12,throwOnChange)) { this.compView_12.markAsCheckOnce(); }
    const currVal_23:any = this.context.isActive(this.context.data);
    if (import3.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setElementClass(this._el_8,'active',currVal_23);
      this._expr_23 = currVal_23;
    }
    const currVal_24:any = this.context.isInactive(this.context.data);
    if (import3.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setElementClass(this._el_8,'inactive',currVal_24);
      this._expr_24 = currVal_24;
    }
    const currVal_25:any = this.context.isActive(this.context.data);
    if (import3.checkBinding(throwOnChange,this._expr_25,currVal_25)) {
      this.renderer.setElementClass(this._el_10,'active',currVal_25);
      this._expr_25 = currVal_25;
    }
    const currVal_26:any = this.context.isInactive(this.context.data);
    if (import3.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this.renderer.setElementClass(this._el_10,'inactive',currVal_26);
      this._expr_26 = currVal_26;
    }
    const currVal_27:any = this.context.isActive(this.context.data);
    if (import3.checkBinding(throwOnChange,this._expr_27,currVal_27)) {
      this.renderer.setElementClass(this._el_12,'active',currVal_27);
      this._expr_27 = currVal_27;
    }
    const currVal_28:any = this.context.isInactive(this.context.data);
    if (import3.checkBinding(throwOnChange,this._expr_28,currVal_28)) {
      this.renderer.setElementClass(this._el_12,'inactive',currVal_28);
      this._expr_28 = currVal_28;
    }
    this.compView_5.internalDetectChanges(throwOnChange);
    this.compView_8.internalDetectChanges(throwOnChange);
    this.compView_10.internalDetectChanges(throwOnChange);
    this.compView_12.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_5.destroy();
    this.compView_8.destroy();
    this.compView_10.destroy();
    this.compView_12.destroy();
    this._AreaComponent_8_3.ngOnDestroy();
    this._LineComponent_10_3.ngOnDestroy();
    this._AreaComponent_12_3.ngOnDestroy();
  }
}