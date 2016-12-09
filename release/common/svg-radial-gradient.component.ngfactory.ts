/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/common/svg-radial-gradient.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/security';
export class Wrapper_SvgRadialGradientComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SvgRadialGradientComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor() {
    this._changed = false;
    this._changes = {};
    this.context = new import0.SvgRadialGradientComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_color(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.color = currValue;
      this._changes['color'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_name(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.name = currValue;
      this._changes['name'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_startOpacity(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.startOpacity = currValue;
      this._changes['startOpacity'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_endOpacity(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.endOpacity = currValue;
      this._changes['endOpacity'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_cx(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.cx = currValue;
      this._changes['cx'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_cy(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.cy = currValue;
      this._changes['cy'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
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
var renderType_SvgRadialGradientComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_SvgRadialGradientComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.SvgRadialGradientComponent>;
  _SvgRadialGradientComponent_0_3:Wrapper_SvgRadialGradientComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SvgRadialGradientComponent_Host0,renderType_SvgRadialGradientComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'svgRadialGradient',''),rootSelector,(null as any));
    this.compView_0 = new View_SvgRadialGradientComponent0(this.viewUtils,this,0,this._el_0);
    this._SvgRadialGradientComponent_0_3 = new Wrapper_SvgRadialGradientComponent();
    this.compView_0.create(this._SvgRadialGradientComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._SvgRadialGradientComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SvgRadialGradientComponent) && (0 === requestNodeIndex))) { return this._SvgRadialGradientComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._SvgRadialGradientComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const SvgRadialGradientComponentNgFactory:import7.ComponentFactory<import0.SvgRadialGradientComponent> = new import7.ComponentFactory<import0.SvgRadialGradientComponent>('g[svgRadialGradient]',View_SvgRadialGradientComponent_Host0,import0.SvgRadialGradientComponent);
const styles_SvgRadialGradientComponent:any[] = ([] as any[]);
var renderType_SvgRadialGradientComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_SvgRadialGradientComponent,{});
export class View_SvgRadialGradientComponent0 extends import2.AppView<import0.SvgRadialGradientComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SvgRadialGradientComponent0,renderType_SvgRadialGradientComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,':svg:radialGradient',new import3.InlineArray2(2,'gradientUnits','userSpaceOnUse'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,':svg:stop',new import3.InlineArray2(2,'offset','0%'),(null as any));
    this._text_4 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_1,':svg:stop',new import3.InlineArray2(2,'offset','100%'),(null as any));
    this._text_6 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_8:any = this.context.name;
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementProperty(this._el_1,'id',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.context.cx;
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementAttribute(this._el_1,'cx',((currVal_9 == null)? (null as any): currVal_9.toString()));
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this.context.cy;
    if (import3.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementAttribute(this._el_1,'cy',((currVal_10 == null)? (null as any): currVal_10.toString()));
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this.context.r;
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementAttribute(this._el_1,'r',((currVal_11 == null)? (null as any): currVal_11.toString()));
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = this.context.color;
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementStyle(this._el_3,'stop-color',((this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_12) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_12).toString()));
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this.context.startOpacity;
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementStyle(this._el_3,'stop-opacity',((this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_13) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_13).toString()));
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this.context.color;
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementStyle(this._el_5,'stop-color',((this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_14) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_14).toString()));
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this.context.endOpacity;
    if (import3.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementStyle(this._el_5,'stop-opacity',((this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_15) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_15).toString()));
      this._expr_15 = currVal_15;
    }
  }
}