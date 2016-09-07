let chartGroups = [
  {
    name: "Bar Charts",
    charts: [
      {
        name: "Vertical Bar Chart",
        selector: 'bar-vertical',
        inputFormat: 'singleSeries',
        options: ['colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel']
      },
      {
        name: "Horizontal Bar Chart",
        selector: 'bar-horizontal',
        inputFormat: 'singleSeries',
        options: ['colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel']
      },
      {
        name: "Grouped Vertical Bar Chart",
        selector: 'bar-vertical-2d',
        inputFormat: 'multiSeries',
        options: ['colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel']
      },
      {
        name: "Grouped Horizontal Bar Chart",
        selector: 'bar-horizontal-2d',
        inputFormat: 'multiSeries',
        options: ['colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel']
      },
      {
        name: "Stacked Vertical Bar Chart",
        selector: 'bar-vertical-stacked',
        inputFormat: 'multiSeries',
        options: ['colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel']
      },
      {
        name: "Stacked Horizontal Bar Chart",
        selector: 'bar-horizontal-stacked',
        inputFormat: 'multiSeries',
        options: ['colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel']
      },
      {
        name: "Normalized Vertical Bar Chart",
        selector: 'bar-vertical-normalized',
        inputFormat: 'multiSeries',
        options: ['colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel']
      },
      {
        name: "Normalized Horizontal Bar Chart",
        selector: 'bar-horizontal-normalized',
        inputFormat: 'multiSeries',
        options: ['colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel']
      }
    ]
  },
  {
    name: "Pie Charts",
    charts: [
      {
        name: "Pie Chart",
        selector: 'pie-chart',
        inputFormat: 'singleSeries',
        options: ['colorScheme', 'gradient', 'showLegend', 'doughnut', 'explodeSlices', 'showLabels']
      },
      {
        name: "Advanced Pie Chart",
        selector: 'advanced-pie-chart',
        inputFormat: 'singleSeries',
        options: ['colorScheme', 'gradient', 'showLegend', 'doughnut', 'showLabels']
      },
      {
        name: "Pie Grid",
        selector: 'pie-grid',
        inputFormat: 'singleSeries',
        options: ['colorScheme']
      }
    ]
  },
  {
    name: "Line/Area Charts",
    charts: [
      {
        name: "Line Chart",
        selector: 'line-chart',
        inputFormat: 'multiSeries',
        options: ['colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel', 'autoScale', 'timeline']
      },
      {
        name: "Area Chart",
        selector: 'area-chart',
        inputFormat: 'multiSeries',
        options: ['colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel', 'autoScale', 'timeline']
      },
      {
        name: "Stacked Area Chart",
        selector: 'area-chart-stacked',
        inputFormat: 'multiSeries',
        options: ['colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel', 'autoScale', 'timeline']
      },
      {
        name: "Normalized Area Chart",
        selector: 'area-chart-normalized',
        inputFormat: 'multiSeries',
        options: ['colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel', 'autoScale', 'timeline']
      },
    ]
  },
  {
    name: "Other Charts",
    charts: [
      {
        name: "Heat Map",
        selector: 'heat-map',
        inputFormat: 'multiSeries',
        options: ['colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel']
      },
      {
        name: "Number Cards",
        selector: 'number-card',
        inputFormat: 'singleSeries',
        options: ['colorScheme']
      }
    ]
  }
];

export default chartGroups;
