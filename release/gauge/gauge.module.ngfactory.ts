/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../src/gauge/gauge.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '../../../src/common/axes/axes.module';
import * as import4 from '../../../src/common/tooltip/tooltip.module';
import * as import5 from '../../../src/common/chart-common.module';
import * as import6 from '../../../src/pie-chart/pie-chart.module';
import * as import7 from '../../../src/bar-chart/bar-chart.module';
import * as import8 from '@angular/common/src/localization';
import * as import9 from '../../../src/services/injection.service';
import * as import10 from '../../../src/common/tooltip/tooltip.service';
import * as import11 from '@angular/common/src/location/path_location_strategy';
import * as import12 from '@angular/common/src/location/location';
import * as import13 from '@angular/core/src/di/injector';
import * as import14 from '../common/tooltip/tooltip.component.ngfactory';
import * as import15 from '@angular/core/src/i18n/tokens';
import * as import16 from '@angular/core/src/application_ref';
import * as import17 from '@angular/common/src/location/platform_location';
import * as import18 from '@angular/common/src/location/location_strategy';
class GaugeModuleInjector extends import0.NgModuleInjector<import1.GaugeModule> {
  _CommonModule_0:import2.CommonModule;
  _AxesModule_1:import3.AxesModule;
  _TooltipModule_2:import4.TooltipModule;
  _ChartCommonModule_3:import5.ChartCommonModule;
  _PieChartModule_4:import6.PieChartModule;
  _BarChartModule_5:import7.BarChartModule;
  _GaugeModule_6:import1.GaugeModule;
  __NgLocalization_7:import8.NgLocaleLocalization;
  __InjectionService_8:import9.InjectionService;
  __TooltipService_9:import10.TooltipService;
  __LocationStrategy_10:import11.PathLocationStrategy;
  __Location_11:import12.Location;
  constructor(parent:import13.Injector) {
    super(parent,[import14.TooltipContentComponentNgFactory],([] as any[]));
  }
  get _NgLocalization_7():import8.NgLocaleLocalization {
    if ((this.__NgLocalization_7 == null)) { (this.__NgLocalization_7 = new import8.NgLocaleLocalization(this.parent.get(import15.LOCALE_ID))); }
    return this.__NgLocalization_7;
  }
  get _InjectionService_8():import9.InjectionService {
    if ((this.__InjectionService_8 == null)) { (this.__InjectionService_8 = new import9.InjectionService(this.parent.get(import16.ApplicationRef),this,this)); }
    return this.__InjectionService_8;
  }
  get _TooltipService_9():import10.TooltipService {
    if ((this.__TooltipService_9 == null)) { (this.__TooltipService_9 = new import10.TooltipService(this._InjectionService_8)); }
    return this.__TooltipService_9;
  }
  get _LocationStrategy_10():import11.PathLocationStrategy {
    if ((this.__LocationStrategy_10 == null)) { (this.__LocationStrategy_10 = new import11.PathLocationStrategy(this.parent.get(import17.PlatformLocation),this.parent.get(import18.APP_BASE_HREF,(null as any)))); }
    return this.__LocationStrategy_10;
  }
  get _Location_11():import12.Location {
    if ((this.__Location_11 == null)) { (this.__Location_11 = new import12.Location(this._LocationStrategy_10)); }
    return this.__Location_11;
  }
  createInternal():import1.GaugeModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._AxesModule_1 = new import3.AxesModule();
    this._TooltipModule_2 = new import4.TooltipModule();
    this._ChartCommonModule_3 = new import5.ChartCommonModule();
    this._PieChartModule_4 = new import6.PieChartModule();
    this._BarChartModule_5 = new import7.BarChartModule();
    this._GaugeModule_6 = new import1.GaugeModule();
    return this._GaugeModule_6;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.AxesModule)) { return this._AxesModule_1; }
    if ((token === import4.TooltipModule)) { return this._TooltipModule_2; }
    if ((token === import5.ChartCommonModule)) { return this._ChartCommonModule_3; }
    if ((token === import6.PieChartModule)) { return this._PieChartModule_4; }
    if ((token === import7.BarChartModule)) { return this._BarChartModule_5; }
    if ((token === import1.GaugeModule)) { return this._GaugeModule_6; }
    if ((token === import8.NgLocalization)) { return this._NgLocalization_7; }
    if ((token === import9.InjectionService)) { return this._InjectionService_8; }
    if ((token === import10.TooltipService)) { return this._TooltipService_9; }
    if ((token === import18.LocationStrategy)) { return this._LocationStrategy_10; }
    if ((token === import12.Location)) { return this._Location_11; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const GaugeModuleNgFactory:import0.NgModuleFactory<import1.GaugeModule> = new import0.NgModuleFactory(GaugeModuleInjector,import1.GaugeModule);