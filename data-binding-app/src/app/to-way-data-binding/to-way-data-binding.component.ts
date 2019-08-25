import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-way-data-binding',
  templateUrl: './to-way-data-binding.component.html',
  styleUrls: ['./to-way-data-binding.component.css']
})
export class ToWayDataBindingComponent implements OnInit {

  name1: string = '';
  name2: string = '';

  client = {
    firstname: 'John',
    lastname: 'Lennon',
    age: 20,
    address: 'Lodon'
  }

  constructor() { }

  ngOnInit() {
  }

}
