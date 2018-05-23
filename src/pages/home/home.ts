import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TutorPage } from '../tutor/tutor';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goTutorPage(){
    this.navCtrl.push(TutorPage);

  }

}
