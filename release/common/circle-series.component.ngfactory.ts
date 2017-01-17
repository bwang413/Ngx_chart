/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/common/circle-series.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/common/src/location/location';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '../../../src/common/svg-linear-gradient.component';
import * as import16 from './svg-linear-gradient.component.ngfactory';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import18 from '@angular/common/src/directives/ng_if';
import * as import19 from '../../../src/common/circle.component';
import * as import20 from './tooltip/tooltip.directive.ngfactory';
import * as import21 from './circle.component.ngfactory';
import * as import22 from '../../../src/common/tooltip/tooltip.service';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from '@angular/core/src/zone/ng_zone';
import * as import25 from '../../../src/common/tooltip/tooltip.directive';
export class Wrapper_CircleSeriesComponent {
  /*private*/ _eventHandler:Function;
  context:import0.CircleSeriesComponent;
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
  subscription0:any;
  subscription1:any;
  subscription2:any;
  constructor(p0:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.CircleSeriesComponent(p0);
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
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._changes['data'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_type(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.type = currValue;
      this._changes['type'] = new import1.SimpleChange(this._expr_1,currValue);
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
  check_colors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.colors = currValue;
      this._changes['colors'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_scaleType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.scaleType = currValue;
      this._changes['scaleType'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_visibleValue(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.visibleValue = currValue;
      this._changes['visibleValue'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_activeEntries(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.activeEntries = currValue;
      this._changes['activeEntries'] = new import1.SimpleChange(this._expr_7,currValue);
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
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.select.subscribe(_eventHandler.bind(view,'select'))); }
    if (emit1) { (this.subscription1 = this.context.activate.subscribe(_eventHandler.bind(view,'activate'))); }
    if (emit2) { (this.subscription2 = this.context.deactivate.subscribe(_eventHandler.bind(view,'deactivate'))); }
  }
}
var renderType_CircleSeriesComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_CircleSeriesComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.CircleSeriesComponent>;
  _CircleSeriesComponent_0_3:Wrapper_CircleSeriesComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CircleSeriesComponent_Host0,renderType_CircleSeriesComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'ngx-charts-circle-series',''),rootSelector,(null as any));
    this.compView_0 = new View_CircleSeriesComponent0(this.viewUtils,this,0,this._el_0);
    this._CircleSeriesComponent_0_3 = new Wrapper_CircleSeriesComponent(this.injectorGet(import9.Location,this.parentIndex));
    this.compView_0.create(this._CircleSeriesComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._CircleSeriesComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.CircleSeriesComponent) && (0 === requestNodeIndex))) { return this._CircleSeriesComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._CircleSeriesComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._CircleSeriesComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const CircleSeriesComponentNgFactory:import8.ComponentFactory<import0.CircleSeriesComponent> = new import8.ComponentFactory<import0.CircleSeriesComponent>('g[ngx-charts-circle-series]',View_CircleSeriesComponent_Host0,import0.CircleSeriesComponent);
const styles_CircleSeriesComponent:any[] = ([] as any[]);
var renderType_CircleSeriesComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_CircleSeriesComponent,{});
export class View_CircleSeriesComponent0 extends import2.AppView<import0.CircleSeriesComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import10.ViewContainer;
  _TemplateRef_1_5:any;
  _NgFor_1_6:import11.Wrapper_NgFor;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CircleSeriesComponent0,renderType_CircleSeriesComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import10.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import12.TemplateRef_(this,1,this._anchor_1);
    this._NgFor_1_6 = new import11.Wrapper_NgFor(this._vc_1.vcRef,this._TemplateRef_1_5,this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.ref);
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
    if (((token === import12.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import14.NgFor) && (1 === requestNodeIndex))) { return this._NgFor_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.circles;
    this._NgFor_1_6.check_ngForOf(currVal_1_0_0,throwOnChange,false);
    this._NgFor_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_CircleSeriesComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}
class View_CircleSeriesComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  compView_4:import2.AppView<import15.SvgLinearGradientComponent>;
  _SvgLinearGradientComponent_4_3:import16.Wrapper_SvgLinearGradientComponent;
  _text_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import10.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import17.Wrapper_NgIf;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import10.ViewContainer;
  _TemplateRef_9_5:any;
  _NgIf_9_6:import17.Wrapper_NgIf;
  _text_10:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_CircleSeriesComponent1,renderType_CircleSeriesComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,':svg:defs',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,':svg:g',new import3.InlineArray4(4,'ngx-charts-svg-linear-gradient','','orientation','vertical'),(null as any));
    this.compView_4 = new import16.View_SvgLinearGradientComponent0(this.viewUtils,this,4,this._el_4);
    this._SvgLinearGradientComponent_4_3 = new import16.Wrapper_SvgLinearGradientComponent();
    this.compView_4.create(this._SvgLinearGradientComponent_4_3.context);
    this._text_5 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_7 = new import10.ViewContainer(7,0,this,this._anchor_7);
    this._TemplateRef_7_5 = new import12.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import17.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_9 = new import10.ViewContainer(9,0,this,this._anchor_9);
    this._TemplateRef_9_5 = new import12.TemplateRef_(this,9,this._anchor_9);
    this._NgIf_9_6 = new import17.Wrapper_NgIf(this._vc_9.vcRef,this._TemplateRef_9_5);
    this._text_10 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._anchor_9,
      this._text_10
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.SvgLinearGradientComponent) && (4 === requestNodeIndex))) { return this._SvgLinearGradientComponent_4_3.context; }
    if (((token === import12.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import18.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import12.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import18.NgIf) && (9 === requestNodeIndex))) { return this._NgIf_9_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4_0_0:any = 'vertical';
    this._SvgLinearGradientComponent_4_3.check_orientation(currVal_4_0_0,throwOnChange,false);
    const currVal_4_0_1:any = this.parentView.context.color;
    this._SvgLinearGradientComponent_4_3.check_color(currVal_4_0_1,throwOnChange,false);
    const currVal_4_0_2:any = this.context.$implicit.gradientId;
    this._SvgLinearGradientComponent_4_3.check_name(currVal_4_0_2,throwOnChange,false);
    const currVal_4_0_3:any = this.context.$implicit.gradientStops;
    this._SvgLinearGradientComponent_4_3.check_stops(currVal_4_0_3,throwOnChange,false);
    if (this._SvgLinearGradientComponent_4_3.ngDoCheck(this,this._el_4,throwOnChange)) { this.compView_4.markAsCheckOnce(); }
    const currVal_7_0_0:any = (this.context.$implicit.barVisible && (this.parentView.context.type === 'standard'));
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    const currVal_9_0_0:any = this.parentView.context.isVisible(this.context.$implicit);
    this._NgIf_9_6.check_ngIf(currVal_9_0_0,throwOnChange,false);
    this._NgIf_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    this.compView_4.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_7.destroyNestedViews();
    this._vc_9.destroyNestedViews();
    this.compView_4.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 7)) { return new View_CircleSeriesComponent2(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    if ((nodeIndex == 9)) { return new View_CircleSeriesComponent3(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    return (null as any);
  }
}
class View_CircleSeriesComponent2 extends import2.AppView<any> {
  _el_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_CircleSeriesComponent2,renderType_CircleSeriesComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:rect',new import3.InlineArray2(2,'class','tooltip-bar'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = (this.parentView.context.$implicit.cx - this.parentView.context.$implicit.radius);
    if (import3.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementAttribute(this._el_0,'x',((currVal_1 == null)? (null as any): currVal_1.toString()));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.parentView.context.$implicit.cy;
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementAttribute(this._el_0,'y',((currVal_2 == null)? (null as any): currVal_2.toString()));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = (this.parentView.context.$implicit.radius * 2);
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementAttribute(this._el_0,'width',((currVal_3 == null)? (null as any): currVal_3.toString()));
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.parentView.context.$implicit.height;
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementAttribute(this._el_0,'height',((currVal_4 == null)? (null as any): currVal_4.toString()));
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.parentView.context.$implicit.gradientFill;
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementAttribute(this._el_0,'fill',((currVal_5 == null)? (null as any): currVal_5.toString()));
      this._expr_5 = currVal_5;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_CircleSeriesComponent3 extends import2.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import10.ViewContainer;
  compView_0:import2.AppView<import19.CircleComponent>;
  _TooltipDirective_0_5:import20.Wrapper_TooltipDirective;
  _CircleComponent_0_6:import21.Wrapper_CircleComponent;
  _el_1:any;
  /*private*/ _expr_6:any;
  _map_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_CircleSeriesComponent3,renderType_CircleSeriesComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_6 = import1.UNINITIALIZED;
    this._map_7 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {name: p0};
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray8(6,'class','circle','ngx-charts-circle','','ngx-tooltip',''),(null as any));
    this._vc_0 = new import10.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new import21.View_CircleComponent0(this.viewUtils,this,0,this._el_0);
    this._TooltipDirective_0_5 = new import20.Wrapper_TooltipDirective(this.parentView.parentView.injectorGet(import22.TooltipService,this.parentView.parentIndex),this._vc_0.vcRef,this.renderer,new import23.ElementRef(this._el_0),this.parentView.parentView.injectorGet(import24.NgZone,this.parentView.parentIndex));
    this._CircleComponent_0_6 = new import21.Wrapper_CircleComponent();
    this.compView_0.create(this._CircleComponent_0_6.context);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray16(16,'select',(null as any),'activate',(null as any),'deactivate',(null as any),'focusin',(null as any),'blur',(null as any),'mouseenter',(null as any),'mouseleave',(null as any),'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this._CircleComponent_0_6.subscribe(this,this.eventHandler(this.handleEvent_0),true,true,true);
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.TooltipDirective) && (0 === requestNodeIndex))) { return this._TooltipDirective_0_5.context; }
    if (((token === import19.CircleComponent) && (0 === requestNodeIndex))) { return this._CircleComponent_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.parentView.context.getTooltipText(this.parentView.context.$implicit);
    this._TooltipDirective_0_5.check_tooltipTitle(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = 'top';
    this._TooltipDirective_0_5.check_tooltipPlacement(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = 'tooltip';
    this._TooltipDirective_0_5.check_tooltipType(currVal_0_0_2,throwOnChange,false);
    this._TooltipDirective_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_0_1_0:any = this.parentView.context.$implicit.cx;
    this._CircleComponent_0_6.check_cx(currVal_0_1_0,throwOnChange,false);
    const currVal_0_1_1:any = this.parentView.context.$implicit.cy;
    this._CircleComponent_0_6.check_cy(currVal_0_1_1,throwOnChange,false);
    const currVal_0_1_2:any = this.parentView.context.$implicit.radius;
    this._CircleComponent_0_6.check_r(currVal_0_1_2,throwOnChange,false);
    const currVal_0_1_3:any = this.parentView.context.$implicit.color;
    this._CircleComponent_0_6.check_fill(currVal_0_1_3,throwOnChange,false);
    const currVal_0_1_4:any = this.parentView.context.$implicit.value;
    this._CircleComponent_0_6.check_data(currVal_0_1_4,throwOnChange,false);
    const currVal_0_1_5:any = this.parentView.context.$implicit.classNames;
    this._CircleComponent_0_6.check_classNames(currVal_0_1_5,throwOnChange,false);
    const currVal_0_1_6:any = ((this.parentView.context.$implicit.value === 0)? 'none': 'all');
    this._CircleComponent_0_6.check_pointerEvents(currVal_0_1_6,throwOnChange,false);
    if (this._CircleComponent_0_6.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    const currVal_6:any = this.parentView.parentView.context.isActive(this._map_7(this.parentView.context.$implicit.seriesName));
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_0,'active',currVal_6);
      this._expr_6 = currVal_6;
    }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this._TooltipDirective_0_5.ngOnDestroy();
    this._CircleComponent_0_6.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_1,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._TooltipDirective_0_5.handleEvent(eventName,$event) && result);
    result = (this._CircleComponent_0_6.handleEvent(eventName,$event) && result);
    if ((eventName == 'select')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.context.onClick($event,this.parentView.context.$implicit.label)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'activate')) {
      const pd_sub_1:any = ((<any>this.parentView.parentView.context.activateCircle(this.parentView.context.$implicit)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'deactivate')) {
      const pd_sub_2:any = ((<any>this.parentView.parentView.context.deactivateCircle(this.parentView.context.$implicit)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}