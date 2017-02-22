/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../build/ngx-charts.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '../../build/common/axes/axes.module';
import * as import4 from '../../build/common/tooltip/tooltip.module';
import * as import5 from '../../build/common/chart-common.module';
import * as import6 from '../../build/area-chart/area-chart.module';
import * as import7 from '../../build/bar-chart/bar-chart.module';
import * as import8 from '../../build/bubble-chart/bubble-chart.module';
import * as import9 from '../../build/force-directed-graph/force-directed-graph.module';
import * as import10 from '../../build/heat-map/heat-map.module';
import * as import11 from '../../build/line-chart/line-chart.module';
import * as import12 from '../../build/number-card/number-card.module';
import * as import13 from '../../build/pie-chart/pie-chart.module';
import * as import14 from '../../build/tree-map/tree-map.module';
import * as import15 from '../../build/gauge/gauge.module';
import * as import16 from '@angular/common/src/localization';
import * as import17 from '../../build/common/tooltip/injection.service';
import * as import18 from '../../build/common/tooltip/tooltip.service';
import * as import19 from '@angular/common/src/location/path_location_strategy';
import * as import20 from '@angular/common/src/location/location';
import * as import21 from '@angular/core/src/di/injector';
import * as import22 from './common/tooltip/tooltip.component.ngfactory';
import * as import23 from '@angular/core/src/i18n/tokens';
import * as import24 from '@angular/core/src/application_ref';
import * as import25 from '@angular/common/src/location/platform_location';
import * as import26 from '@angular/common/src/location/location_strategy';
class NgxChartsModuleInjector extends import0.NgModuleInjector<import1.NgxChartsModule> {
  _CommonModule_0:import2.CommonModule;
  _AxesModule_1:import3.AxesModule;
  _TooltipModule_2:import4.TooltipModule;
  _ChartCommonModule_3:import5.ChartCommonModule;
  _AreaChartModule_4:import6.AreaChartModule;
  _BarChartModule_5:import7.BarChartModule;
  _BubbleChartModule_6:import8.BubbleChartModule;
  _ForceDirectedGraphModule_7:import9.ForceDirectedGraphModule;
  _HeatMapModule_8:import10.HeatMapModule;
  _LineChartModule_9:import11.LineChartModule;
  _NumberCardModule_10:import12.NumberCardModule;
  _PieChartModule_11:import13.PieChartModule;
  _TreeMapModule_12:import14.TreeMapModule;
  _GaugeModule_13:import15.GaugeModule;
  _NgxChartsModule_14:import1.NgxChartsModule;
  __NgLocalization_15:import16.NgLocaleLocalization;
  __InjectionService_16:import17.InjectionService;
  __TooltipService_17:import18.TooltipService;
  __LocationStrategy_18:import19.PathLocationStrategy;
  __Location_19:import20.Location;
  constructor(parent:import21.Injector) {
    super(parent,[import22.TooltipContentComponentNgFactory],([] as any[]));
  }
  get _NgLocalization_15():import16.NgLocaleLocalization {
    if ((this.__NgLocalization_15 == null)) { (this.__NgLocalization_15 = new import16.NgLocaleLocalization(this.parent.get(import23.LOCALE_ID))); }
    return this.__NgLocalization_15;
  }
  get _InjectionService_16():import17.InjectionService {
    if ((this.__InjectionService_16 == null)) { (this.__InjectionService_16 = new import17.InjectionService(this.parent.get(import24.ApplicationRef),this,this)); }
    return this.__InjectionService_16;
  }
  get _TooltipService_17():import18.TooltipService {
    if ((this.__TooltipService_17 == null)) { (this.__TooltipService_17 = new import18.TooltipService(this._InjectionService_16)); }
    return this.__TooltipService_17;
  }
  get _LocationStrategy_18():import19.PathLocationStrategy {
    if ((this.__LocationStrategy_18 == null)) { (this.__LocationStrategy_18 = new import19.PathLocationStrategy(this.parent.get(import25.PlatformLocation),this.parent.get(import26.APP_BASE_HREF,(null as any)))); }
    return this.__LocationStrategy_18;
  }
  get _Location_19():import20.Location {
    if ((this.__Location_19 == null)) { (this.__Location_19 = new import20.Location(this._LocationStrategy_18)); }
    return this.__Location_19;
  }
  createInternal():import1.NgxChartsModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._AxesModule_1 = new import3.AxesModule();
    this._TooltipModule_2 = new import4.TooltipModule();
    this._ChartCommonModule_3 = new import5.ChartCommonModule();
    this._AreaChartModule_4 = new import6.AreaChartModule();
    this._BarChartModule_5 = new import7.BarChartModule();
    this._BubbleChartModule_6 = new import8.BubbleChartModule();
    this._ForceDirectedGraphModule_7 = new import9.ForceDirectedGraphModule();
    this._HeatMapModule_8 = new import10.HeatMapModule();
    this._LineChartModule_9 = new import11.LineChartModule();
    this._NumberCardModule_10 = new import12.NumberCardModule();
    this._PieChartModule_11 = new import13.PieChartModule();
    this._TreeMapModule_12 = new import14.TreeMapModule();
    this._GaugeModule_13 = new import15.GaugeModule();
    this._NgxChartsModule_14 = new import1.NgxChartsModule();
    return this._NgxChartsModule_14;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.AxesModule)) { return this._AxesModule_1; }
    if ((token === import4.TooltipModule)) { return this._TooltipModule_2; }
    if ((token === import5.ChartCommonModule)) { return this._ChartCommonModule_3; }
    if ((token === import6.AreaChartModule)) { return this._AreaChartModule_4; }
    if ((token === import7.BarChartModule)) { return this._BarChartModule_5; }
    if ((token === import8.BubbleChartModule)) { return this._BubbleChartModule_6; }
    if ((token === import9.ForceDirectedGraphModule)) { return this._ForceDirectedGraphModule_7; }
    if ((token === import10.HeatMapModule)) { return this._HeatMapModule_8; }
    if ((token === import11.LineChartModule)) { return this._LineChartModule_9; }
    if ((token === import12.NumberCardModule)) { return this._NumberCardModule_10; }
    if ((token === import13.PieChartModule)) { return this._PieChartModule_11; }
    if ((token === import14.TreeMapModule)) { return this._TreeMapModule_12; }
    if ((token === import15.GaugeModule)) { return this._GaugeModule_13; }
    if ((token === import1.NgxChartsModule)) { return this._NgxChartsModule_14; }
    if ((token === import16.NgLocalization)) { return this._NgLocalization_15; }
    if ((token === import17.InjectionService)) { return this._InjectionService_16; }
    if ((token === import18.TooltipService)) { return this._TooltipService_17; }
    if ((token === import26.LocationStrategy)) { return this._LocationStrategy_18; }
    if ((token === import20.Location)) { return this._Location_19; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const NgxChartsModuleNgFactory:import0.NgModuleFactory<import1.NgxChartsModule> = new import0.NgModuleFactory(NgxChartsModuleInjector,import1.NgxChartsModule);