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
    this.randomNumber = (Math.random() * 4294967296) >>> 0;

  }
}
