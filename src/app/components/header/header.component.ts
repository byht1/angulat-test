import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/services/bank.services';
import { IPrise } from './../../modul/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'CurrencyConverter';
  bank: IPrise[] = [];

  constructor(private pankService: BankService) {}

  ngOnInit(): void {
    this.pankService.getAll().subscribe((data) => {
      const EUR = Number((1 / data.rates.EUR).toFixed(5));
      const USD = Number((1 / data.rates.USD).toFixed(5));
      this.bank = [
        {
          name: 'EUR',
          course: EUR,
        },
        {
          name: 'USD',
          course: USD,
        },
      ];
    });
  }
}
