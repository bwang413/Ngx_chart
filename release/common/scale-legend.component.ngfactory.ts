/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/common/scale-legend.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import9 from '@angular/core/src/security';
export class Wrapper_ScaleLegendComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ScaleLegendComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(p0:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.ScaleLegendComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_valueRange(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.valueRange = currValue;
      this._changes['valueRange'] = new import1.SimpleChange(this._expr_0,currValue);
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
  check_height(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.height = currValue;
      this._changes['height'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_width(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.width = currValue;
      this._changes['width'] = new import1.SimpleChange(this._expr_3,currValue);
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
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_ScaleLegendComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_ScaleLegendComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.ScaleLegendComponent>;
  _ScaleLegendComponent_0_3:Wrapper_ScaleLegendComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ScaleLegendComponent_Host0,renderType_ScaleLegendComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'scale-legend',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_ScaleLegendComponent0(this.viewUtils,this,0,this._el_0);
    this._ScaleLegendComponent_0_3 = new Wrapper_ScaleLegendComponent(this.injectorGet(import8.DomSanitizer,this.parentIndex));
    this.compView_0.create(this._ScaleLegendComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._ScaleLegendComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ScaleLegendComponent) && (0 === requestNodeIndex))) { return this._ScaleLegendComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._ScaleLegendComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ScaleLegendComponentNgFactory:import7.ComponentFactory<import0.ScaleLegendComponent> = new import7.ComponentFactory<import0.ScaleLegendComponent>('scale-legend',View_ScaleLegendComponent_Host0,import0.ScaleLegendComponent);
const styles_ScaleLegendComponent:any[] = ([] as any[]);
var renderType_ScaleLegendComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_ScaleLegendComponent,{});
export class View_ScaleLegendComponent0 extends import2.AppView<import0.ScaleLegendComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  /*private*/ _expr_22:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  /*private*/ _expr_25:any;
  /*private*/ _expr_26:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ScaleLegendComponent0,renderType_ScaleLegendComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._expr_22 = import1.UNINITIALIZED;
    this._expr_23 = import1.UNINITIALIZED;
    this._expr_24 = import1.UNINITIALIZED;
    this._expr_25 = import1.UNINITIALIZED;
    this._expr_26 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','scale-legend'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','scale-legend-label'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n          ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'',(null as any));
    this._text_9 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._text_10 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','scale-legend-wrap'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'\n        ',(null as any));
    this._text_13 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','scale-legend-label'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n          ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_14,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'',(null as any));
    this._text_18 = this.renderer.createText(this._el_14,'\n        ',(null as any));
    this._text_19 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_20 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_21 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._text_19,
      this._text_20,
      this._text_21
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_22:any = this.context.width;
    if (import3.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this.renderer.setElementStyle(this._el_1,'width',((this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE,currVal_22) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE,currVal_22).toString() + 'px')));
      this._expr_22 = currVal_22;
    }
    const currVal_23:any = (this.context.height - 70);
    if (import3.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setElementStyle(this._el_3,'height',((this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE,currVal_23) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE,currVal_23).toString() + 'px')));
      this._expr_23 = currVal_23;
    }
    const currVal_24:any = import3.inlineInterpolate(1,'',this.context.valueRange[0].toLocaleString(),'');
    if (import3.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setText(this._text_8,currVal_24);
      this._expr_24 = currVal_24;
    }
    const currVal_25:any = this.context.gradient;
    if (import3.checkBinding(throwOnChange,this._expr_25,currVal_25)) {
      this.renderer.setElementStyle(this._el_11,'background',((this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE,currVal_25) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE,currVal_25).toString()));
      this._expr_25 = currVal_25;
    }
    const currVal_26:any = import3.inlineInterpolate(1,'',this.context.valueRange[1].toLocaleString(),'');
    if (import3.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this.renderer.setText(this._text_17,currVal_26);
      this._expr_26 = currVal_26;
    }
  }
}