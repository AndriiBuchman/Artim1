import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-block',
  templateUrl: './page-block.component.html',
  styleUrls: ['./page-block.component.scss']
})
export class PageBlockComponent implements OnInit {

myarray=[
  {className:"block col-md-3",clName:"fa fa-filter fa-4x",title:"Easy To Use",text:"Banjo post-ironic master cleanse hoodie plaid put a bird"},
  {className:"block col-md-3",clName:"fa fa-magic fa-4x", title:"Enjoy Nature",text:"Master cleanse banjo post-ironic hoodie plaid put a bird"},
  {className:"block col-md-3",clName:"fa fa-envira fa-4x", title:"Breath Colour",text:"Chia single-origin coffee Etsy, locavore Shoreditch twee whatever"},
  {className:"block col-md-3",clName:"fa fa-signal fa-4x", title:"How We Work",text:"Etsy, locavore Shoreditch twee whatever messenger."} 
]

  constructor() { }

  ngOnInit() {
  }

}
