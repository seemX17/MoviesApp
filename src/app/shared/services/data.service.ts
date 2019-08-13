import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiBaseUrl: string = environment.apiBaseUrl;
  private getListUrl: string = this.apiBaseUrl + 'movies';

  constructor(private http: HttpClient) { }

  getData(id?: number) {
    if (!id)
      return this.http.get(this.getListUrl);
    else
      return this.http.get(this.getListUrl + "/" + id);
  }

  postData(payload){
    return this.http.post(this.getListUrl,payload);
  }

}
