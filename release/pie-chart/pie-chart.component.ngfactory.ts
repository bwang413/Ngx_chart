/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/pie-chart/pie-chart.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/zone/ng_zone';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../../src/common/charts/chart.component';
import * as import12 from '../../../src/utils/injection.service';
import * as import13 from '../common/charts/chart.component.ngfactory';
import * as import14 from '../../../src/pie-chart/pie-series.component';
import * as import15 from './pie-series.component.ngfactory';
import * as import16 from '@angular/core/src/application_ref';
import * as import17 from '@angular/core/src/linker/component_factory_resolver';
export class Wrapper_PieChartComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PieChartComponent;
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
  subscription0:any;
  subscription1:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.PieChartComponent(p0,p1,p2);
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
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
  }
  check_view(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.view = currValue;
      this._changes['view'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_results(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.results = currValue;
      this._changes['results'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_margin(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.margin = currValue;
      this._changes['margin'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_scheme(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.scheme = currValue;
      this._changes['scheme'] = new import1.SimpleChange(this._expr_3,currValue);
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
  check_labels(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.labels = currValue;
      this._changes['labels'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_legend(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.legend = currValue;
      this._changes['legend'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_explodeSlices(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.explodeSlices = currValue;
      this._changes['explodeSlices'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  check_doughnut(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.doughnut = currValue;
      this._changes['doughnut'] = new import1.SimpleChange(this._expr_8,currValue);
      this._expr_8 = currValue;
    }
  }
  check_gradient(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.gradient = currValue;
      this._changes['gradient'] = new import1.SimpleChange(this._expr_9,currValue);
      this._expr_9 = currValue;
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
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.clickHandler.subscribe(_eventHandler.bind(view,'clickHandler'))); }
    if (emit1) { (this.subscription1 = this.context.legendLabelClick.subscribe(_eventHandler.bind(view,'legendLabelClick'))); }
  }
}
var renderType_PieChartComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_PieChartComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PieChartComponent>;
  _PieChartComponent_0_3:Wrapper_PieChartComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieChartComponent_Host0,renderType_PieChartComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'pie-chart',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PieChartComponent0(this.viewUtils,this,0,this._el_0);
    this._PieChartComponent_0_3 = new Wrapper_PieChartComponent(new import8.ElementRef(this._el_0),this.compView_0.ref,this.injectorGet(import9.NgZone,this.parentIndex));
    this.compView_0.create(this._PieChartComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._PieChartComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PieChartComponent) && (0 === requestNodeIndex))) { return this._PieChartComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._PieChartComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._PieChartComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._PieChartComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PieChartComponentNgFactory:import7.ComponentFactory<import0.PieChartComponent> = new import7.ComponentFactory<import0.PieChartComponent>('pie-chart',View_PieChartComponent_Host0,import0.PieChartComponent);
const styles_PieChartComponent:any[] = ([] as any[]);
var renderType_PieChartComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_PieChartComponent,{});
export class View_PieChartComponent0 extends import2.AppView<import0.PieChartComponent> {
  _text_0:any;
  _el_1:any;
  /*private*/ _vc_1:import10.ViewContainer;
  compView_1:import2.AppView<import11.ChartComponent>;
  _InjectionService_1_5:import12.InjectionService;
  _ChartComponent_1_6:import13.Wrapper_ChartComponent;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  compView_5:import2.AppView<import14.PieSeriesComponent>;
  _PieSeriesComponent_5_3:import15.Wrapper_PieSeriesComponent;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _arr_15:any;
  /*private*/ _expr_16:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieChartComponent0,renderType_PieChartComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._arr_15 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_16 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'chart',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_1 = new import10.ViewContainer(1,(null as any),this,this._el_1);
    this.compView_1 = new import13.View_ChartComponent0(this.viewUtils,this,1,this._el_1);
    this._InjectionService_1_5 = new import12.InjectionService(this.parentView.injectorGet(import16.ApplicationRef,this.parentIndex),this.parentView.injectorGet(import17.ComponentFactoryResolver,this.parentIndex),this.injector(1));
    this._ChartComponent_1_6 = new import13.Wrapper_ChartComponent(this._vc_1.vcRef,this._InjectionService_1_5);
    this._text_2 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'class','pie-chart chart'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,':svg:g',new import3.InlineArray2(2,'pieSeries',''),(null as any));
    this.compView_5 = new import15.View_PieSeriesComponent0(this.viewUtils,this,5,this._el_5);
    this._PieSeriesComponent_5_3 = new import15.Wrapper_PieSeriesComponent();
    this.compView_5.create(this._PieSeriesComponent_5_3.context);
    this._text_6 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_1.create(this._ChartComponent_1_6.context);
    this._text_8 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray2(2,'legendLabelClick',(null as any)),this.eventHandler(this.handleEvent_1));
    this._ChartComponent_1_6.subscribe(this,this.eventHandler(this.handleEvent_1),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'clickHandler',(null as any)),this.eventHandler(this.handleEvent_5));
    this._PieSeriesComponent_5_3.subscribe(this,this.eventHandler(this.handleEvent_5),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.PieSeriesComponent) && (5 === requestNodeIndex))) { return this._PieSeriesComponent_5_3.context; }
    if (((token === import12.InjectionService) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._InjectionService_1_5; }
    if (((token === import11.ChartComponent) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._ChartComponent_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this._arr_15(this.context.width,this.context.height);
    this._ChartComponent_1_6.check_view(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this.context.legend;
    this._ChartComponent_1_6.check_legend(currVal_1_0_1,throwOnChange,false);
    const currVal_1_0_2:any = this.context.domain;
    this._ChartComponent_1_6.check_legendData(currVal_1_0_2,throwOnChange,false);
    const currVal_1_0_3:any = this.context.colors;
    this._ChartComponent_1_6.check_colors(currVal_1_0_3,throwOnChange,false);
    if (this._ChartComponent_1_6.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    const currVal_5_0_0:any = this.context.colors;
    this._PieSeriesComponent_5_3.check_colors(currVal_5_0_0,throwOnChange,false);
    const currVal_5_0_1:any = this.context.data;
    this._PieSeriesComponent_5_3.check_series(currVal_5_0_1,throwOnChange,false);
    const currVal_5_0_2:any = this.context.innerRadius;
    this._PieSeriesComponent_5_3.check_innerRadius(currVal_5_0_2,throwOnChange,false);
    const currVal_5_0_3:any = this.context.outerRadius;
    this._PieSeriesComponent_5_3.check_outerRadius(currVal_5_0_3,throwOnChange,false);
    const currVal_5_0_4:any = this.context.explodeSlices;
    this._PieSeriesComponent_5_3.check_explodeSlices(currVal_5_0_4,throwOnChange,false);
    const currVal_5_0_5:any = this.context.labels;
    this._PieSeriesComponent_5_3.check_showLabels(currVal_5_0_5,throwOnChange,false);
    const currVal_5_0_6:any = this.context.gradient;
    this._PieSeriesComponent_5_3.check_gradient(currVal_5_0_6,throwOnChange,false);
    if (this._PieSeriesComponent_5_3.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    const currVal_16:any = this.context.translation;
    if (import3.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementAttribute(this._el_3,'transform',((currVal_16 == null)? (null as any): currVal_16.toString()));
      this._expr_16 = currVal_16;
    }
    this.compView_1.detectChanges(throwOnChange);
    this.compView_5.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_5.destroy();
    this._PieSeriesComponent_5_3.ngOnDestroy();
    this._ChartComponent_1_6.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_7,ctx);
    }
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'legendLabelClick')) {
      const pd_sub_0:any = ((<any>this.context.legendLabelClick.emit($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'clickHandler')) {
      const pd_sub_0:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}