import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/api/http.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public newsList: any[] = [];
  private page:number = 1;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.$get(`http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=${this.page}`).then(
      (result: any) => {
        console.info(`加载数据:`, result);
        this.newsList = result.result;
      }
    )
  }

}
