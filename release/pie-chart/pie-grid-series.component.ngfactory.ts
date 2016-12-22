/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/pie-chart/pie-grid-series.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '../../../src/pie-chart/pie-arc.component';
import * as import16 from './pie-arc.component.ngfactory';
export class Wrapper_PieGridSeriesComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PieGridSeriesComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.PieGridSeriesComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_colors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.colors = currValue;
      this._changes['colors'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._changes['data'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_innerRadius(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.innerRadius = currValue;
      this._changes['innerRadius'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_outerRadius(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.outerRadius = currValue;
      this._changes['outerRadius'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
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
var renderType_PieGridSeriesComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_PieGridSeriesComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PieGridSeriesComponent>;
  _PieGridSeriesComponent_0_3:Wrapper_PieGridSeriesComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieGridSeriesComponent_Host0,renderType_PieGridSeriesComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'ngx-charts-pie-grid-series',''),rootSelector,(null as any));
    this.compView_0 = new View_PieGridSeriesComponent0(this.viewUtils,this,0,this._el_0);
    this._PieGridSeriesComponent_0_3 = new Wrapper_PieGridSeriesComponent(new import9.ElementRef(this._el_0));
    this.compView_0.create(this._PieGridSeriesComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._PieGridSeriesComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PieGridSeriesComponent) && (0 === requestNodeIndex))) { return this._PieGridSeriesComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._PieGridSeriesComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._PieGridSeriesComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PieGridSeriesComponentNgFactory:import8.ComponentFactory<import0.PieGridSeriesComponent> = new import8.ComponentFactory<import0.PieGridSeriesComponent>('g[ngx-charts-pie-grid-series]',View_PieGridSeriesComponent_Host0,import0.PieGridSeriesComponent);
const styles_PieGridSeriesComponent:any[] = ([] as any[]);
var renderType_PieGridSeriesComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_PieGridSeriesComponent,{});
export class View_PieGridSeriesComponent0 extends import2.AppView<import0.PieGridSeriesComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import10.ViewContainer;
  _TemplateRef_3_5:any;
  _NgFor_3_6:import11.Wrapper_NgFor;
  _text_4:any;
  _text_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieGridSeriesComponent0,renderType_PieGridSeriesComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,':svg:g',new import3.InlineArray2(2,'class','pie-grid-arcs'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_3 = new import10.ViewContainer(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import12.TemplateRef_(this,3,this._anchor_3);
    this._NgFor_3_6 = new import11.Wrapper_NgFor(this._vc_3.vcRef,this._TemplateRef_3_5,this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.ref);
    this._text_4 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import14.NgFor) && (3 === requestNodeIndex))) { return this._NgFor_3_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:any = this.context.arcs;
    this._NgFor_3_6.check_ngForOf(currVal_3_0_0,throwOnChange,false);
    const currVal_3_0_1:any = this.context.trackBy;
    this._NgFor_3_6.check_ngForTrackBy(currVal_3_0_1,throwOnChange,false);
    this._NgFor_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 3)) { return new View_PieGridSeriesComponent1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    return (null as any);
  }
}
class View_PieGridSeriesComponent1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import15.PieArcComponent>;
  _PieArcComponent_0_3:import16.Wrapper_PieArcComponent;
  _text_1:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_PieGridSeriesComponent1,renderType_PieGridSeriesComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_4 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'ngx-charts-pie-arc',''),(null as any));
    this.compView_0 = new import16.View_PieArcComponent0(this.viewUtils,this,0,this._el_0);
    this._PieArcComponent_0_3 = new import16.Wrapper_PieArcComponent(new import9.ElementRef(this._el_0));
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_0.create(this._PieArcComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'select',(null as any)),this.eventHandler(this.handleEvent_0));
    this._PieArcComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true,false,false);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.PieArcComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._PieArcComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.color(this.context.$implicit);
    this._PieArcComponent_0_3.check_fill(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.context.$implicit.startAngle;
    this._PieArcComponent_0_3.check_startAngle(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.context.$implicit.endAngle;
    this._PieArcComponent_0_3.check_endAngle(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.innerRadius;
    this._PieArcComponent_0_3.check_innerRadius(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.context.outerRadius;
    this._PieArcComponent_0_3.check_outerRadius(currVal_0_0_4,throwOnChange,false);
    const currVal_0_0_5:any = this.context.$implicit.data.value;
    this._PieArcComponent_0_3.check_value(currVal_0_0_5,throwOnChange,false);
    const currVal_0_0_6:any = this.parentView.context.max;
    this._PieArcComponent_0_3.check_max(currVal_0_0_6,throwOnChange,false);
    const currVal_0_0_7:any = this.context.$implicit.data;
    this._PieArcComponent_0_3.check_data(currVal_0_0_7,throwOnChange,false);
    const currVal_0_0_8:any = false;
    this._PieArcComponent_0_3.check_gradient(currVal_0_0_8,throwOnChange,false);
    const currVal_0_0_9:any = this.context.$implicit.animate;
    this._PieArcComponent_0_3.check_animate(currVal_0_0_9,throwOnChange,false);
    const currVal_0_0_10:any = this.context.$implicit.pointerEvents;
    this._PieArcComponent_0_3.check_pointerEvents(currVal_0_0_10,throwOnChange,false);
    if (this._PieArcComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    const currVal_4:any = this.context.$implicit.class;
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementAttribute(this._el_0,'class',((currVal_4 == null)? (null as any): currVal_4.toString()));
      this._expr_4 = currVal_4;
    }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._PieArcComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'select')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}