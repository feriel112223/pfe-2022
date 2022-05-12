import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {  ChartType } from 'chart.js';
import { SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['retard'], ['congés'], 'absence'];
  public pieChartData: SingleDataSet = [30, 5, 2];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];




  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
  }
  lineChartData: ChartDataSets[] = [
    { data: [5, 7, 3, 8, 12, 6,0,0], label: 'Nombre des heures de travail du mois Mai' },
  ];
  lineChartLabels: Label[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
  lineChartOptions = {
    responsive: true,
  };
  
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  
  lineChartType: ChartType = 'line';

}
