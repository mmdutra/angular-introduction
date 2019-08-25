import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstName = 'John';
  person = {
    firstname: "Josh",
    lastname: "Bro",
    age: 20,
    address: 'Minas Gerais'
  }

  constructor() { }

  ngOnInit() {
  }

}
