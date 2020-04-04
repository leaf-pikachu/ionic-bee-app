import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bee-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input("title")
  title:string;
  @Input("defaultHref")
  defaultHref:string;

  constructor() { }

  ngOnInit() {}

}
