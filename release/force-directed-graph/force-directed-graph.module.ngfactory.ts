/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../src/force-directed-graph/force-directed-graph.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '../../../src/common/axes/axes.module';
import * as import4 from '../../../src/common/tooltip/tooltip.module';
import * as import5 from '../../../src/common/common.module';
import * as import6 from '@angular/common/src/localization';
import * as import7 from '../../../src/utils/injection.service';
import * as import8 from '../../../src/common/tooltip/tooltip.service';
import * as import9 from '@angular/core/src/di/injector';
import * as import10 from '../common/tooltip/tooltip.component.ngfactory';
import * as import11 from '@angular/core/src/i18n/tokens';
import * as import12 from '@angular/core/src/application_ref';
class ForceDirectedGraphModuleInjector extends import0.NgModuleInjector<import1.ForceDirectedGraphModule> {
  _CommonModule_0:import2.CommonModule;
  _AxesModule_1:import3.AxesModule;
  _TooltipModule_2:import4.TooltipModule;
  _CommonModule_3:import5.CommonModule;
  _ForceDirectedGraphModule_4:import1.ForceDirectedGraphModule;
  __NgLocalization_5:import6.NgLocaleLocalization;
  __InjectionService_6:import7.InjectionService;
  __TooltipService_7:import8.TooltipService;
  constructor(parent:import9.Injector) {
    super(parent,[import10.TooltipContentComponentNgFactory],([] as any[]));
  }
  get _NgLocalization_5():import6.NgLocaleLocalization {
    if ((this.__NgLocalization_5 == null)) { (this.__NgLocalization_5 = new import6.NgLocaleLocalization(this.parent.get(import11.LOCALE_ID))); }
    return this.__NgLocalization_5;
  }
  get _InjectionService_6():import7.InjectionService {
    if ((this.__InjectionService_6 == null)) { (this.__InjectionService_6 = new import7.InjectionService(this.parent.get(import12.ApplicationRef),this,this)); }
    return this.__InjectionService_6;
  }
  get _TooltipService_7():import8.TooltipService {
    if ((this.__TooltipService_7 == null)) { (this.__TooltipService_7 = new import8.TooltipService()); }
    return this.__TooltipService_7;
  }
  createInternal():import1.ForceDirectedGraphModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._AxesModule_1 = new import3.AxesModule();
    this._TooltipModule_2 = new import4.TooltipModule();
    this._CommonModule_3 = new import5.CommonModule();
    this._ForceDirectedGraphModule_4 = new import1.ForceDirectedGraphModule();
    return this._ForceDirectedGraphModule_4;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.AxesModule)) { return this._AxesModule_1; }
    if ((token === import4.TooltipModule)) { return this._TooltipModule_2; }
    if ((token === import5.CommonModule)) { return this._CommonModule_3; }
    if ((token === import1.ForceDirectedGraphModule)) { return this._ForceDirectedGraphModule_4; }
    if ((token === import6.NgLocalization)) { return this._NgLocalization_5; }
    if ((token === import7.InjectionService)) { return this._InjectionService_6; }
    if ((token === import8.TooltipService)) { return this._TooltipService_7; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ForceDirectedGraphModuleNgFactory:import0.NgModuleFactory<import1.ForceDirectedGraphModule> = new import0.NgModuleFactory(ForceDirectedGraphModuleInjector,import1.ForceDirectedGraphModule);