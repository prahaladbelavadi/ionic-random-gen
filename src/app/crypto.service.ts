import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(public http: HttpClient) { }

  generatekeys(randomNumber) {
    this.http.post('http://localhost:3000/generate', randomNumber)
      .toPromise()
      .then((response) => {
        console.log(response);
      })
  }


}
