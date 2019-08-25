import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {


  names = [
    'Mateus',
    'Lucas',
    'Maria',
    'Joana'
  ];

  cities = [
    {
      name: "São Paulo", state: "SP"
    },
    {
      name: "Belo Horizonte", state: "MG"
    },
    {
      name: "Rio de Janeiro", state: "RJ"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
