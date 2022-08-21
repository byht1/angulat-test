import { Component, OnInit } from '@angular/core';
import { CalcService } from 'src/app/services/calc.services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  course = 0;
  chengValueTo = '1';
  chengValueResult = '1';
  CurrencyTo = 'USD';
  CurrencyResult = 'UAH';

  constructor(private calcService: CalcService) {}

  ngOnInit(): void {
    this.serves();
  }

  serves = (to: string = 'USD', result: string = 'UAH') => {
    this.calcService.getCalc(to, result).subscribe((data) => {
      this.course = data.result;
      this.chengValueResult = (1 * data.result).toFixed(5);
    });
  };

  onChangeTo(event: Event) {
    const target = event.target as HTMLInputElement;
    this.chengValueResult = (this.course * Number(target.value)).toFixed(5);
  }
  onChangeResult(event: Event) {
    const target = event.target as HTMLInputElement;
    this.chengValueTo = (Number(target.value) / this.course).toFixed(5);
  }

  eventCurrencyResult(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.CurrencyResult = target.value;
    this.serves(this.CurrencyTo, this.CurrencyResult);
  }

  eventCurrencyTo(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.CurrencyTo = target.value;
    this.serves(this.CurrencyTo, this.CurrencyResult);
  }
}
