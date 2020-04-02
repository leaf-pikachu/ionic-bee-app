import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    
  }

  onClick=()=>{
    layui.laydate.render({
      elem: '#test1' //指定元素
    });
    
  }

}
