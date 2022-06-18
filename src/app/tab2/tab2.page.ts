import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  from: string; // the form value is valued as string
  to: string; // the to value is valued as string
  meter: number; // the meter value is valued as number
  total: number; // the total value is valued as number
  result: number; // the result value is valued as number

  constructor() {}
 
  calculate(){ // if clicked the calculate button this function will called
    this.total = (this.meter/1000)*100; // the meter value and the solution to get the result
    this.result = parseFloat(this.total.toFixed(2)) // then the result is converted into float and fixed into tenth decimal places, assuming if it float value
  }
}
