import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'bee-alter',
  templateUrl: './alter.page.html',
  styleUrls: ['./alter.page.scss'],
})
export class AlterPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      backdropDismiss: false,
      cssClass: 'success',
      message: `<ion-icon name="cloud-outline" color="error"></ion-icon>已成功提交！`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
