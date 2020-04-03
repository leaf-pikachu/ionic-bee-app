import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'bee-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  actionSheetList: any[];
  now = new Date();

  constructor(private actionSheetController: ActionSheetController) {
    this.actionSheetList = [
      {
        title: '模块一'
      }, {
        title: '模块二'
      }
    ];
  }

  ngOnInit() {
  }

  async presentActionSheet(data: any) {
    const actionSheet =  await this.actionSheetController.create({
      header: `${data.title}`, // 提示信息
      animated: true, // 动画效果
      backdropDismiss: false, // 背景点击关闭Sheet
      subHeader: '123',
      buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: 'share',
          cssClass: 'success',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
      }]
    });
    await actionSheet.present();
  }
}
