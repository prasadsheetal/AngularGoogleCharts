import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [':host > *:not(h1) { display: inline-block !important; }']
})
export class MainComponent implements OnInit {
  public charts: {
    title: string;
    type: ChartType;
    data: any[][];
    columns?: Column[];
    options?: {};
    groupWidth?: string;
    fallingColor? : string;
    risingColor?: string;
  }[] = [];

  

  @ViewChild('chart', { static: true })
  public chart!: GoogleChartComponent;

  constructor(private router: Router) {
   
    this.charts.push({
      title: 'Treemap Chart',
      type: ChartType.TreeMap,
      columns: undefined,
      data: [
        ['Global',    null,                 0,                               0],
        ['America',   'Global',             0,                               0],
        ['Europe',    'Global',             0,                               0],
        ['Asia',      'Global',             0,                               0],
        ['Australia', 'Global',             0,                               0],
        ['Africa',    'Global',             0,                               0],
        ['Brazil',    'America',            11,                              10],
        ['USA',       'America',            52,                              31],
        ['Mexico',    'America',            24,                              12],
        ['Canada',    'America',            16,                              -23],
        ['France',    'Europe',             42,                              -11],
        ['Germany',   'Europe',             31,                              -2],
        ['Sweden',    'Europe',             22,                              -13],
        ['Italy',     'Europe',             17,                              4],
        ['UK',        'Europe',             21,                              -5],
        ['China',     'Asia',               36,                              4],
        ['Japan',     'Asia',               20,                              -12],
        ['India',     'Asia',               40,                              63],
        ['Laos',      'Asia',               4,                               34],
        ['Mongolia',  'Asia',               1,                               -5],
        ['Israel',    'Asia',               12,                              24],
        ['Iran',      'Asia',               18,                              13],
        ['Pakistan',  'Asia',               11,                              -52],
        ['Egypt',     'Africa',             21,                              0],
        ['S. Africa', 'Africa',             30,                              43],
        ['Sudan',     'Africa',             12,                              2],
        ['Congo',     'Africa',             10,                              12],
        ['Zaire',     'Africa',             8,                               10]
      ],
      options: {
        height: 275
      } 
    });

   
    this.charts.push({
      title: 'Gantt Chart',
      type: ChartType.Gantt,
      // columns: ['Task ID','Task Name','Start Date','End Date','Duration','Percent Complete','Dependencies'],
      data: [
        ['Research', 'Find sources',
         new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
        ['Write', 'Write paper',
         null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
        ['Cite', 'Create bibliography',
         null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
        ['Complete', 'Hand in paper',
         null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
        ['Outline', 'Outline paper',
         null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']
      ],
      options: {
        height: 275
      }
    });

    this.charts.push({
      title: 'Waterfall Chart',
      type: ChartType.CandlestickChart,
      columns: undefined,
      groupWidth: '100%',
      fallingColor: '#a52714' , // red
      risingColor:  '#0f9d58' ,  // green
      data: [
        ['Mon', 28, 28, 38, 38],
          ['Tue', 38, 38, 55, 55],
          ['Wed', 55, 55, 77, 77],
          ['Thu', 77, 77, 66, 66],
          ['Fri', 66, 66, 22, 22]
      ],
      options: {
        height: 275
      }
    });

    
  }

  public onReady() {
    console.log('Chart ready');
  }

  public onError(error: ChartErrorEvent) {
    console.error('Error: ' + error.message.toString());
  }

  public onSelect(event: ChartSelectionChangedEvent){
    console.log('Selected: ' + event.toString());
  }

  public onMouseEnter(event: ChartMouseOverEvent) {
    console.log('Hovering ' + event.toString());
  }

  public onMouseLeave(event: ChartMouseLeaveEvent) {
    console.log('No longer hovering ' + event.toString());
  }

  public ngOnInit() {
    console.log(this.chart);
  }

  // public changeChart() {
  //   this.changingChart.data = [
  //     ['Copper', Math.random() * 20.0],
  //     ['Silver', Math.random() * 20.0],
  //     ['Gold', Math.random() * 20.0],
  //     ['Platinum', Math.random() * 20.0]
  //   ];
  // }

  public navigateToTest() {
    this.router.navigateByUrl('/test');
  }
}
function daysToMilliseconds(days: number) {
  return days * 24 * 60 * 60 * 1000;
}

