import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 import { ExperiencePage } from '../experience/experience';
 import { OurJobPage } from '../our-job/our-job';
/**
 * Generated class for the TutorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutor',
  templateUrl: 'tutor.html',
})
export class TutorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorPage');
  }
  goBackHomePage() {
      this.navCtrl.pop();
    }
  OnGoToExperience() {
      this.navCtrl.push(ExperiencePage);
  }
  OnGoToOurJob() {
    this.navCtrl.push(OurJobPage);
}
}
