/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/heat-map/heat-map-cell-series.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '../../../src/heat-map/heat-map-cell.component';
import * as import15 from '../common/tooltip/tooltip.directive.ngfactory';
import * as import16 from './heat-map-cell.component.ngfactory';
import * as import17 from '../../../src/common/tooltip/tooltip.service';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/core/src/zone/ng_zone';
import * as import20 from '@angular/common/src/location/location';
import * as import21 from '../../../src/common/tooltip/tooltip.directive';
export class Wrapper_HeatCellSeriesComponent {
  /*private*/ _eventHandler:Function;
  context:import0.HeatCellSeriesComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this._changes = {};
    this.context = new import0.HeatCellSeriesComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._changes['data'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_colors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.colors = currValue;
      this._changes['colors'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_xScale(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.xScale = currValue;
      this._changes['xScale'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_yScale(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.yScale = currValue;
      this._changes['yScale'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_gradient(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.gradient = currValue;
      this._changes['gradient'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
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
    if (emit0) { (this.subscription0 = this.context.select.subscribe(_eventHandler.bind(view,'select'))); }
  }
}
var renderType_HeatCellSeriesComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_HeatCellSeriesComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.HeatCellSeriesComponent>;
  _HeatCellSeriesComponent_0_3:Wrapper_HeatCellSeriesComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeatCellSeriesComponent_Host0,renderType_HeatCellSeriesComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'ngx-charts-heat-map-cell-series',''),rootSelector,(null as any));
    this.compView_0 = new View_HeatCellSeriesComponent0(this.viewUtils,this,0,this._el_0);
    this._HeatCellSeriesComponent_0_3 = new Wrapper_HeatCellSeriesComponent();
    this.compView_0.create(this._HeatCellSeriesComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._HeatCellSeriesComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HeatCellSeriesComponent) && (0 === requestNodeIndex))) { return this._HeatCellSeriesComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._HeatCellSeriesComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._HeatCellSeriesComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const HeatCellSeriesComponentNgFactory:import8.ComponentFactory<import0.HeatCellSeriesComponent> = new import8.ComponentFactory<import0.HeatCellSeriesComponent>('g[ngx-charts-heat-map-cell-series]',View_HeatCellSeriesComponent_Host0,import0.HeatCellSeriesComponent);
const styles_HeatCellSeriesComponent:any[] = ([] as any[]);
var renderType_HeatCellSeriesComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_HeatCellSeriesComponent,{});
export class View_HeatCellSeriesComponent0 extends import2.AppView<import0.HeatCellSeriesComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import9.ViewContainer;
  _TemplateRef_1_5:any;
  _NgFor_1_6:import10.Wrapper_NgFor;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeatCellSeriesComponent0,renderType_HeatCellSeriesComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import9.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import11.TemplateRef_(this,1,this._anchor_1);
    this._NgFor_1_6 = new import10.Wrapper_NgFor(this._vc_1.vcRef,this._TemplateRef_1_5,this.parentView.injectorGet(import12.IterableDiffers,this.parentIndex),this.ref);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import13.NgFor) && (1 === requestNodeIndex))) { return this._NgFor_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.cells;
    this._NgFor_1_6.check_ngForOf(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this.context.trackBy;
    this._NgFor_1_6.check_ngForTrackBy(currVal_1_0_1,throwOnChange,false);
    this._NgFor_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_HeatCellSeriesComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}
class View_HeatCellSeriesComponent1 extends import2.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import9.ViewContainer;
  compView_0:import2.AppView<import14.HeatMapCellComponent>;
  _TooltipDirective_0_5:import15.Wrapper_TooltipDirective;
  _HeatMapCellComponent_0_6:import16.Wrapper_HeatMapCellComponent;
  _el_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_HeatCellSeriesComponent1,renderType_HeatCellSeriesComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray4(4,'ngx-charts-heat-map-cell','','ngx-tooltip',''),(null as any));
    this._vc_0 = new import9.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new import16.View_HeatMapCellComponent0(this.viewUtils,this,0,this._el_0);
    this._TooltipDirective_0_5 = new import15.Wrapper_TooltipDirective(this.parentView.injectorGet(import17.TooltipService,this.parentIndex),this._vc_0.vcRef,this.renderer,new import18.ElementRef(this._el_0),this.parentView.injectorGet(import19.NgZone,this.parentIndex));
    this._HeatMapCellComponent_0_6 = new import16.Wrapper_HeatMapCellComponent(new import18.ElementRef(this._el_0),this.parentView.injectorGet(import20.Location,this.parentIndex));
    this.compView_0.create(this._HeatMapCellComponent_0_6.context);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray16(12,'select',(null as any),'focusin',(null as any),'blur',(null as any),'mouseenter',(null as any),'mouseleave',(null as any),'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this._HeatMapCellComponent_0_6.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.TooltipDirective) && (0 === requestNodeIndex))) { return this._TooltipDirective_0_5.context; }
    if (((token === import14.HeatMapCellComponent) && (0 === requestNodeIndex))) { return this._HeatMapCellComponent_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.getTooltipText(this.context.$implicit);
    this._TooltipDirective_0_5.check_tooltipTitle(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = 'top';
    this._TooltipDirective_0_5.check_tooltipPlacement(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = 'tooltip';
    this._TooltipDirective_0_5.check_tooltipType(currVal_0_0_2,throwOnChange,false);
    this._TooltipDirective_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_0_1_0:any = this.context.$implicit.fill;
    this._HeatMapCellComponent_0_6.check_fill(currVal_0_1_0,throwOnChange,false);
    const currVal_0_1_1:any = this.context.$implicit.x;
    this._HeatMapCellComponent_0_6.check_x(currVal_0_1_1,throwOnChange,false);
    const currVal_0_1_2:any = this.context.$implicit.y;
    this._HeatMapCellComponent_0_6.check_y(currVal_0_1_2,throwOnChange,false);
    const currVal_0_1_3:any = this.context.$implicit.width;
    this._HeatMapCellComponent_0_6.check_width(currVal_0_1_3,throwOnChange,false);
    const currVal_0_1_4:any = this.context.$implicit.height;
    this._HeatMapCellComponent_0_6.check_height(currVal_0_1_4,throwOnChange,false);
    const currVal_0_1_5:any = this.context.$implicit.data;
    this._HeatMapCellComponent_0_6.check_data(currVal_0_1_5,throwOnChange,false);
    const currVal_0_1_6:any = this.parentView.context.gradient;
    this._HeatMapCellComponent_0_6.check_gradient(currVal_0_1_6,throwOnChange,false);
    if (this._HeatMapCellComponent_0_6.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this._TooltipDirective_0_5.ngOnDestroy();
    this._HeatMapCellComponent_0_6.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_1,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._TooltipDirective_0_5.handleEvent(eventName,$event) && result);
    if ((eventName == 'select')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onClick($event,this.context.$implicit.label,this.context.$implicit.series)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}