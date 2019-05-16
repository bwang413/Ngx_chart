const chartGroups = [
  {
    name: 'Bar Charts',
    charts: [
      {
        name: 'Vertical Bar Chart',
        selector: 'bar-vertical',
        inputFormat: 'singleSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'barPadding',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'showGridLines',
          'roundDomains',
          'tooltipDisabled',
          'roundEdges',
          'yScaleMax',
          'showDataLabel',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ]
      },
      {
        name: 'Horizontal Bar Chart',
        selector: 'bar-horizontal',
        inputFormat: 'singleSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'barPadding',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'showGridLines',
          'roundDomains',
          'tooltipDisabled',
          'roundEdges',
          'xScaleMax',
          'showDataLabel',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ],
        defaults: {
          yAxisLabel: 'Country',
          xAxisLabel: 'GDP Per Capita'
        }
      },
      {
        name: 'Grouped Vertical Bar Chart',
        selector: 'bar-vertical-2d',
        inputFormat: 'multiSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'barPadding',
          'groupPadding',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'showGridLines',
          'roundDomains',
          'tooltipDisabled',
          'roundEdges',
          'yScaleMax',
          'showDataLabel',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ]
      },
      {
        name: 'Grouped Horizontal Bar Chart',
        selector: 'bar-horizontal-2d',
        inputFormat: 'multiSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'barPadding',
          'groupPadding',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'showGridLines',
          'roundDomains',
          'tooltipDisabled',
          'roundEdges',
          'xScaleMax',
          'showDataLabel',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ],
        defaults: {
          yAxisLabel: 'Country',
          xAxisLabel: 'GDP Per Capita'
        }
      },
      {
        name: 'Stacked Vertical Bar Chart',
        selector: 'bar-vertical-stacked',
        inputFormat: 'multiSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'barPadding',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'showGridLines',
          'roundDomains',
          'tooltipDisabled',
          'yScaleMax',
          'showDataLabel',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ]
      },
      {
        name: 'Stacked Horizontal Bar Chart',
        selector: 'bar-horizontal-stacked',
        inputFormat: 'multiSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'barPadding',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'showGridLines',
          'roundDomains',
          'tooltipDisabled',
          'xScaleMax',
          'showDataLabel',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ],
        defaults: {
          yAxisLabel: 'Country',
          xAxisLabel: 'GDP Per Capita'
        }
      },
      {
        name: 'Normalized Vertical Bar Chart',
        selector: 'bar-vertical-normalized',
        inputFormat: 'multiSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'barPadding',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'showGridLines',
          'roundDomains',
          'tooltipDisabled',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ],
        defaults: {
          yAxisLabel: 'Normalized GDP Per Capita',
          xAxisLabel: 'Country'
        }
      },
      {
        name: 'Normalized Horizontal Bar Chart',
        selector: 'bar-horizontal-normalized',
        inputFormat: 'multiSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'barPadding',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'showGridLines',
          'roundDomains',
          'tooltipDisabled',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ],
        defaults: {
          yAxisLabel: 'Country',
          xAxisLabel: 'Normalized GDP Per Capita'
        }
      }
    ]
  },
  {
    name: 'Pie Charts',
    charts: [
      {
        name: 'Pie Chart',
        selector: 'pie-chart',
        inputFormat: 'singleSeries',
        options: [
          'animations',
          'colorScheme',
          'gradient',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'doughnut',
          'arcWidth',
          'explodeSlices',
          'showLabels',
          'tooltipDisabled'
        ]
      },
      {
        name: 'Advanced Pie Chart',
        selector: 'advanced-pie-chart',
        inputFormat: 'singleSeries',
        options: ['animations', 'colorScheme', 'gradient', 'tooltipDisabled']
      },
      {
        name: 'Pie Grid',
        selector: 'pie-grid',
        inputFormat: 'singleSeries',
        options: ['animations', 'colorScheme', 'tooltipDisabled']
      }
    ]
  },
  {
    name: 'Line/Area Charts',
    charts: [
      {
        name: 'Line Chart',
        selector: 'line-chart',
        inputFormat: 'multiSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'autoScale',
          'timeline',
          'showGridLines',
          'curve',
          'rangeFillOpacity',
          'roundDomains',
          'tooltipDisabled',
          'showRefLines',
          'referenceLines',
          'showRefLabels',
          'xScaleMin',
          'xScaleMax',
          'yScaleMin',
          'yScaleMax',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ],
        defaults: {
          yAxisLabel: 'GDP Per Capita',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
      {
        name: 'Polar Chart',
        selector: 'polar-chart',
        inputFormat: 'multiSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'autoScale',
          'showGridLines',
          'curveClosed',
          'roundDomains',
          'tooltipDisabled',
          'trimYAxisTicks',
          'maxYAxisTickLength'
        ],
        defaults: {
          yAxisLabel: 'GDP Per Capita',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
      {
        name: 'Area Chart',
        selector: 'area-chart',
        inputFormat: 'multiSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'autoScale',
          'timeline',
          'showGridLines',
          'curve',
          'roundDomains',
          'tooltipDisabled',
          'xScaleMin',
          'xScaleMax',
          'yScaleMin',
          'yScaleMax',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ],
        defaults: {
          yAxisLabel: 'GDP Per Capita',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
      {
        name: 'Stacked Area Chart',
        selector: 'area-chart-stacked',
        inputFormat: 'multiSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'autoScale',
          'timeline',
          'showGridLines',
          'curve',
          'roundDomains',
          'tooltipDisabled',
          'xScaleMin',
          'xScaleMax',
          'yScaleMin',
          'yScaleMax',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ],
        defaults: {
          yAxisLabel: 'GDP Per Capita',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
      {
        name: 'Normalized Area Chart',
        selector: 'area-chart-normalized',
        inputFormat: 'multiSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'autoScale',
          'timeline',
          'showGridLines',
          'curve',
          'roundDomains',
          'tooltipDisabled',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ],
        defaults: {
          yAxisLabel: 'Normalized GDP Per Capita',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      }
    ]
  },
  {
    name: 'Other Charts',
    charts: [
      {
        name: 'Bubble Chart',
        selector: 'bubble-chart',
        inputFormat: 'bubble',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'showGridLines',
          'roundDomains',
          'autoScale',
          'minRadius',
          'maxRadius',
          'tooltipDisabled',
          'xScaleMin',
          'xScaleMax',
          'yScaleMin',
          'yScaleMax',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ],
        defaults: {
          xAxisLabel: 'Census Date',
          yAxisLabel: 'Life expectancy [years]'
        }
      },
      {
        name: 'Force Directed Graph (deprecated)',
        selector: 'force-directed-graph',
        inputFormat: 'graph',
        options: ['animations', 'colorScheme', 'showLegend', 'legendTitle', 'legendPosition', 'tooltipDisabled']
      },
      {
        name: 'Heat Map',
        selector: 'heat-map',
        inputFormat: 'multiSeries',
        options: [
          'animations',
          'colorScheme',
          'showXAxis',
          'showYAxis',
          'gradient',
          'showLegend',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'innerPadding',
          'tooltipDisabled',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'rotateXAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength',
          'min',
          'max'
        ],
        defaults: {
          yAxisLabel: 'Census Date',
          cAxisLabel: 'Country'
        }
      },
      {
        name: 'Tree Map',
        selector: 'tree-map',
        inputFormat: 'singleSeries',
        options: ['animations', 'colorScheme', 'tooltipDisabled', 'gradient']
      },
      {
        name: 'Number Cards',
        selector: 'number-card',
        inputFormat: 'singleSeries',
        options: ['animations', 'colorScheme']
      },
      {
        name: 'Gauge',
        selector: 'gauge',
        inputFormat: 'singleSeries',
        options: [
          'showLegend',
          'legendTitle',
          'legendPosition',
          'colorScheme',
          'min',
          'max',
          'largeSegments',
          'smallSegments',
          'units',
          'angleSpan',
          'startAngle',
          'showAxis',
          'margin',
          'tooltipDisabled',
          'animations'
        ]
      },
      {
        name: 'Linear Gauge',
        selector: 'linear-gauge',
        inputFormat: 'single',
        options: ['animations', 'colorScheme', 'value', 'previousValue', 'min', 'max', 'units']
      }
    ]
  },
  {
    name: 'Demos',
    charts: [
      {
        name: 'Combo Chart',
        selector: 'combo-chart',
        inputFormat: 'comboChart',
        options: [
          'animations',
          'showXAxis',
          'showYAxis',
          'gradient',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'showGridLines',
          'roundDomains',
          'tooltipDisabled'
        ]
      },
      {
        name: 'Heat Map - Calendar',
        selector: 'calendar',
        inputFormat: 'calendarData',
        options: [
          'animations',
          'colorScheme',
          'showXAxis',
          'showYAxis',
          'gradient',
          'showLegend',
          'innerPadding',
          'tooltipDisabled',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ],
        defaults: {
          width: 1100,
          height: 200
        }
      },
      {
        name: 'Number Cards - Status',
        selector: 'status-demo',
        inputFormat: 'statusData',
        options: ['animations', 'colorScheme']
      },
      {
        name: 'TreeMap - Interactive',
        selector: 'tree-map-demo',
        inputFormat: 'treemap',
        options: ['animations', 'colorScheme']
      },
      {
        name: 'Equation Plots',
        selector: 'plot-demo',
        inputFormat: 'statusData',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'autoScale',
          'showGridLines',
          'gradient',
          'roundDomains',
          'tooltipDisabled',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ]
      },
      {
        name: 'Tooltip Templates',
        selector: 'tooltip-templates',
        inputFormat: 'singleSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'barPadding',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'showGridLines',
          'roundDomains',
          'tooltipDisabled'
        ]
      },
      {
        name: 'Sparklines',
        selector: 'sparkline',
        inputFormat: 'multiSeries',
        options: ['animations', 'curve']
      },
      {
        name: 'Line Chart with Reference Lines',
        selector: 'line-reference-lines',
        inputFormat: 'multiSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'autoScale',
          'timeline',
          'showGridLines',
          'curve',
          'rangeFillOpacity',
          'roundDomains',
          'tooltipDisabled',
          'showRefLines',
          'referenceLines',
          'showRefLabels',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ],
        defaults: {
          yAxisLabel: 'GDP Per Capita',
          xAxisLabel: 'Year',
          linearScale: false
        }
      },
      {
        name: 'Timeline Filter Bar Chart',
        selector: 'timeline-filter-bar-chart-demo',
        inputFormat: 'singleSeries',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'showGridLines',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel'
        ]
      },
      {
        name: 'Stacked Vertical Bar Chart Negative',
        selector: 'bar-vertical-stacked-negative',
        inputFormat: 'multiSeriesNegative',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'barPadding',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'showGridLines',
          'roundDomains',
          'tooltipDisabled',
          'yScaleMax',
          'showDataLabel',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ]
      },
      {
        name: 'Stacked Horizontal Bar Chart Negative',
        selector: 'bar-horizontal-stacked-negative',
        inputFormat: 'multiSeriesNegative',
        options: [
          'animations',
          'colorScheme',
          'schemeType',
          'showXAxis',
          'showYAxis',
          'gradient',
          'barPadding',
          'showLegend',
          'legendTitle',
          'legendPosition',
          'showXAxisLabel',
          'xAxisLabel',
          'showYAxisLabel',
          'yAxisLabel',
          'showGridLines',
          'roundDomains',
          'tooltipDisabled',
          'yScaleMax',
          'showDataLabel',
          'trimXAxisTicks',
          'trimYAxisTicks',
          'maxXAxisTickLength',
          'maxYAxisTickLength'
        ]
      }
    ]
  }
];

export default chartGroups;
