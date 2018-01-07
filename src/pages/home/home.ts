import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(1);
    }
  }

}
