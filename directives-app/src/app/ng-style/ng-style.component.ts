import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  myFontSize: string = '15px';
  myColor: string = 'green';
  myclass = "myclass1";

  constructor() { }

  ngOnInit() {
  }

}
