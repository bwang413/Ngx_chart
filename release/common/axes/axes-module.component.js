"use strict";
var core_1 = require("@angular/core");
var axis_label_component_1 = require("./axis-label.component");
var x_axis_component_1 = require("./x-axis.component");
var x_axis_ticks_component_1 = require("./x-axis-ticks.component");
var y_axis_component_1 = require("./y-axis.component");
var y_axis_ticks_component_1 = require("./y-axis-ticks.component");
var platform_browser_1 = require("@angular/platform-browser");
var AxesModule = (function () {
    function AxesModule() {
    }
    AxesModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [axis_label_component_1.AxisLabel, x_axis_component_1.XAxis, x_axis_ticks_component_1.XAxisTicks, y_axis_component_1.YAxis, y_axis_ticks_component_1.YAxisTicks],
            exports: [axis_label_component_1.AxisLabel, x_axis_component_1.XAxis, x_axis_ticks_component_1.XAxisTicks, y_axis_component_1.YAxis, y_axis_ticks_component_1.YAxisTicks]
        }), 
        __metadata('design:paramtypes', [])
    ], AxesModule);
    return AxesModule;
}());
exports.AxesModule = AxesModule;
//# sourceMappingURL=axes-module.component.js.map