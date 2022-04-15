import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  ChartBase,
  ChartEditorComponent,
  FilterType,
  Formatter,
  ScriptLoaderService
} from 'angular-google-charts';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: ['.inline > * { display: inline-block; vertical-align: top; }']
})
export class TestComponent {
  public chart = {
   
  };

 
  public filterType = FilterType.NumberRange;

  public chartWrapperSpecs: google.visualization.ChartSpecs = {
    chartType: ''
  };

  public readonly formatters$: Observable<Formatter[]> = this.scriptLoaderService.loadChartPackages().pipe(
    share(),
    map(() => [
      { colIndex: 1, formatter: new google.visualization.NumberFormat({ fractionDigits: 0, prefix: '$', suffix: '‰' }) }
    ])
  );

  @ViewChild(ChartEditorComponent)
  public readonly editor!: ChartEditorComponent;

  constructor(private location: Location, private scriptLoaderService: ScriptLoaderService) {}

  public edit(chart: ChartBase) {
    this.editor
      .editChart(chart)
      .afterClosed()
      .subscribe(result => {
        if (result) {
          console.log(result);
        } else {
          console.log('Editing was cancelled');
        }
      });
  }

  public goBack() {
    this.location.back();
  }
}
