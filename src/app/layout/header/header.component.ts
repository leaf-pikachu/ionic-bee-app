import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bee-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input("title")
  private title:string;
  @Input("defaultHref")
  private defaultHref:string;

  constructor() { }

  ngOnInit() {}

}
