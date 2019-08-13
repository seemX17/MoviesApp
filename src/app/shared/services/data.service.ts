import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiBaseUrl: string = environment.apiBaseUrl;
  private geturl: string = this.apiBaseUrl + 'movies';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.geturl);
  }
}
