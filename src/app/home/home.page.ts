import { Component } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  randomNumber;
  keys;
  constructor(public cryptoService: CryptoService) { }

  generateRandomNumber() {
    this.randomNumber = window.crypto.getRandomValues(new Uint32Array(1))[0];
  }

  generateKeys() {
    this.cryptoService.generatekeys('')

  }


}
