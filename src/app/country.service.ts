
import {environment} from "../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }

  getData(url:any){
    let mainUrl = environment.apiUrl+url;
    return this.http.get(mainUrl);


  }

  getStates(url:any,country:any){
    let mainUrl = environment.apiUrl+url;
    return this.http.post(mainUrl,country);

  }

  getFlag(url:any,country:any){
    let mainUrl = environment.apiUrl+url;
    return this.http.post(mainUrl,country);
  }
}
