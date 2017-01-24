/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/gauge/gauge.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/zone/ng_zone';
import * as import11 from '@angular/common/src/location/location';
import * as import12 from '../common/base-chart.component.scss.ngstyle';
import * as import13 from './gauge.component.scss.ngstyle';
import * as import14 from '../../../src/gauge/gauge-arc.component';
import * as import15 from './gauge-arc.component.ngfactory';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../../src/gauge/gauge-axis.component';
import * as import18 from './gauge-axis.component.ngfactory';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from '../../../src/common/charts/chart.component';
import * as import21 from '../../../src/common/tooltip/tooltip.service';
import * as import22 from '../common/charts/chart.component.ngfactory';
import * as import23 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import24 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import25 from '../../../src/services/injection.service';
import * as import26 from '@angular/core/src/linker/template_ref';
import * as import27 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import28 from '@angular/common/src/directives/ng_for';
import * as import29 from '@angular/common/src/directives/ng_if';
import * as import30 from '@angular/core/src/security';
export class Wrapper_GaugeComponent {
  /*private*/ _eventHandler:Function;
  context:import0.GaugeComponent;
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
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.GaugeComponent(p0,p1,p2,p3);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
    this._expr_16 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
  }
  check_results(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.results = currValue;
      this._changes['results'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_view(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.view = currValue;
      this._changes['view'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_scheme(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.scheme = currValue;
      this._changes['scheme'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_schemeType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.schemeType = currValue;
      this._changes['schemeType'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_customColors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.customColors = currValue;
      this._changes['customColors'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_legend(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.legend = currValue;
      this._changes['legend'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_min(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.min = currValue;
      this._changes['min'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_max(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.max = currValue;
      this._changes['max'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  check_units(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.units = currValue;
      this._changes['units'] = new import1.SimpleChange(this._expr_8,currValue);
      this._expr_8 = currValue;
    }
  }
  check_bigSegments(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.bigSegments = currValue;
      this._changes['bigSegments'] = new import1.SimpleChange(this._expr_9,currValue);
      this._expr_9 = currValue;
    }
  }
  check_smallSegments(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.smallSegments = currValue;
      this._changes['smallSegments'] = new import1.SimpleChange(this._expr_10,currValue);
      this._expr_10 = currValue;
    }
  }
  check_showAxis(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.showAxis = currValue;
      this._changes['showAxis'] = new import1.SimpleChange(this._expr_11,currValue);
      this._expr_11 = currValue;
    }
  }
  check_startAngle(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_12,currValue))) {
      this._changed = true;
      this.context.startAngle = currValue;
      this._changes['startAngle'] = new import1.SimpleChange(this._expr_12,currValue);
      this._expr_12 = currValue;
    }
  }
  check_angleSpan(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_13,currValue))) {
      this._changed = true;
      this.context.angleSpan = currValue;
      this._changes['angleSpan'] = new import1.SimpleChange(this._expr_13,currValue);
      this._expr_13 = currValue;
    }
  }
  check_activeEntries(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_14,currValue))) {
      this._changed = true;
      this.context.activeEntries = currValue;
      this._changes['activeEntries'] = new import1.SimpleChange(this._expr_14,currValue);
      this._expr_14 = currValue;
    }
  }
  check_axisTickFormatting(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_15,currValue))) {
      this._changed = true;
      this.context.axisTickFormatting = currValue;
      this._changes['axisTickFormatting'] = new import1.SimpleChange(this._expr_15,currValue);
      this._expr_15 = currValue;
    }
  }
  check_margin(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_16,currValue))) {
      this._changed = true;
      this.context.margin = currValue;
      this._changes['margin'] = new import1.SimpleChange(this._expr_16,currValue);
      this._expr_16 = currValue;
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
var renderType_GaugeComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_GaugeComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.GaugeComponent>;
  _GaugeComponent_0_3:Wrapper_GaugeComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_GaugeComponent_Host0,renderType_GaugeComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ngx-charts-gauge',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_GaugeComponent0(this.viewUtils,this,0,this._el_0);
    this._GaugeComponent_0_3 = new Wrapper_GaugeComponent(new import9.ElementRef(this._el_0),this.injectorGet(import10.NgZone,this.parentIndex),this.compView_0.ref,this.injectorGet(import11.Location,this.parentIndex));
    this.compView_0.create(this._GaugeComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._GaugeComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.GaugeComponent) && (0 === requestNodeIndex))) { return this._GaugeComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._GaugeComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._GaugeComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._GaugeComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const GaugeComponentNgFactory:import8.ComponentFactory<import0.GaugeComponent> = new import8.ComponentFactory<import0.GaugeComponent>('ngx-charts-gauge',View_GaugeComponent_Host0,import0.GaugeComponent);
const styles_GaugeComponent:any[] = [
  import12.styles,
  import13.styles
]
;
class View_GaugeComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import14.GaugeArcComponent>;
  _GaugeArcComponent_2_3:import15.Wrapper_GaugeArcComponent;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_GaugeComponent1,renderType_GaugeComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_7 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,':svg:g',new import3.InlineArray2(2,'ngx-charts-gauge-arc',''),(null as any));
    this.compView_2 = new import15.View_GaugeArcComponent0(this.viewUtils,this,2,this._el_2);
    this._GaugeArcComponent_2_3 = new import15.Wrapper_GaugeArcComponent();
    this._text_3 = this.renderer.createText((null as any),'\n          ',(null as any));
    this.compView_2.create(this._GaugeArcComponent_2_3.context);
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray8(6,'select',(null as any),'activate',(null as any),'deactivate',(null as any)),this.eventHandler(this.handleEvent_2));
    this._GaugeArcComponent_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true,true,true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.GaugeArcComponent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._GaugeArcComponent_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.$implicit.backgroundArc;
    this._GaugeArcComponent_2_3.check_backgroundArc(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.context.$implicit.valueArc;
    this._GaugeArcComponent_2_3.check_valueArc(currVal_2_0_1,throwOnChange,false);
    const currVal_2_0_2:any = this.parentView.context.cornerRadius;
    this._GaugeArcComponent_2_3.check_cornerRadius(currVal_2_0_2,throwOnChange,false);
    const currVal_2_0_3:any = this.parentView.context.colors;
    this._GaugeArcComponent_2_3.check_colors(currVal_2_0_3,throwOnChange,false);
    const currVal_2_0_4:any = this.parentView.context.isActive(this.context.$implicit.valueArc.data);
    this._GaugeArcComponent_2_3.check_isActive(currVal_2_0_4,throwOnChange,false);
    if (this._GaugeArcComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange)) { this.compView_2.markAsCheckOnce(); }
    const currVal_7:any = this.parentView.context.rotation;
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementAttribute(this._el_0,'transform',((currVal_7 == null)? (null as any): currVal_7.toString()));
      this._expr_7 = currVal_7;
    }
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
    this._GaugeArcComponent_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'select')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'activate')) {
      const pd_sub_1:any = ((<any>this.parentView.context.onActivate($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'deactivate')) {
      const pd_sub_2:any = ((<any>this.parentView.context.onDeactivate($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}
class View_GaugeComponent2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import17.GaugeAxisComponent>;
  _GaugeAxisComponent_0_3:import18.Wrapper_GaugeAxisComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_GaugeComponent2,renderType_GaugeComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'ngx-charts-gauge-axis',''),(null as any));
    this.compView_0 = new import18.View_GaugeAxisComponent0(this.viewUtils,this,0,this._el_0);
    this._GaugeAxisComponent_0_3 = new import18.Wrapper_GaugeAxisComponent();
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_0.create(this._GaugeAxisComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.GaugeAxisComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._GaugeAxisComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.bigSegments;
    this._GaugeAxisComponent_0_3.check_bigSegments(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.smallSegments;
    this._GaugeAxisComponent_0_3.check_smallSegments(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.min;
    this._GaugeAxisComponent_0_3.check_min(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.max;
    this._GaugeAxisComponent_0_3.check_max(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.context.angleSpan;
    this._GaugeAxisComponent_0_3.check_angleSpan(currVal_0_0_4,throwOnChange,false);
    const currVal_0_0_5:any = this.parentView.context.startAngle;
    this._GaugeAxisComponent_0_3.check_startAngle(currVal_0_0_5,throwOnChange,false);
    const currVal_0_0_6:any = this.parentView.context.outerRadius;
    this._GaugeAxisComponent_0_3.check_radius(currVal_0_0_6,throwOnChange,false);
    const currVal_0_0_7:any = this.parentView.context.valueScale;
    this._GaugeAxisComponent_0_3.check_valueScale(currVal_0_0_7,throwOnChange,false);
    const currVal_0_0_8:any = this.parentView.context.axisTickFormatting;
    this._GaugeAxisComponent_0_3.check_tickFormatting(currVal_0_0_8,throwOnChange,false);
    if (this._GaugeAxisComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_GaugeComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_GaugeComponent,{});
export class View_GaugeComponent0 extends import2.AppView<import0.GaugeComponent> {
  _viewQuery_textEl_0:import19.QueryList<any>;
  _text_0:any;
  _el_1:any;
  /*private*/ _vc_1:import16.ViewContainer;
  compView_1:import2.AppView<import20.ChartComponent>;
  _TooltipService_1_5:import21.TooltipService;
  _ChartComponent_1_6:import22.Wrapper_ChartComponent;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import16.ViewContainer;
  _TemplateRef_5_5:any;
  _NgFor_5_6:import23.Wrapper_NgFor;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import16.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import24.Wrapper_NgIf;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _arr_31:any;
  /*private*/ _expr_32:any;
  /*private*/ _expr_33:any;
  /*private*/ _expr_34:any;
  /*private*/ _expr_35:any;
  /*private*/ _expr_36:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_GaugeComponent0,renderType_GaugeComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
    this._arr_31 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_32 = import1.UNINITIALIZED;
    this._expr_33 = import1.UNINITIALIZED;
    this._expr_34 = import1.UNINITIALIZED;
    this._expr_35 = import1.UNINITIALIZED;
    this._expr_36 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_textEl_0 = new import19.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'ngx-charts-chart',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_1 = new import16.ViewContainer(1,(null as any),this,this._el_1);
    this.compView_1 = new import22.View_ChartComponent0(this.viewUtils,this,1,this._el_1);
    this._TooltipService_1_5 = new import21.TooltipService(this.parentView.injectorGet(import25.InjectionService,this.parentIndex));
    this._ChartComponent_1_6 = new import22.Wrapper_ChartComponent(this._vc_1.vcRef,this._TooltipService_1_5);
    this._text_2 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'class','gauge chart'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_5 = new import16.ViewContainer(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import26.TemplateRef_(this,5,this._anchor_5);
    this._NgFor_5_6 = new import23.Wrapper_NgFor(this._vc_5.vcRef,this._TemplateRef_5_5,this.parentView.injectorGet(import27.IterableDiffers,this.parentIndex),this.ref);
    this._text_6 = this.renderer.createText(this._el_3,'\n\n        ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_7 = new import16.ViewContainer(7,3,this,this._anchor_7);
    this._TemplateRef_7_5 = new import26.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import24.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_3,'\n\n        ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_3,':svg:text',new import3.InlineArray2(2,'alignment-baseline','central'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'\n          ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_9,':svg:tspan',new import3.InlineArray4(4,'dy','0','x','0'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_9,'\n          ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_9,':svg:tspan',new import3.InlineArray4(4,'dy','1.2em','x','0'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'',(null as any));
    this._text_16 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._text_17 = this.renderer.createText(this._el_3,'\n\n      ',(null as any));
    this._text_18 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_1.create(this._ChartComponent_1_6.context);
    this._text_19 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray8(6,'legendLabelClick',(null as any),'legendLabelActivate',(null as any),'legendLabelDeactivate',(null as any)),this.eventHandler(this.handleEvent_1));
    this._ChartComponent_1_6.subscribe(this,this.eventHandler(this.handleEvent_1),true,true,true);
    this._viewQuery_textEl_0.reset([new import9.ElementRef(this._el_9)]);
    this.context.textEl = this._viewQuery_textEl_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._text_19
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import26.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import28.NgFor) && (5 === requestNodeIndex))) { return this._NgFor_5_6.context; }
    if (((token === import26.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import29.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import21.TooltipService) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._TooltipService_1_5; }
    if (((token === import20.ChartComponent) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._ChartComponent_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this._arr_31(this.context.width,this.context.height);
    this._ChartComponent_1_6.check_view(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this.context.legend;
    this._ChartComponent_1_6.check_showLegend(currVal_1_0_1,throwOnChange,false);
    const currVal_1_0_2:any = this.context.legendOptions;
    this._ChartComponent_1_6.check_legendOptions(currVal_1_0_2,throwOnChange,false);
    const currVal_1_0_3:any = this.context.activeEntries;
    this._ChartComponent_1_6.check_activeEntries(currVal_1_0_3,throwOnChange,false);
    if (this._ChartComponent_1_6.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    const currVal_5_0_0:any = this.context.arcs;
    this._NgFor_5_6.check_ngForOf(currVal_5_0_0,throwOnChange,false);
    this._NgFor_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    const currVal_7_0_0:any = this.context.showAxis;
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    const currVal_32:any = this.context.transform;
    if (import3.checkBinding(throwOnChange,this._expr_32,currVal_32)) {
      this.renderer.setElementAttribute(this._el_3,'transform',((currVal_32 == null)? (null as any): currVal_32.toString()));
      this._expr_32 = currVal_32;
    }
    const currVal_33:any = 'middle';
    if (import3.checkBinding(throwOnChange,this._expr_33,currVal_33)) {
      this.renderer.setElementStyle(this._el_9,'textAnchor',((this.viewUtils.sanitizer.sanitize(import30.SecurityContext.STYLE,currVal_33) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import30.SecurityContext.STYLE,currVal_33).toString()));
      this._expr_33 = currVal_33;
    }
    const currVal_34:any = this.context.textTransform;
    if (import3.checkBinding(throwOnChange,this._expr_34,currVal_34)) {
      this.renderer.setElementAttribute(this._el_9,'transform',((currVal_34 == null)? (null as any): currVal_34.toString()));
      this._expr_34 = currVal_34;
    }
    const currVal_35:any = import3.inlineInterpolate(1,'',this.context.displayValue,'');
    if (import3.checkBinding(throwOnChange,this._expr_35,currVal_35)) {
      this.renderer.setText(this._text_12,currVal_35);
      this._expr_35 = currVal_35;
    }
    const currVal_36:any = import3.inlineInterpolate(1,'',this.context.units,'');
    if (import3.checkBinding(throwOnChange,this._expr_36,currVal_36)) {
      this.renderer.setText(this._text_15,currVal_36);
      this._expr_36 = currVal_36;
    }
    this.compView_1.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this._vc_5.destroyNestedViews();
    this._vc_7.destroyNestedViews();
    this.compView_1.destroy();
    this._ChartComponent_1_6.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_18,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 5)) { return new View_GaugeComponent1(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    if ((nodeIndex == 7)) { return new View_GaugeComponent2(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    return (null as any);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'legendLabelClick')) {
      const pd_sub_0:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'legendLabelActivate')) {
      const pd_sub_1:any = ((<any>this.context.onActivate($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'legendLabelDeactivate')) {
      const pd_sub_2:any = ((<any>this.context.onDeactivate($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}