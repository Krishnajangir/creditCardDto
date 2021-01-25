import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly http: HttpClient) { }

  saveCardDetails(userDetails: Object) {
      return this.http.post('http://localhost:3000/creditCardDetails' , userDetails , {responseType: 'text'});
  }
}
