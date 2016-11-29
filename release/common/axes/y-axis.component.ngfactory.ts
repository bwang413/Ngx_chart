/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/common/axes/y-axis.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/query_list';
import * as import9 from '../../../../src/common/axes/y-axis-ticks.component';
import * as import10 from './y-axis-ticks.component.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '../../../../src/common/axes/axis-label.component';
import * as import16 from './axis-label.component.ngfactory';
import * as import17 from '@angular/core/src/linker/element_ref';
export class Wrapper_YAxis {
  /*private*/ _eventHandler:Function;
  context:import0.YAxis;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this._changes = {};
    this.context = new import0.YAxis();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_yScale(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.yScale = currValue;
      this._changes['yScale'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_dims(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.dims = currValue;
      this._changes['dims'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_tickFormatting(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.tickFormatting = currValue;
      this._changes['tickFormatting'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_showGridLines(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.showGridLines = currValue;
      this._changes['showGridLines'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_showLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.showLabel = currValue;
      this._changes['showLabel'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_labelText(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.labelText = currValue;
      this._changes['labelText'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_yAxisTickInterval(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.yAxisTickInterval = currValue;
      this._changes['yAxisTickInterval'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
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
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.dimensionsChanged.subscribe(_eventHandler.bind(view,'dimensionsChanged'))); }
  }
}
var renderType_YAxis_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_YAxis_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.YAxis>;
  _YAxis_0_3:Wrapper_YAxis;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_YAxis_Host0,renderType_YAxis_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'yAxis',''),rootSelector,(null as any));
    this.compView_0 = new View_YAxis0(this.viewUtils,this,0,this._el_0);
    this._YAxis_0_3 = new Wrapper_YAxis();
    this.compView_0.create(this._YAxis_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._YAxis_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.YAxis) && (0 === requestNodeIndex))) { return this._YAxis_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._YAxis_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._YAxis_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const YAxisNgFactory:import7.ComponentFactory<import0.YAxis> = new import7.ComponentFactory<import0.YAxis>('g[yAxis]',View_YAxis_Host0,import0.YAxis);
const styles_YAxis:any[] = ([] as any[]);
var renderType_YAxis:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_YAxis,{});
export class View_YAxis0 extends import2.AppView<import0.YAxis> {
  _viewQuery_YAxisTicks_0:import8.QueryList<any>;
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  compView_3:import2.AppView<import9.YAxisTicks>;
  _YAxisTicks_3_3:import10.Wrapper_YAxisTicks;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import11.ViewContainer;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import12.Wrapper_NgIf;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_YAxis0,renderType_YAxis,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_YAxisTicks_0 = new import8.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,':svg:g',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,':svg:g',new import3.InlineArray2(2,'yAxisTicks',''),(null as any));
    this.compView_3 = new import10.View_YAxisTicks0(this.viewUtils,this,3,this._el_3);
    this._YAxisTicks_3_3 = new import10.Wrapper_YAxisTicks();
    this.compView_3.create(this._YAxisTicks_3_3.context);
    this._text_4 = this.renderer.createText(this._el_1,'\n\n      ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_5 = new import11.ViewContainer(5,1,this,this._anchor_5);
    this._TemplateRef_5_5 = new import13.TemplateRef_(this,5,this._anchor_5);
    this._NgIf_5_6 = new import12.Wrapper_NgIf(this._vc_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_3,new import3.InlineArray2(2,'dimensionsChanged',(null as any)),this.eventHandler(this.handleEvent_3));
    this._YAxisTicks_3_3.subscribe(this,this.eventHandler(this.handleEvent_3),true);
    this._viewQuery_YAxisTicks_0.reset([this._YAxisTicks_3_3.context]);
    this.context.ticksComponent = this._viewQuery_YAxisTicks_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._text_7
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.YAxisTicks) && (3 === requestNodeIndex))) { return this._YAxisTicks_3_3.context; }
    if (((token === import13.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import14.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:any = this.context.yScale;
    this._YAxisTicks_3_3.check_scale(currVal_3_0_0,throwOnChange,false);
    const currVal_3_0_1:any = this.context.yOrient;
    this._YAxisTicks_3_3.check_orient(currVal_3_0_1,throwOnChange,false);
    const currVal_3_0_2:any = this.context.tickArguments;
    this._YAxisTicks_3_3.check_tickArguments(currVal_3_0_2,throwOnChange,false);
    const currVal_3_0_3:any = this.context.tickStroke;
    this._YAxisTicks_3_3.check_tickStroke(currVal_3_0_3,throwOnChange,false);
    const currVal_3_0_4:any = this.context.tickFormatting;
    this._YAxisTicks_3_3.check_tickFormatting(currVal_3_0_4,throwOnChange,false);
    const currVal_3_0_5:any = this.context.showGridLines;
    this._YAxisTicks_3_3.check_showGridLines(currVal_3_0_5,throwOnChange,false);
    const currVal_3_0_6:any = this.context.dims.width;
    this._YAxisTicks_3_3.check_gridLineWidth(currVal_3_0_6,throwOnChange,false);
    const currVal_3_0_7:any = this.context.dims.height;
    this._YAxisTicks_3_3.check_height(currVal_3_0_7,throwOnChange,false);
    if (this._YAxisTicks_3_3.ngDoCheck(this,this._el_3,throwOnChange)) { this.compView_3.markAsCheckOnce(); }
    const currVal_5_0_0:any = this.context.showLabel;
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    const currVal_14:any = this.context.yAxisClassName;
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementAttribute(this._el_1,'class',((currVal_14 == null)? (null as any): currVal_14.toString()));
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this.context.transform;
    if (import3.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementAttribute(this._el_1,'transform',((currVal_15 == null)? (null as any): currVal_15.toString()));
      this._expr_15 = currVal_15;
    }
    this.compView_3.detectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._YAxisTicks_3_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._vc_5.destroyNestedViews();
    this.compView_3.destroy();
    this._YAxisTicks_3_3.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 5)) { return new View_YAxis1(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    return (null as any);
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'dimensionsChanged')) {
      const pd_sub_0:any = ((<any>this.context.emitTicksWidth($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_YAxis1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import15.AxisLabel>;
  _AxisLabel_0_3:import16.Wrapper_AxisLabel;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_YAxis1,renderType_YAxis,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'axisLabel',''),(null as any));
    this.compView_0 = new import16.View_AxisLabel0(this.viewUtils,this,0,this._el_0);
    this._AxisLabel_0_3 = new import16.Wrapper_AxisLabel(new import17.ElementRef(this._el_0));
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_0.create(this._AxisLabel_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.AxisLabel) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._AxisLabel_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.yOrient;
    this._AxisLabel_0_3.check_orient(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.labelText;
    this._AxisLabel_0_3.check_label(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.labelOffset;
    this._AxisLabel_0_3.check_offset(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.dims.width;
    this._AxisLabel_0_3.check_width(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.context.dims.height;
    this._AxisLabel_0_3.check_height(currVal_0_0_4,throwOnChange,false);
    if (this._AxisLabel_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}