import { ChartType } from '../types/chart-type';
import { GoogleChartsConfig } from '../types/google-charts-config';

const ChartTypesToPackages = {
  [ChartType.CandlestickChart]: 'corechart',
  [ChartType.Gantt]: 'gantt',
  [ChartType.TreeMap]: 'treemap',
  [ChartType.Waterfall]: 'corechart',
  [ChartType.AreaChart]: 'areachart',
  [ChartType.GeoChart] : 'geochart',
  [ChartType.BarChart] : 'barchart',
  [ChartType.Map] : 'map',

};

export function getPackageForChart(type: ChartType): string {
  return ChartTypesToPackages[type];
}

export function getDefaultConfig(): GoogleChartsConfig {
  return {
    version: 'current',
    safeMode: false
  };
}
