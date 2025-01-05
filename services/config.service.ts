import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  // private apiUrl = 'http://localhost:3000/portal-config';
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  // getPortalConfig(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }

  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl); // Fetch the JSON data
  }
}
