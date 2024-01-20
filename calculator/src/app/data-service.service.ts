import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  saveHistory(expression: string, result: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/history`, { expression, result });
  }

  getAllCalculations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllCalculations`);
  }
}
