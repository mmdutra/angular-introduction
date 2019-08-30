import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: 'bob', role: 'admin', lastlogin: new Date('01/01/2019')},
    { login: 'josh', role: 'user', lastlogin: new Date('02/01/2019')},
    { login: 'robin', role: 'admin', lastlogin: new Date('03/01/2019')}
  ]

  constructor() { }

  ngOnInit() {
  }

}
