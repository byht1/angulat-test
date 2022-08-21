import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBank } from '../modul/data';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IBank> {
    return this.http.get<IBank>(
      'https://api.exchangerate.host/latest?base=UAH&symbols=EUR,USD'
    );
  }
}
