import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICalcData } from '../modul/cald';

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  constructor(private http: HttpClient) {}

  getCalc(to: string, result: string): Observable<ICalcData> {
    return this.http.get<ICalcData>(
      `https://api.exchangerate.host/convert?from=${to}&to=${result}`
    );
  }
}
