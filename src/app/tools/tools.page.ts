import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bee-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
export class ToolsPage implements OnInit {

  tools=[];

  constructor() {
    this.tools = [{
      text: 'A',
      child: [
        {
          icon: 'magnet-outline',
          routerLink: './action-sheet',
          text: 'Action Sheet(动作菜单)'
        }, {
          icon: 'albums-outline',
          routerLink: './alter',
          text: 'Altet(弹框)'
        }]
    }, {
      text: 'B',
      child: [
        {
          icon: 'pricetag-outline',
          routerLink: './badge',
          text: 'Badge(标记)'
        }, {
          icon: 'square-outline',
          // <ion-icon name="square-outline"></ion-icon>
          routerLink: './button',
          text: 'Button(按钮)'
        }]
    }, {
      text: 'C',
      child: [
        {
          icon: 'card',
          routerLink: './card',
          text: 'Card(卡片)'
        }, {
          icon: 'checkbox-outline',
          // <ion-icon name="checkbox-outline"></ion-icon>
          routerLink: './checkbox',
          text: 'CheckBox(复选框)'
        }, {
          icon: 'apps',
          // <ion-icon name="apps"></ion-icon>
          routerLink: './chip',
          text: 'Chip(碎片)'
        }, {
          icon: 'settings',
          routerLink: './content',
          text: 'Content'
        }]
    }, {
      text: 'D',
      child: [
        {
          icon: 'alarm',
          // <ion-icon name="alarm"></ion-icon>
          routerLink: './date-time',
          text: 'Date & Time Pickers(时间选择控件)'
        }]
    }, {
      text: 'F',
      child: [
        {
          icon: 'settings',
          routerLink: './fab',
          text: 'Floating Action Button(悬浮功能按钮) '
        }]
    }, {
      text: 'G',
      child: [
        {
          icon: 'settings',
          routerLink: './grid',
          text: 'Grid(网格布局)'
        }]
    }, {
      text: 'I',
      child: [
        {
          icon: 'settings',
          routerLink: './infinite-scroll',
          text: 'Infinite Scroll(刷新滚动条)'
        }, {
          icon: 'icon',
          routerLink: './icon',
          text: 'Icon(图标)'
        }, {
          icon: 'item',
          routerLink: './item',
          text: 'Item(条目)'
        }]
    }, {
      text: 'L',
      child: [
        {
          icon: 'settings',
          routerLink: './list',
          text: 'List(列表)'
        }]
    }, {
      text: 'M',
      child: [
        {
          icon: 'settings',
          routerLink: './midea',
          text: 'Midea(头像、图片等)'
        }, {
          icon: 'menu',
          routerLink: './menu',
          text: 'Menu(菜单)'
        }, {
          icon: 'modal',
          routerLink: './modal',
          text: 'Modal(模态框)'
        }]
    }, {
      text: 'N',
      child: [
        {
          icon: 'settings',
          routerLink: './nav',
          text: 'Navigation(导航)'
        }]
    }, {
      text: 'P',
      child: [
        {
          icon: 'settings',
          routerLink: './popover',
          text: 'Popover(气泡弹框)'
        }, {
          icon: 'settings',
          routerLink: './progress-indicators',
          text: 'Progress Indicators(进度指示器)'
        }]
    }, {
      text: 'R',
      child: [
        {
          icon: 'radio',
          routerLink: './radio',
          text: 'Radio(单选框)'
        }, {
          icon: 'range',
          routerLink: './range',
          text: 'Range(范围选择器)'
        }, {
          icon: 'settings',
          routerLink: './refresher',
          text: 'Refresher(下拉刷新)'
        }, {
          icon: 'settings',
          routerLink: './reorder',
          text: 'Reorder(拖拽排序)'
        }, {
          icon: 'settings',
          routerLink: './routing',
          text: 'Routing(路由)'
        }]
    }, {
      text: 'S',
      child: [{
        icon: 'settings',
        routerLink: './searchbar',
        text: 'SearchBar(搜索栏)'
      }, {
        icon: 'settings',
        routerLink: './segment',
        text: 'Segment(切换标签)'
      }, {
        icon: 'settings',
        routerLink: './select',
        text: 'Select(下拉选择框)'
      }, {
        icon: 'settings',
        routerLink: './slide',
        text: 'Slide(特效)'
      }]
    }, {
      text: 'T',
      child: [
        {
          icon: 'settings',
          routerLink: './table',
          text: 'Table(表格)'
        }, {
          icon: 'settings',
          routerLink: './tabs',
          text: 'Tabs(标签条)'
        }, {
          icon: 'settings',
          routerLink: './toggle',
          text: 'Toggle(开关)'
        }, {
          icon: 'settings',
          routerLink: './toolbar',
          text: 'Toolbar(工具栏)'
        }, {
          icon: 'typography',
          routerLink: './typography',
          text: 'Typography(排版)'
        }]
    }];
  }

  ngOnInit(): void {
  }
}
