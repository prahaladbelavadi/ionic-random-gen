import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  randomNumber;
  constructor() { }

  generateRandomNumber() {
    this.randomNumber = window.crypto.getRandomValues(new Uint32Array(1))[0];

  }
}
