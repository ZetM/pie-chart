import { Injectable } from '@angular/core';
import { data } from './data';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import * as DATA from "../assets/data.json";

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  url = "../assets/data.json"

  constructor(private httpClient : HttpClient) { 
    this.getData().subscribe()
  }



  getData(): Observable<any> {
    return this.httpClient.get<any>("../assets/data.json");
  }

  getDATA(): data[]{
    return DATA
  }

}
