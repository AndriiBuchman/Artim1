import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfect-toolbox',
  templateUrl: './perfect-toolbox.component.html',
  styleUrls: ['./perfect-toolbox.component.scss']
})
export class PerfectToolboxComponent implements OnInit {

myArray=[
  {cl:"fire-block row",myClass:"fire-text",image1:"fa fa-fire fa-3x",myClass1:"fire-text fire-text-h2-p",title:"Enjoy Nature",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
  {cl:"fire-block row",myClass:"fire-text",image1:"fa fa-magic fa-3x",myClass1:"fire-text fire-text-h2-p",title:"Breath Colour",text:" Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod temporincididunt ut labore et dolore magna aliqua."}
];
myArray1=[
  {cl:"fire-block row",myClass:"fire-text",image1:"fa fa-laptop fa-3x",myClass1:"fire-text fire-text-h2-p",title:"How We Work",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {cl:"fire-block row",myClass:"fire-text",image1:"fa fa-tint fa-3x",myClass1:"fire-text fire-text-h2-p",title:"Campaign",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
];
  constructor() { }

  ngOnInit() {
  }

}
